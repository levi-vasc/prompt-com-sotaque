/**
 * INICIALIZAÇÃO DE EVENTOS
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render inicial
  renderTabs();
  renderActiveCard();
  setTimeout(syncCardHeight, 100);
  window.addEventListener("resize", syncCardHeight);

  // 2. Ações de Flip
  document.getElementById("flipToBackBtn").addEventListener("click", flipCard);
  document.getElementById("flipBackToFrontBtn").addEventListener("click", flipCard);
  document.getElementById("editDraftReturnBtn").addEventListener("click", flipCard);

  // 3. Próxima Carta
  document.getElementById("nextCardBtn").addEventListener("click", () => {
    const nextIdx = (state.activeCardIndex + 1) % cardsData.length;
    switchCard(nextIdx);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  });

  // 4. Copiar Prompt Calibrado Completo
  document.getElementById("copyCalibratedPromptBtn").addEventListener("click", () => {
    const card = cardsData[state.activeCardIndex];
    const fullPrompt = `[Persona]: ${card.calibratedPrompt.persona}\n\n[Contexto]: ${card.calibratedPrompt.context}\n\n[Tarefa]: ${card.calibratedPrompt.task}\n\n[Restrições / Negative Prompt]: ${card.calibratedPrompt.restrictions}`;
    copyToClipboard(fullPrompt, "Prompt Calibrado Completo copiado!");
  });

  // 5. Inserção Rápida de Tags no Textarea
  document.querySelectorAll(".insert-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");
      const textarea = document.getElementById("studentPromptDraft");
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;

      textarea.value = text.substring(0, start) + tag + text.substring(end);
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + tag.length;
      updateDraftCharCount();
      updateDraftScaffolding(textarea.value);
      playTone(550, 'sine', 0.08, 0.04);
    });
  });

  // 6. Listener de Digitação no Textarea
  const draftEl = document.getElementById("studentPromptDraft");
  draftEl.addEventListener("input", () => {
    updateDraftCharCount();
    updateDraftScaffolding(draftEl.value);
    const card = cardsData[state.activeCardIndex];
    state.studentDrafts[card.id] = draftEl.value;
  });

  // 7. Copiar Prompt Ingênuo
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy-target");
      const text = document.getElementById(targetId)?.textContent || "";
      copyToClipboard(text, "Prompt copiado!");
    });
  });

  // 9. Colapso da Bússola Intercultural
  const toggleCompassBtn = document.getElementById("toggleCompassBtn");
  const compassContent = document.getElementById("compassContent");
  const compassChevron = document.getElementById("compassChevron");
  toggleCompassBtn.addEventListener("click", () => {
    compassContent.classList.toggle("hidden");
    compassChevron.querySelector("svg").classList.toggle("rotate-180");
    playTone(450, 'sine', 0.08, 0.04);
    setTimeout(syncCardHeight, 200);
  });

  // 10. Modal Ficha Crítica & Ética
  const ethicsModal = document.getElementById("ethicsModal");
  const openEthicsBtn = document.getElementById("openEthicsModalBtn");
  const closeEthicsBtn1 = document.getElementById("closeEthicsModalBtn");
  const closeEthicsBtn2 = document.getElementById("closeEthicsModalBtn2");

  function openModal() {
    ethicsModal.classList.remove("hidden");
    playTone(480, 'sine', 0.1, 0.05);
  }
  function closeModal() {
    ethicsModal.classList.add("hidden");
    playTone(380, 'sine', 0.08, 0.05);
  }

  openEthicsBtn.addEventListener("click", openModal);
  closeEthicsBtn1.addEventListener("click", closeModal);
  closeEthicsBtn2.addEventListener("click", closeModal);
  ethicsModal.addEventListener("click", (e) => {
    if (e.target === ethicsModal) closeModal();
  });

  // 11. Toggle de Áudio
  const toggleAudioBtn = document.getElementById("toggleAudioBtn");
  const iconOn = document.getElementById("audioIconOn");
  const iconOff = document.getElementById("audioIconOff");
  toggleAudioBtn.addEventListener("click", () => {
    state.audioEnabled = !state.audioEnabled;
    if (state.audioEnabled) {
      iconOn.classList.remove("hidden");
      iconOff.classList.add("hidden");
      showToast("Efeitos sonoros ativados", "🔊");
      playTone(600, 'sine', 0.1, 0.1);
    } else {
      iconOn.classList.add("hidden");
      iconOff.classList.remove("hidden");
      showToast("Efeitos sonoros desativados", "🔇");
    }
  });

  // 12. Botão Resetar Partida
  document.getElementById("resetAppBtn").addEventListener("click", () => {
    if (confirm("Deseja resetar toda a partida? Suas anotações e status serão reiniciados para uma nova demonstração ao vivo.")) {
      state.auditedCards.clear();
      cardsData.forEach(c => {
        state.biasCheckedItems[c.id].clear();
        state.studentDrafts[c.id] = "";
      });
      state.activeCardIndex = 0;
      document.getElementById("cardFlipper").classList.remove("is-flipped");
      const feedbackBar = document.getElementById("auditFeedbackBar");
      if (feedbackBar) feedbackBar.classList.add("hidden");
      renderTabs();
      renderActiveCard();
      syncCardHeight();
      playTone(300, 'sine', 0.15, 0.08);
      showToast("Partida resetada para demonstração!", "🔄");
    }
  });

  // 13. Atalhos de Teclado para Apresentação
  window.addEventListener("keydown", (e) => {
    if (document.activeElement === document.getElementById("studentPromptDraft")) {
      return;
    }

    if (e.key === "1") switchCard(0);
    if (e.key === "2") switchCard(1);
    if (e.key === "3") switchCard(2);
    if (e.key === "4") switchCard(3);

    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      flipCard();
    }

    if (e.key === "Escape") {
      if (!ethicsModal.classList.contains("hidden")) {
        closeModal();
      }
    }
  });
});
