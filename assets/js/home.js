(() => {
  const container = document.getElementById('pub-cards');
  const cards = Array.from(container.querySelectorAll('.pub-card'));
  const allButton = document.getElementById('btn-all');
  const yearButton = document.getElementById('btn-year');

  function setView(groupByYear) {
    allButton.classList.toggle('active', !groupByYear);
    yearButton.classList.toggle('active', groupByYear);
    allButton.setAttribute('aria-pressed', String(!groupByYear));
    yearButton.setAttribute('aria-pressed', String(groupByYear));

    if (!groupByYear) {
      container.replaceChildren(...cards);
      return;
    }

    const sorted = [...cards].sort((a, b) =>
      Number(b.dataset.year) - Number(a.dataset.year) ||
      Number(a.dataset.priority || 999) - Number(b.dataset.priority || 999) ||
      b.dataset.date.localeCompare(a.dataset.date)
    );
    const fragment = document.createDocumentFragment();
    let currentYear;
    for (const card of sorted) {
      if (card.dataset.year !== currentYear) {
        currentYear = card.dataset.year;
        const heading = document.createElement('h3');
        heading.className = 'pub-year-heading';
        heading.textContent = currentYear;
        fragment.appendChild(heading);
      }
      fragment.appendChild(card);
    }
    container.replaceChildren(fragment);
  }

  allButton.addEventListener('click', () => setView(false));
  yearButton.addEventListener('click', () => setView(true));
})();
