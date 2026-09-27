const fins = document.getElementById('fins');
const guides = document.getElementById('guides');
const toggleFins = document.getElementById('toggle-fins');
const lineStatus = document.getElementById('line-status');
let finsHidden = false;

function showLines(hidden) {
  finsHidden = hidden;
  fins.setAttribute('visibility', hidden ? 'hidden' : 'visible');
  guides.setAttribute('visibility', hidden ? 'visible' : 'hidden');
  toggleFins.textContent = hidden ? 'Show fins' : 'Hide fins';
  toggleFins.setAttribute('aria-pressed', String(hidden));
  lineStatus.textContent = hidden
    ? 'The lines are equal. The dashed guides mark their matching endpoints.'
    : 'Fins are visible. Do the lines look equal?';
}

toggleFins.addEventListener('click', () => showLines(!finsHidden));

const contrast = document.getElementById('contrast');
function updateContrast() {
  const difference = Number(contrast.value) * 0.95;
  const left = Math.round(130 - difference);
  const right = Math.round(130 + difference);
  document.getElementById('left-background').setAttribute('fill', `rgb(${left},${left},${left})`);
  document.getElementById('right-background').setAttribute('fill', `rgb(${right},${right},${right})`);
  document.getElementById('contrast-value').textContent = `${contrast.value}%`;
  contrast.setAttribute('aria-valuetext', `${contrast.value} percent background difference`);
}
contrast.addEventListener('input', updateContrast);
updateContrast();
