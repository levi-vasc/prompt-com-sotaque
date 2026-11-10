/**
 * SÍNTESE DE ÁUDIO SINTÉTICO (Web Audio API)
 */
let audioCtx = null;
function playTone(freq, type = 'sine', duration = 0.15, vol = 0.08) {
  if (!state.audioEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) { }
}

function playSuccessChime() {
  if (!state.audioEnabled) return;
  playTone(523.25, 'triangle', 0.12, 0.08); // C5
  setTimeout(() => playTone(659.25, 'triangle', 0.12, 0.08), 80); // E5
  setTimeout(() => playTone(783.99, 'triangle', 0.22, 0.08), 160); // G5
}

function playFlipWhoosh() {
  if (!state.audioEnabled) return;
  playTone(280, 'sine', 0.18, 0.05);
  setTimeout(() => playTone(420, 'sine', 0.18, 0.05), 80);
}

/**
 * NOTIFICAÇÃO TOAST
 */
let toastTimeout;
function showToast(message, icon = "✨") {
  const toast = document.getElementById("toastNotification");
  const msgSpan = document.getElementById("toastMessage");
  const iconSpan = document.getElementById("toastIcon");

  msgSpan.textContent = message;
  iconSpan.textContent = icon;

  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

/**
 * SINCRONIZAÇÃO DA ALTURA DA CARTA 3D
 */
function syncCardHeight() {
  const front = document.getElementById("cardFaceFront");
  const back = document.getElementById("cardFaceBack");
  const inner = document.getElementById("cardFlipper");
  if (!front || !back || !inner) return;

  requestAnimationFrame(() => {
    const frontH = front.scrollHeight || front.offsetHeight;
    const backH = back.scrollHeight || back.offsetHeight;
    const maxH = Math.max(frontH, backH, 680);
    inner.style.minHeight = `${maxH}px`;
  });
}

/**
 * COPIAR TEXTO
 */
async function copyToClipboard(text, successMessage = "Copiado para a área de transferência!") {
  try {
    await navigator.clipboard.writeText(text);
    playTone(700, 'sine', 0.1, 0.05);
    showToast(successMessage, "📋");
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(successMessage, "📋");
  }
}
