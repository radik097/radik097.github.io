function sortResults(items) {
      return [...items].sort((a, b) => {
        if (state.sort === 'person') return a.perPersonMin - b.perPersonMin;
        if (state.sort === 'premium') return b.premium - a.premium;
        return a.min - b.min;
      });
    }

    function formatRange(min, max) {
      return min === max ? money(min) : `${money(min)}–${money(max)}`;
    }

    function renderVenues(results) {
      const list = document.getElementById('venueList');
      list.innerHTML = sortResults(results).map(v => {
        const foodText = state.foodMode === 'none'
          ? 'без еды'
          : `${money(v.food)} на еду (${money(v.foodPerGuest)}/гость)`;
        const confidence = v.sourceConfidence === 'fixed' ? 'предоставленная фиксированная ставка' : 'оценка / диапазон';
        return `
          <article class="venue ${v.withinBudget ? '' : 'filtered'}" data-id="${v.id}">
            <div>
              <div class="venue-top">
                <div class="venue-icon">${cinemaIcon}</div>
                <div>
                  <h3>${v.name}</h3>
                  <div class="location">${v.room} · ${v.location}</div>
                  <div class="tags">${v.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                </div>
              </div>
            </div>
            <div class="price-block">
              <small>Полный чек для ${state.guests} гостей</small>
              <div class="total">${formatRange(v.min, v.max)}</div>
              <div class="per-person">${formatRange(v.perPersonMin, v.perPersonMax)} на человека</div>
              <div class="breakdown">Аренда ${formatRange(v.baseMin, v.baseMax)} + ${foodText}<br>${confidence}</div>
            </div>
            <div class="fit-col">
              <div class="fit"><strong>${v.fitTitle}</strong>${v.description}<br><span style="color:var(--muted)">${v.capacity}</span></div>
              <div class="venue-actions">
                <a class="mini-btn" href="${v.source}" target="_blank" rel="noreferrer">О площадке</a>
                <a class="mini-btn" href="${v.booking}" target="_blank" rel="noreferrer">Проверить бронирование</a>
              </div>
            </div>
          </article>`;
      }).join('');

      const visible = results.filter(v => v.withinBudget).length;
      document.getElementById('emptyState').classList.toggle('visible', visible === 0);
    }

    function renderChart(results) {
      const maxPrice = Math.max(...results.map(v => v.max), state.budget, 1);
      const chart = document.getElementById('chart');
      chart.innerHTML = sortResults(results).map(v => {
        const width = Math.max(2, (v.max / maxPrice) * 100);
        return `
          <div class="chart-row" style="opacity:${v.withinBudget ? 1 : .34}">
            <div class="chart-label">${v.name}</div>
            <div class="bar-track" aria-label="${v.name}: ${formatRange(v.min, v.max)}">
              <div class="bar ${v.min !== v.max ? 'range' : ''}" style="width:${width}%"></div>
            </div>
            <div class="chart-price">${formatRange(v.min, v.max)}</div>
          </div>`;
      }).join('');
    }

    function renderMetrics(results) {
      const affordable = results.filter(v => v.withinBudget);
      const cheapest = [...results].sort((a,b) => a.min - b.min)[0];
      const premium = [...results].sort((a,b) => b.max - a.max)[0];
      document.getElementById('cheapestMetric').textContent = `${cheapest.name} · ${formatRange(cheapest.min, cheapest.max)}`;
      document.getElementById('budgetMetric').textContent = `${affordable.length} из ${results.length}`;
      document.getElementById('savingMetric').textContent = money(Math.max(0, premium.max - cheapest.min));
    }

    function renderRecommendation(results) {
      const affordable = results.filter(v => v.withinBudget).sort((a,b) => a.min - b.min);
      const best = affordable[0] || [...results].sort((a,b) => a.min - b.min)[0];
      const overBudget = best.min > state.budget;
      document.getElementById('recommendationTitle').textContent = overBudget
        ? `Ближайший к бюджету: ${best.name}`
        : `Рекомендация: ${best.name}`;
      document.getElementById('recommendationText').textContent = overBudget
        ? `Минимальная стоимость превышает ваш лимит на ${money(best.min - state.budget)}. Уберите еду или увеличьте бюджет.`
        : best.id === 'henkel'
          ? 'Для маленькой компании это наиболее рациональный выбор: полноценная приватность без переплаты за большой коммерческий зал.'
          : best.description;
      document.getElementById('recommendationPrice').textContent = `${formatRange(best.min, best.max)} всего · ${formatRange(best.perPersonMin, best.perPersonMax)} на гостя`;
    }

    function render() {
      const results = venues.map(calcVenue);
      document.getElementById('guestCount').textContent = state.guests;
      document.getElementById('foodBudgetValue').textContent = `${money(state.customFood)}/чел.`;
      document.getElementById('totalBudgetValue').textContent = money(state.budget);
      document.getElementById('customFood').classList.toggle('visible', state.foodMode === 'custom');
      renderMetrics(results);
      renderVenues(results);
      renderChart(results);
      renderRecommendation(results);
    }

    document.getElementById('minusGuest').addEventListener('click', () => { state.guests = Math.max(3, state.guests - 1); render(); });
    document.getElementById('plusGuest').addEventListener('click', () => { state.guests = Math.min(5, state.guests + 1); render(); });
    document.getElementById('foodMode').addEventListener('change', e => { state.foodMode = e.target.value; render(); });
    document.getElementById('foodBudget').addEventListener('input', e => { state.customFood = Number(e.target.value); render(); });
    document.getElementById('totalBudget').addEventListener('input', e => { state.budget = Number(e.target.value); render(); });
    document.getElementById('sortBy').addEventListener('change', e => { state.sort = e.target.value; render(); });

    document.getElementById('copyButton').addEventListener('click', async () => {
      const results = sortResults(venues.map(calcVenue));
      const lines = [
        `Частный кинотеатр для ${state.guests} гостей`,
        `Бюджет: ${money(state.budget)}`,
        ...results.map(v => `${v.name}: ${formatRange(v.min, v.max)} всего (${formatRange(v.perPersonMin, v.perPersonMax)} на человека)`)
      ];
      try {
        await navigator.clipboard.writeText(lines.join('\n'));
        showToast('Результат скопирован');
      } catch {
        showToast('Не удалось скопировать автоматически');
      }
    });

    function showToast(text) {
      const toast = document.getElementById('toast');
      toast.textContent = text;
      toast.classList.add('visible');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
    }

    render();
