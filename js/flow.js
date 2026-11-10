/**
 * MUDANÇA DE CARTA
 */
function switchCard(index) {
  // Salva rascunho anterior
  const currentCard = cardsData[state.activeCardIndex];
  const draftEl = document.getElementById("studentPromptDraft");
  if (draftEl) {
    state.studentDrafts[currentCard.id] = draftEl.value;
  }

  state.activeCardIndex = index;

  // Retorna para a frente ao trocar de carta
  const flipper = document.getElementById("cardFlipper");
  flipper.classList.remove("is-flipped");

  // Limpa barra de feedback forense ao mudar de carta
  const feedbackBar = document.getElementById("auditFeedbackBar");
  if (feedbackBar) feedbackBar.classList.add("hidden");

  playTone(400, 'sine', 0.1, 0.05);
  renderTabs();
  renderActiveCard();
  setTimeout(syncCardHeight, 50);
}

/**
 * VIRA A CARTA (FLIP 3D)
 */
function flipCard() {
  const flipper = document.getElementById("cardFlipper");
  const isFlipped = flipper.classList.toggle("is-flipped");

  // Salva rascunho digitado
  const card = cardsData[state.activeCardIndex];
  const draftEl = document.getElementById("studentPromptDraft");
  if (draftEl) {
    state.studentDrafts[card.id] = draftEl.value;
  }

  playFlipWhoosh();

  if (isFlipped) {
    state.auditedCards.add(card.id);
    renderTabs();

    // Atualiza a visualização do rascunho no verso
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

    // Se auditou todas as 4 cartas, dispara confete comemorativo!
    if (state.auditedCards.size === cardsData.length) {
      triggerCelebration();
    } else if (state.biasCheckedItems[card.id].size < card.biasItems.length) {
      showToast(`Você virou com ${state.biasCheckedItems[card.id].size}/${card.biasItems.length} evidências decodificadas no texto. Compare com o gabarito!`, "💡");
    }
  }

  // Sincroniza altura da face ativa
  setTimeout(syncCardHeight, 200);
}

/**
 * CELEBRAÇÃO / CONFETTI
 */
function triggerCelebration() {
  try {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  } catch (e) { }
  showToast("Parabéns! Todas as 4 cartas temáticas foram concluídas com sucesso!", "🏆");
}
