import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { languages } from "../data/studyDevData";

// Mapa rápido id -> linguagem completa
const getSample = (langId) => {
  const lang = languages.find((l) => l.id === langId);
  return lang?.hello_world?.code || `// Exemplo ${langId}\nconsole.log("Hello, World!");`;
};

const StudyBotScreen = () => {
  const linguagensDisponiveis = useMemo(() => languages, []);
  const [linguagemId, setLinguagemId] = useState("cpp");
  const displayLinguagem = useMemo(
    () => linguagensDisponiveis.find((l) => l.id === linguagemId)?.name || linguagemId,
    [linguagemId, linguagensDisponiveis]
  );
  const [codigo, setCodigo] = useState(getSample("cpp"));
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [analysis, setAnalysis] = useState({ issues: [], suggestions: [] });
  const [output, setOutput] = useState("");

  const lineNumbers = useMemo(() => codigo.split("\n"), [codigo]);

  const handleSelect = useCallback((id) => {
    setLinguagemId(id);
    setCodigo(getSample(id));
    setDropdownAberto(false);
    setAnalysis({ issues: [], suggestions: [] });
    setOutput("");
  }, []);

  const handleAnalisar = useCallback(() => {
    const issues = [];
    const suggestions = [];
    const lines = codigo.split("\n");
    lines.forEach((line, i) => {
      if (/\s+$/.test(line)) issues.push(`Linha ${i + 1}: espaços à direita`);
      if (line.length > 120) suggestions.push(`Linha ${i + 1}: quebre linhas longas`);
    });
    if (!codigo.endsWith("\n")) suggestions.push("Adicione quebra de linha ao final");
    if (linguagemId === "javascript" && /\bvar\b/.test(codigo)) suggestions.push("Prefira let/const em vez de var");
    if (linguagemId === "python" && /\t/.test(codigo)) issues.push("Python: use 4 espaços em vez de tab");
    if (issues.length === 0 && suggestions.length === 0) {
      suggestions.push("Nenhum problema crítico encontrado. Bom trabalho!");
    }
    setAnalysis({ issues, suggestions });
  }, [codigo, linguagemId]);

  const handleFix = useCallback(() => {
    let out = codigo.replace(/[ \t]+$/gm, "");
    if (!out.endsWith("\n")) out += "\n";
    if (linguagemId === "javascript" || linguagemId === "typescript") {
      out = out.replace(/\bvar\b/g, "let");
    }
    if (linguagemId === "python") {
      out = out.replace(/\t/g, "    ");
    }
    setOutput(out);
    setCodigo(out);
  }, [codigo, linguagemId]);

  const handleReset = useCallback(() => {
    const sample = getSample(linguagemId);
    setCodigo(sample);
    setOutput("");
    setAnalysis({ issues: [], suggestions: [] });
  }, [linguagemId]);

  const handleClear = useCallback(() => {
    setCodigo("");
    setOutput("");
    setAnalysis({ issues: [], suggestions: [] });
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>
        StudyBot: seu revisor{"\n"}de código
      </Text>
      <Text style={styles.subtitle}>
        Escolha a linguagem ({linguagensDisponiveis.length} disponíveis), cole seu código e veja o que dá pra melhorar.
      </Text>

      <View style={styles.editorCard}>
        <Text style={styles.editorTitle}>Editor</Text>
        <Text style={styles.editorLabel}>Linguagem — {displayLinguagem}</Text>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setDropdownAberto(!dropdownAberto)}
          activeOpacity={0.7}
        >
          <Text style={styles.dropdownText}>{displayLinguagem}</Text>
          <Ionicons
            name={dropdownAberto ? "chevron-up" : "chevron-down"}
            size={20}
            color="#8b949e"
          />
        </TouchableOpacity>

        {dropdownAberto && (
          <View style={styles.dropdownList}>
            <ScrollView style={{ maxHeight: 220 }} nestedScrollEnabled>
              {linguagensDisponiveis.map((l) => (
                <TouchableOpacity
                  key={l.id}
                  style={[
                    styles.dropdownItem,
                    l.id === linguagemId && styles.dropdownItemActive,
                  ]}
                  onPress={() => handleSelect(l.id)}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      l.id === linguagemId && styles.dropdownItemTextActive,
                    ]}
                  >
                    {l.name} · {l.id}
                  </Text>
                  {l.id === linguagemId && <Ionicons name="checkmark" size={16} color="#58a6ff" />}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        <View style={styles.codeContainer}>
          <View style={styles.lineNumbers}>
            {lineNumbers.map((_, i) => (
              <Text key={i} style={styles.lineNumber}>
                {i + 1}
              </Text>
            ))}
          </View>
          <TextInput
            style={styles.codeInput}
            multiline
            value={codigo}
            onChangeText={setCodigo}
            autoCapitalize="none"
            autoCorrect={false}
            selectionColor="#58a6ff"
            placeholder="Cole seu código aqui..."
            placeholderTextColor="#484f58"
          />
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleAnalisar}>
            <Text style={styles.actionText}>Analisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeAction} onPress={handleFix}>
            <Text style={styles.activeActionText}>Corrigir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleReset}>
            <Text style={styles.actionText}>Exemplo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleClear}>
            <Text style={styles.actionText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.reportCard}>
        <View style={styles.reportHeader}>
          <Ionicons name="alert-circle-outline" size={18} color="#f85149" />
          <Text style={styles.reportTitle}>Problemas encontrados</Text>
        </View>
        {analysis.issues.length === 0 ? (
          <Text style={styles.mutedReport}>Nenhum problema por enquanto. Toque em Analisar.</Text>
        ) : (
          analysis.issues.map((iss, i) => (
            <View key={`iss-${i}`} style={styles.issueRow}>
              <View style={styles.dotError} />
              <Text style={styles.issueText}>{iss}</Text>
            </View>
          ))
        )}

        <View style={[styles.reportHeader, { marginTop: 18 }]}>
          <Ionicons name="bulb-outline" size={18} color="#58a6ff" />
          <Text style={styles.reportTitle}>Sugestões</Text>
        </View>
        {analysis.suggestions.length === 0 ? (
          <Text style={styles.mutedReport}>Sem sugestões ainda. Analise seu código pra ver dicas.</Text>
        ) : (
          analysis.suggestions.map((sug, i) => (
            <View key={`sug-${i}`} style={styles.issueRow}>
              <View style={styles.dotInfo} />
              <Text style={styles.suggestionText}>{sug}</Text>
            </View>
          ))
        )}

        {output ? (
          <>
            <View style={[styles.reportHeader, { marginTop: 18 }]}>
              <Ionicons name="code-slash-outline" size={18} color="#3fb950" />
              <Text style={styles.reportTitle}>Código corrigido</Text>
            </View>
            <View style={styles.outputBox}>
              <Text style={styles.outputText}>{output}</Text>
            </View>
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default StudyBotScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d1117" },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: "800", color: "#e6edf3", textAlign: "center", marginBottom: 10, lineHeight: 30 },
  subtitle: { fontSize: 13, color: "#8b949e", textAlign: "center", lineHeight: 20, marginBottom: 20 },
  editorCard: {
    backgroundColor: "#161b22",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#21262d",
    padding: 16,
    marginBottom: 16,
  },
  editorTitle: { fontSize: 20, fontWeight: "800", color: "#e6edf3", textAlign: "center", marginBottom: 2 },
  editorLabel: { fontSize: 12, color: "#8b949e", textAlign: "center", marginBottom: 10 },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d1117",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#30363d",
  },
  dropdownText: { color: "#e6edf3", fontSize: 15, fontWeight: "600" },
  dropdownList: {
    backgroundColor: "#0d1117",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#30363d",
    marginBottom: 10,
    overflow: "hidden",
  },
  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#21262d",
  },
  dropdownItemActive: { backgroundColor: "#1f6feb18" },
  dropdownItemText: { color: "#8b949e", fontSize: 13 },
  dropdownItemTextActive: { color: "#58a6ff", fontWeight: "700" },
  codeContainer: {
    flexDirection: "row",
    backgroundColor: "#0d1117",
    borderRadius: 8,
    padding: 12,
    minHeight: 160,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#21262d",
  },
  lineNumbers: { marginRight: 12, alignItems: "flex-end" },
  lineNumber: { color: "#484f58", fontFamily: "monospace", fontSize: 12, lineHeight: 18 },
  codeInput: { flex: 1, color: "#e6edf3", fontFamily: "monospace", fontSize: 12, lineHeight: 18, textAlignVertical: "top" },
  actionsContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4 },
  actionButton: { paddingVertical: 6, paddingHorizontal: 10 },
  actionText: { color: "#8b949e", fontSize: 13, fontWeight: "600" },
  activeAction: { backgroundColor: "#58a6ff", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14 },
  activeActionText: { color: "#0d172a", fontSize: 11, fontWeight: "700", textAlign: "center", lineHeight: 13 },
  reportCard: { backgroundColor: "#161b22", borderRadius: 14, borderWidth: 1, borderColor: "#21262d", padding: 16 },
  reportHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 },
  reportTitle: { fontSize: 15, fontWeight: "700", color: "#e6edf3" },
  mutedReport: { color: "#484f58", fontSize: 13, fontStyle: "italic" },
  issueRow: { flexDirection: "row", gap: 8, alignItems: "flex-start", marginBottom: 8 },
  dotError: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#f85149", marginTop: 6, flexShrink: 0 },
  dotInfo: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#58a6ff", marginTop: 6, flexShrink: 0 },
  issueText: { flex: 1, color: "#f85149", fontSize: 13, lineHeight: 18 },
  suggestionText: { flex: 1, color: "#8b949e", fontSize: 13, lineHeight: 18 },
  outputBox: { backgroundColor: "#0d1117", borderWidth: 1, borderColor: "#21262d", borderRadius: 8, padding: 12, marginTop: 8 },
  outputText: { color: "#3fb950", fontFamily: "monospace", fontSize: 12, lineHeight: 17 },
});
