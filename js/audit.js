/**
 * VERIFICAÇÃO DE COBERTURA DO RASCUNHO DO ALUNO (SCAFFOLDING)
 */
function updateDraftScaffolding(text) {
  const lower = text.toLowerCase();

  const hasPersona = lower.includes("persona") || lower.includes("professor") || lower.includes("educador") || lower.includes("atue como");
  const hasContext = lower.includes("contexto") || lower.includes("estudante") || lower.includes("aluno") || lower.includes("escola") || lower.includes("rua") || lower.includes("transporte");
  const hasTask = lower.includes("tarefa") || lower.includes("explique") || lower.includes("crie") || lower.includes("simul") || lower.includes("tabela");
  const hasNegative = lower.includes("restriç") || lower.includes("negative") || lower.includes("não utilize") || lower.includes("evite") || lower.includes("sem gíria") || lower.includes("proib");

  function updateBadge(id, active, label, activeClasses) {
    const badge = document.getElementById(id);
    if (!badge) return;
    if (active) {
      badge.className = `px-2 py-0.5 rounded font-bold border ${activeClasses}`;
      badge.textContent = `${label} ✓`;
    } else {
      badge.className = "px-2 py-0.5 rounded bg-slate-800 text-slate-400";
      badge.textContent = `${label} ⚪`;
    }
  }

  updateBadge("badgePersonaDetect", hasPersona, "Persona", "bg-indigo-500/20 text-indigo-300 border-indigo-500/40");
  updateBadge("badgeContextDetect", hasContext, "Contexto", "bg-sky-500/20 text-sky-300 border-sky-500/40");
  updateBadge("badgeTaskDetect", hasTask, "Tarefa", "bg-emerald-500/20 text-emerald-300 border-emerald-500/40");
  updateBadge("badgeNegativeDetect", hasNegative, "Restrições", "bg-red-500/20 text-red-300 border-red-500/40");
}

/**
 * MOTOR DE AUDITORIA FORENSE NO TEXTO (ESTRATÉGIA 2)
 */
function showAuditFeedback(type, title, message) {
  const bar = document.getElementById("auditFeedbackBar");
  if (!bar) return;
  bar.classList.remove("hidden", "border-emerald-500/40", "text-emerald-300", "bg-emerald-950/40", "border-amber-500/40", "text-amber-300", "bg-amber-950/40");
  if (type === "found") {
    bar.classList.add("border-emerald-500/40", "text-emerald-300", "bg-emerald-950/40");
  } else {
    bar.classList.add("border-amber-500/40", "text-amber-300", "bg-amber-950/40");
  }
  bar.innerHTML = `<strong>${title}:</strong> ${message}`;
  setTimeout(syncCardHeight, 50);
}

function handleAuditTokenClick(token, card) {
  const auditType = token.getAttribute("data-audit");
  const checkedSet = state.biasCheckedItems[card.id];

  if (auditType === "bias") {
    const bIdx = parseInt(token.getAttribute("data-index"), 10);
    const biasItem = card.biasItems[bIdx];

    if (!checkedSet.has(bIdx)) {
      // Novo viés descoberto!
      checkedSet.add(bIdx);
      token.classList.add("audit-found");
      token.setAttribute("title", "Viés identificado e catalogado no dossiê!");
      playTone(600 + bIdx * 65, 'triangle', 0.12, 0.08);

      showAuditFeedback(
        "found",
        "🎯 Evidência Confirmada",
        `"${biasItem.targetPhrase}" decodificado! ${biasItem.explanation}`
      );
      showToast(`Evidência detectada: "${biasItem.targetPhrase}"`, "🎯");

      renderBiasDossier(card);
      renderTabs();
      syncCardHeight();

      // Se encontrou todos os vieses desta carta
      if (checkedSet.size === card.biasItems.length) {
        playSuccessChime();
        showToast("Excelente investigação! Todos os vieses da carta foram desmascarados no texto.", "🏆");
      }
    } else {
      // Já identificado anteriormente
      playTone(460, 'sine', 0.08, 0.04);
      showAuditFeedback(
        "found",
        "Evidência já catalogada",
        `"${biasItem.targetPhrase}": ${biasItem.explanation}`
      );
    }
  } else if (auditType === "distractor") {
    // Distrator / Termo Neutro clicado
    const feedback = token.getAttribute("data-feedback") || "Este trecho descreve um elemento neutro ou conceito universal sem viés cultural.";
    const phrase = token.textContent.trim();

    token.classList.add("audit-distractor-pulse");
    setTimeout(() => token.classList.remove("audit-distractor-pulse"), 550);

    playTone(320, 'sine', 0.14, 0.05);
    showAuditFeedback(
      "neutral",
      "🔍 Termo Neutro",
      `"${phrase}" — ${feedback}`
    );
    showToast("Termo neutro. Continue investigando termos importados ou caricaturas!", "🔍");
  }
}

function setupInteractiveAuditTokens(card) {
  const frontCardEl = document.getElementById("cardFaceFront");
  if (!frontCardEl) return;
  const checkedSet = state.biasCheckedItems[card.id];
  const tokens = frontCardEl.querySelectorAll(".audit-target");

  tokens.forEach(token => {
    const auditType = token.getAttribute("data-audit");
    if (auditType === "bias") {
      const bIdx = parseInt(token.getAttribute("data-index"), 10);
      if (checkedSet.has(bIdx)) {
        token.classList.add("audit-found");
        token.setAttribute("title", "Viés identificado! Clique para rever o diagnóstico.");
      } else {
        token.classList.remove("audit-found");
        token.setAttribute("title", "Clique para auditar este trecho.");
      }
    }

    token.onclick = (e) => {
      e.stopPropagation();
      handleAuditTokenClick(token, card);
    };
  });
}

function renderBiasDossier(card) {
  const container = document.getElementById("biasChecklist");
  if (!container) return;
  container.innerHTML = "";
  const checkedSet = state.biasCheckedItems[card.id];

  card.biasItems.forEach((item, bIdx) => {
    const isFound = checkedSet.has(bIdx);
    const slot = document.createElement("div");

    if (isFound) {
      slot.className = "p-3 rounded-xl border border-emerald-500/50 bg-emerald-950/30 text-slate-100 flex items-start gap-3 transition-all duration-300 shadow-sm shadow-emerald-950/50 animate-in fade-in";
      slot.innerHTML = `
        <div class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5 flex-shrink-0">
          ✓
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
            <span class="text-xs font-bold text-emerald-300 font-sans">
              Evidência 0${bIdx + 1}: "${item.targetPhrase}"
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-500/40">
              Decodificado
            </span>
          </div>
          <p class="text-[11px] text-emerald-300/90 font-mono leading-relaxed">
            ↳ Diagnóstico: ${item.explanation}
          </p>
        </div>
      `;
    } else {
      slot.className = "p-3 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/40 text-slate-400 flex items-start gap-3 transition-all duration-300";
      slot.innerHTML = `
        <div class="w-5 h-5 rounded-full border border-slate-700 text-slate-500 flex items-center justify-center text-xs font-mono mt-0.5 flex-shrink-0">
          ${bIdx + 1}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-0.5">
            <span class="text-xs font-mono font-semibold text-slate-400">
              ❓ Evidência 0${bIdx + 1} Oculta no Texto
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 border border-slate-700">
              Aguardando
            </span>
          </div>
          <p class="text-[11px] text-slate-500 font-sans leading-relaxed">
            Examine o texto da resposta da IA ao lado e clique no termo suspeito para decodificar.
          </p>
        </div>
      `;
    }

    container.appendChild(slot);
  });

  // Atualiza badge de caça ao viés
  const biasBadge = document.getElementById("biasCounterBadge");
  if (biasBadge) {
    biasBadge.textContent = `${checkedSet.size}/${card.biasItems.length} detectados`;
    biasBadge.className = checkedSet.size === card.biasItems.length
      ? "text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30"
      : "text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700";
  }
}

/**
 * CONTADOR DE CARACTERES
 */
function updateDraftCharCount() {
  const draftEl = document.getElementById("studentPromptDraft");
  const countEl = document.getElementById("draftCharCount");
  const len = draftEl.value.length;
  countEl.textContent = `${len} caracteres`;
}
