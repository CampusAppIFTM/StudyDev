/**
 * StudyDev -> Cloud Firestore
 *
 * Migra:
 *   - languages
 *   - aboutDetails
 *   - roadmaps
 *
 * Não altera:
 *   - Firebase Authentication
 *   - Login
 *   - Navegação
 *
 * Requisitos:
 *   npm install firebase-admin
 *
 * PowerShell:
 *   $env:FIREBASE_PROJECT_ID="SEU_ID_FIREBASE"
 *   $env:STUDYDEV_DATA_FILE="src\data\studyDevData.js"
 *   node .\migrateStudyDevData.mjs
 */

import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  applicationDefault,
  initializeApp,
} from "firebase-admin/app";

import {
  getFirestore,
} from "firebase-admin/firestore";

// =====================================================
// CONFIGURAÇÃO
// =====================================================

const projectId = process.env.FIREBASE_PROJECT_ID;

const dataFile = resolve(
  process.cwd(),
  process.env.STUDYDEV_DATA_FILE || "./src/data/studyDevData.js"
);

const BATCH_SIZE = 400;

// =====================================================
// VALIDAR CONFIGURAÇÃO
// =====================================================

if (!projectId) {
  throw new Error(
    'Defina FIREBASE_PROJECT_ID com o ID do projeto Firebase.'
  );
}

// =====================================================
// CARREGAR studyDevData.js
// =====================================================

async function loadDataModule(filePath) {
  // Verifica se o arquivo realmente existe.
  await access(filePath);

  // Lê o conteúdo do arquivo.
  const source = await readFile(filePath, "utf8");

  // Importa o arquivo como módulo JavaScript.
  // Funciona com exports como:
  // export const languages = [...]
  // export const aboutDetails = {...}
  // export const roadmaps = [...]
  //
  // O arquivo deve ser autossuficiente, sem imports relativos.
  const dataUrl =
    `data:text/javascript;base64,${Buffer.from(
      source,
      "utf8"
    ).toString("base64")}`;

  return await import(dataUrl);
}

// =====================================================
// VALIDAR ARRAYS
// =====================================================

function validateArray(collectionName, value) {
  if (!Array.isArray(value)) {
    throw new Error(
      `O export "${collectionName}" não é um array.`
    );
  }

  const seen = new Set();

  for (const item of value) {
    if (
      !item ||
      typeof item.id !== "string" ||
      item.id.trim() === ""
    ) {
      throw new Error(
        `Existe um item sem ID válido em "${collectionName}".`
      );
    }

    if (item.id.includes("/")) {
      throw new Error(
        `ID inválido em "${collectionName}": ${item.id}`
      );
    }

    if (seen.has(item.id)) {
      throw new Error(
        `ID duplicado em "${collectionName}": ${item.id}`
      );
    }

    seen.add(item.id);
  }

  return value;
}

// =====================================================
// VALIDAR aboutDetails
// =====================================================

function validateObject(name, value) {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    throw new Error(
      `O export "${name}" precisa ser um objeto.`
    );
  }

  for (const [id, data] of Object.entries(value)) {
    if (
      !id ||
      id.includes("/") ||
      !data ||
      typeof data !== "object" ||
      Array.isArray(data)
    ) {
      throw new Error(
        `Entrada inválida em "${name}" para a chave "${id}".`
      );
    }
  }

  return value;
}

// =====================================================
// GRAVAR DOCUMENTOS NO FIRESTORE
// =====================================================

async function writeCollection(
  db,
  collectionName,
  documents
) {
  let batch = db.batch();
  let pending = 0;
  let written = 0;

  for (const document of documents) {
    const { id, ...fields } = document;

    const documentRef = db
      .collection(collectionName)
      .doc(id);

    // Atualiza os campos enviados e preserva campos extras
    // já existentes nos documentos.
    batch.set(documentRef, fields, {
      merge: true,
    });

    pending++;
    written++;

    // Mantém cada lote abaixo do limite de operações.
    if (pending >= BATCH_SIZE) {
      await batch.commit();

      console.log(
        `Lote gravado em "${collectionName}".`
      );

      batch = db.batch();
      pending = 0;
    }
  }

  // Grava as operações restantes.
  if (pending > 0) {
    await batch.commit();
  }

  console.log(
    `OK: ${collectionName}: ${written} documento(s) enviado(s).`
  );

  return written;
}

// =====================================================
// EXECUTAR MIGRAÇÃO
// =====================================================

async function main() {
  console.log("======================================");
  console.log(" MIGRAÇÃO STUDYDEV PARA FIRESTORE");
  console.log("======================================");

  console.log("\nProjeto Firebase:");
  console.log(projectId);

  console.log("\nArquivo de dados:");
  console.log(dataFile);

  // Carrega os dados.
  const data = await loadDataModule(dataFile);

  // Valida os três exports antes de gravar.
  const languages = validateArray(
    "languages",
    data.languages
  );

  const roadmaps = validateArray(
    "roadmaps",
    data.roadmaps
  );

  const aboutDetails = validateObject(
    "aboutDetails",
    data.aboutDetails
  );

  // Converte o objeto aboutDetails em documentos.
  // A chave original vira o ID do documento.
  const detailsDocuments = Object.entries(
    aboutDetails
  ).map(([id, fields]) => ({
    id,
    ...fields,
  }));

  // Mostra o resumo antes de acessar o banco.
  console.log("\nResumo dos dados:");
  console.log(`languages: ${languages.length}`);
  console.log(`aboutDetails: ${detailsDocuments.length}`);
  console.log(`roadmaps: ${roadmaps.length}`);

  // Inicializa Firebase Admin.
  initializeApp({
    credential: applicationDefault(),
    projectId,
  });

  const db = getFirestore();

  console.log("\nIniciando gravação no Firestore...\n");

  // Migra as três coleções.
  await writeCollection(
    db,
    "languages",
    languages
  );

  await writeCollection(
    db,
    "aboutDetails",
    detailsDocuments
  );

  await writeCollection(
    db,
    "roadmaps",
    roadmaps
  );

  console.log("\n======================================");
  console.log(" MIGRAÇÃO CONCLUÍDA");
  console.log("======================================");

  console.log(
    "Confira as coleções no Firebase Console."
  );

  console.log(
    "Login, Authentication e navegação não foram alterados."
  );
}

// =====================================================
// TRATAMENTO DE ERROS
// =====================================================

main().catch((error) => {
  console.error("\nERRO NA MIGRAÇÃO:");

  console.error(
    error?.stack || error?.message || error
  );

  process.exitCode = 1;
});