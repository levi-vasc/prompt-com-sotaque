/**
 * ESTADO DA APLICAÇÃO
 */
const state = {
  activeCardIndex: 0,
  auditedCards: new Set(),
  biasCheckedItems: {}, // { cardId: Set(indices) }
  studentDrafts: {},    // { cardId: string }
  audioEnabled: true
};

// Inicializa marcações
cardsData.forEach(card => {
  state.biasCheckedItems[card.id] = new Set();
  state.studentDrafts[card.id] = "";
});
