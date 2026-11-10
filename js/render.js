/**
 * RENDERIZAÇÃO DAS TABS DO SELETOR DE CARTAS
 */
function renderTabs() {
  const container = document.getElementById("cardTabsContainer");
  container.innerHTML = "";

  cardsData.forEach((card, idx) => {
    const isActive = idx === state.activeCardIndex;
    const isAudited = state.auditedCards.has(card.id);
    const biasTotal = card.biasItems.length;
    const biasChecked = state.biasCheckedItems[card.id].size;

    const tab = document.createElement("button");
    tab.className = `flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${isActive
      ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-glow-amber"
      : "bg-slate-900/80 text-slate-400 border-slate-700/60 hover:text-slate-200 hover:bg-slate-800"
      }`;

    tab.innerHTML = `
      <span>${card.icon}</span>
      <span class="font-sans font-bold">Carta 0${card.id}</span>
      <span class="text-[11px] opacity-75 hidden sm:inline">(${card.discipline})</span>
      ${isAudited
        ? '<span class="w-2 h-2 rounded-full bg-emerald-400" title="Gabarito Auditado"></span>'
        : `<span class="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">${biasChecked}/${biasTotal}</span>`
      }
    `;

    tab.addEventListener("click", () => {
      if (state.activeCardIndex !== idx) {
        switchCard(idx);
      }
    });

    container.appendChild(tab);
  });

  // Atualiza o contador de progresso
  const progressCounter = document.getElementById("progressCounter");
  progressCounter.textContent = `${state.auditedCards.size}/${cardsData.length}`;
  progressCounter.className = state.auditedCards.size === cardsData.length
    ? "font-bold text-emerald-400"
    : "font-bold text-amber-400";

  // Atualiza total de vieses encontrados
  let totalFound = 0;
  let totalBiases = 0;
  cardsData.forEach(c => {
    totalFound += state.biasCheckedItems[c.id].size;
    totalBiases += c.biasItems.length;
  });
  const biasGlobalCounter = document.getElementById("totalBiasesCounter");
  if (biasGlobalCounter) {
    biasGlobalCounter.textContent = `${totalFound}/${totalBiases}`;
  }
}

/**
 * RENDERIZAÇÃO DA CARTA ATIVA
 */
function renderActiveCard() {
  const card = cardsData[state.activeCardIndex];

  // 1. Cabeçalho da Frente
  const frontHeader = document.getElementById("frontHeader");
  frontHeader.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-2xl flex-shrink-0">
        ${card.icon}
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            Carta 0${card.id} • ${card.discipline}
          </span>
        </div>
        <h3 class="text-lg sm:text-xl font-bold font-display text-white">
          ${card.topic}
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">
          <strong class="text-slate-300">Objetivo:</strong> ${card.objective}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
      <span class="text-xs font-mono text-slate-400">Status:</span>
      <span class="text-xs font-mono px-2.5 py-1 rounded-lg ${state.auditedCards.has(card.id) ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'}">
        ${state.auditedCards.has(card.id) ? 'Concluída ✓' : 'Em Diagnóstico'}
      </span>
    </div>
  `;

  // 2. Prompt Ingênuo e Resposta Enviesada Interativa (Estratégia 2: Auditoria Forense no Texto)
  document.getElementById("naivePromptText").textContent = `"${card.naivePrompt}"`;

  const biasedBox = document.getElementById("biasedOutputText");
  biasedBox.innerHTML = (card.interactiveBiasedText || card.biasedOutput).replace(/\n/g, '<br/>');

  // 3. Tentativa Rasa (se houver)
  const shallowBox = document.getElementById("shallowAttemptBox");
  const shallowContent = document.getElementById("shallowAttemptContent");
  if (card.shallowAttempt) {
    shallowBox.classList.remove("hidden");
    shallowContent.innerHTML = `
      <div class="font-mono text-amber-300 mb-1">Prompt: "${card.shallowAttempt.prompt}"</div>
      <div class="text-slate-200"><strong>Retorno Caricato:</strong> ${card.shallowAttempt.interactiveOutput || `"${card.shallowAttempt.output}"`}</div>
    `;
  } else {
    shallowBox.classList.add("hidden");
  }

  // 4. Configuração dos Alvos Interativos no Texto (Click-to-Highlight)
  setupInteractiveAuditTokens(card);

  // 5. Renderização do Dossiê Forense de Evidências (Substitui as antigas checkboxes)
  renderBiasDossier(card);

  // 6. Textarea de Rascunho
  const draftTextarea = document.getElementById("studentPromptDraft");
  draftTextarea.value = state.studentDrafts[card.id] || "";
  updateDraftCharCount();
  updateDraftScaffolding(draftTextarea.value);

  // 6. Cabeçalho do Verso
  const backHeader = document.getElementById("backHeader");
  backHeader.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-2xl flex-shrink-0">
        ✨
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Gabarito Comentado
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50">
            Verso da Carta
          </span>
        </div>
        <h3 class="text-lg sm:text-xl font-bold font-display text-white">
          Engenharia Intercultural: ${card.discipline} (${card.topic})
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">
          ${card.pedagogicalRationale}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
      <button id="quickBackToFront" class="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1 transition">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        Rever Frente
      </button>
    </div>
  `;
  document.getElementById("quickBackToFront").addEventListener("click", flipCard);

  // 7. Visualizador do Rascunho do Aluno no Verso
  const draftComparisonView = document.getElementById("studentDraftComparisonView");
  const userText = state.studentDrafts[card.id]?.trim();
  if (userText) {
    draftComparisonView.textContent = userText;
    draftComparisonView.classList.remove("text-slate-500", "italic");
  } else {
    draftComparisonView.innerHTML = `
      <span class="text-slate-500 italic block">
        Nenhum rascunho foi digitado no laboratório da frente.<br/>
        (Você pode voltar e experimentar a qualquer momento para comparar sua hipótese com a solução).
      </span>
    `;
    draftComparisonView.classList.add("text-slate-500", "italic");
  }

  // 8. Blocos Coloridos do Prompt Calibrado (Verso)
  const calibratedBlocks = document.getElementById("calibratedPromptBlocks");
  calibratedBlocks.innerHTML = `
    <!-- Persona -->
    <div class="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30">
      <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-indigo-400"></span> [Persona]
      </div>
      <p class="text-xs text-slate-200 font-mono leading-relaxed">${card.calibratedPrompt.persona}</p>
    </div>

    <!-- Contexto -->
    <div class="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30">
      <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-sky-400"></span> [Contexto]
      </div>
      <p class="text-xs text-slate-200 font-mono leading-relaxed">${card.calibratedPrompt.context}</p>
    </div>

    <!-- Tarefa -->
    <div class="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
      <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span> [Tarefa]
      </div>
      <p class="text-xs text-slate-200 font-mono leading-relaxed">${card.calibratedPrompt.task}</p>
    </div>

    <!-- Restrições -->
    <div class="p-3 rounded-lg bg-red-950/40 border border-red-500/30">
      <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-red-400"></span> [Restrições / Negative Prompt]
      </div>
      <p class="text-xs text-slate-200 font-mono leading-relaxed">${card.calibratedPrompt.restrictions}</p>
    </div>
  `;

  // 9. Output Calibrado
  document.getElementById("calibratedOutputContent").innerHTML = card.calibratedOutput;
}
