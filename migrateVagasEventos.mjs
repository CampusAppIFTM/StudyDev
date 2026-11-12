
/**
 * StudyDev — Migração de vagas e eventos para o Cloud Firestore.
 *
 * Arquivos esperados:
 *   ./vagas.js
 *   ./eventos.js
 *
 * Instalação:
 *   npm install firebase-admin
 *
 * Autenticação:
 *   gcloud auth application-default login
 */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const projectId = process.env.FIREBASE_PROJECT_ID || 'studydeviftm';

const vagasFile = resolve(
  process.env.STUDYDEV_VAGAS_FILE || './vagas.js'
);

const eventosFile = resolve(
  process.env.STUDYDEV_EVENTOS_FILE || './eventos.js'
);

const BATCH_SIZE = 400;

async function loadDataModule(filePath) {
  // Lê o arquivo local e importa usando uma URL file:// válida.
  await readFile(filePath, 'utf8');
  return import(pathToFileURL(filePath).href);
}

function validateArray(exportName, value) {
  if (!Array.isArray(value)) {
    throw new Error(
      `O export "${exportName}" não existe ou não é um array.`
    );
  }

  const ids = new Set();

  for (const item of value) {
    if (!item || typeof item.id !== 'string' || !item.id.trim()) {
      throw new Error(`Item sem ID válido em "${exportName}".`);
    }

    if (item.id.includes('/')) {
      throw new Error(`ID inválido: ${item.id}`);
    }

    if (ids.has(item.id)) {
      throw new Error(`ID duplicado em "${exportName}": ${item.id}`);
    }

    ids.add(item.id);
  }

  return value;
}

function warnAboutExampleData(collection, documents) {
  const hasExampleLinks = documents.some(
    item => typeof item.link === 'string' &&
      item.link.includes('example.com')
  );

  const hasOldDates = documents.some(item => {
    const date = item.date || item.publishedAt;
    return typeof date === 'string' && /^2024-/.test(date);
  });

  if (hasExampleLinks || hasOldDates) {
    console.warn(
      `ATENÇÃO: "${collection}" contém links de exemplo ou datas antigas.`
    );
    console.warn(
      'Revise os dados antes de exibi-los como oportunidades reais.'
    );
  }
}

async function writeCollection(db, collectionName, documents) {
  let batch = db.batch();
  let pending = 0;

  for (const document of documents) {
    const { id, ...fields } = document;

    batch.set(
      db.collection(collectionName).doc(id),
      fields,
      { merge: true }
    );

    pending++;

    if (pending >= BATCH_SIZE) {
      await batch.commit();
      batch = db.batch();
      pending = 0;
    }
  }

  if (pending > 0) {
    await batch.commit();
  }

  console.log(
    `OK: ${collectionName} — ${documents.length} documento(s).`
  );
}

async function main() {
  console.log(`Projeto Firebase: ${projectId}`);
  console.log(`Arquivo de vagas: ${vagasFile}`);
  console.log(`Arquivo de eventos: ${eventosFile}`);

  // Valida os dois arquivos antes de gravar no Firestore.
  const [vagasModule, eventosModule] = await Promise.all([
    loadDataModule(vagasFile),
    loadDataModule(eventosFile)
  ]);

  const vagas = validateArray('vagas', vagasModule.vagas);
  const eventos = validateArray('eventos', eventosModule.eventos);

  console.log(`Vagas encontradas: ${vagas.length}`);
  console.log(`Eventos encontrados: ${eventos.length}`);

  warnAboutExampleData('vagas', vagas);
  warnAboutExampleData('eventos', eventos);

  initializeApp({
    credential: applicationDefault(),
    projectId
  });

  const db = getFirestore();

  await writeCollection(db, 'vagas', vagas);
  await writeCollection(db, 'eventos', eventos);

  console.log('\nMigração concluída.');
  console.log('Coleções: vagas e eventos.');
  console.log('O aplicativo não foi alterado.');
}

main().catch(error => {
  console.error('\nERRO na migração:', error.message || error);
  process.exitCode = 1;
});
