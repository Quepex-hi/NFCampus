const audio = document.getElementById('audio');
const button = document.getElementById('btn');
const statusText = document.getElementById('texto');

async function startAudio() {
  if (!audio.paused) return;

  try {
    await audio.play();
    statusText.textContent = 'Reproduciendo...';
    button.hidden = true;
  } catch {
    statusText.textContent = 'Toca para reproducir el audio';
  }
}

button.addEventListener('click', startAudio);
document.addEventListener('pointerdown', startAudio);

startAudio();