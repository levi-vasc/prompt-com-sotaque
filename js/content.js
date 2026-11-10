/**
 * CONTEÚDO ESTÁTICO DA PÁGINA: Bússola Intercultural e Ficha Crítica & Ética.
 * Edite os textos aqui; o HTML é gerado ao carregar a página.
 */
const compassPillars = [
  { tag: "01. [Persona]", color: "indigo", icon: "👤", title: "Quem fala e de onde fala?",
    text: "Estabelece a identidade, a ancoragem regional e a postura ético-pedagógica do modelo, desarmando o tom corporativo padronizado do Vale do Silício." },
  { tag: "02. [Contexto]", color: "sky", icon: "📍", title: "Qual é o cenário real/território?",
    text: "Insere a infraestrutura concreta: clima local, transporte público, arquitetura escolar e realidade econômica dos estudantes." },
  { tag: "03. [Tarefa]", color: "emerald", icon: "🎯", title: "O que explicar e como?",
    text: "Define o objetivo preciso, o gênero textual (tabela comparativa, caso prático, analogia física) e garante o rigor conceitual sem rebaixar o conteúdo." },
  { tag: "04. [Negative Prompt]", color: "red", icon: "🚫", title: "O que a IA está proibida de fazer?",
    text: "Barra explicitamente o folclorismo caricato (gírias forçadas) e interdita referências importadas (FICO score, neve, lareiras)." }
];

const ethicsSections = [
  { color: "indigo", title: "1. Autoria Humana e Agência Pedagógica",
    html: "A Inteligência Artificial Generativa não é sujeito pedagógico nem oráculo cultural; é um sistema probabilístico de cálculo estatístico sobre corpora textuais hegemônicos. A autoria e a intencionalidade formativa residem exclusivamente no docente e nos estudantes, que atuam como curadores críticos na modulação dos parâmetros de entrada e na recusa de respostas homogeneizantes." },
  { color: "sky", title: "2. Transparência Algorítmica e Corpora Hegemônicos",
    html: "Prompts Zero-Shot em modelos de linguagem acionam, por inércia estatística, os padrões semânticos mais frequentes dos dados pré-treinados — majoritariamente gerados no norte global e na língua inglesa. O viés não é um \"defeito ocasional\", mas o comportamento padrão esperado de qualquer modelo desprovido de contexto territorial explícito." },
  { color: "emerald", title: "3. Equidade Cognitiva e Territorialização dos Saberes",
    html: "A transposição didática autêntica exige que o estudante reconheça a aplicabilidade dos conceitos científicos (como termodinâmica, juros compostos ou gramática normativa) dentro de seu ecossistema material diário. Ensinar física através de \"neve no telhado\" ou economia através de \"FICO score\" gera alienação epistêmica e exclusão cognitiva." },
  { color: "red", title: "4. Mitigação do Folclorismo e da Caricatura Reversa",
    html: "A adaptação cultural ingênua frequentemente cai na armadilha do estereótipo (\"alucinação folclórica\"), em que o modelo compensa a falta de repertório local exagerando gírias, exotizando costumes e infantilizando o aluno. O <em>Negative Prompting</em> é essencial para interditar o clichê enquanto preserva a dignidade cultural e o rigor científico." }
];

document.getElementById("compassContent").innerHTML = compassPillars.map(p => `
  <div class="p-4 rounded-xl bg-${p.color}-950/30 border border-${p.color}-500/30 hover:border-${p.color}-400 transition group">
    <div class="flex items-center justify-between mb-2">
      <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-${p.color}-400 bg-${p.color}-500/10 px-2 py-0.5 rounded border border-${p.color}-500/20">${p.tag}</span>
      <span class="text-${p.color}-400 text-base">${p.icon}</span>
    </div>
    <h4 class="text-sm font-bold text-white mb-1">${p.title}</h4>
    <p class="text-xs text-slate-300 leading-relaxed">${p.text}</p>
  </div>`).join("");

document.getElementById("ethicsSections").innerHTML = ethicsSections.map(s => `
  <div class="p-4 rounded-xl bg-${s.color}-950/30 border border-${s.color}-500/30">
    <h4 class="text-sm font-bold text-${s.color}-300 mb-1">${s.title}</h4>
    <p>${s.html}</p>
  </div>`).join("");
