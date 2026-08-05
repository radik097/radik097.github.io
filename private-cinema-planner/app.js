const translations = {
  en: {
    documentTitle: 'Private Cinema Planner — venue comparison',
    metaDescription: 'Interactive comparison of private micro-cinemas for groups of 3–5 people in Melbourne and Victoria.',
    navAria: 'Primary navigation',
    languageAria: 'Language',
    navPlanner: 'Planner',
    navComparison: 'Comparison',
    navSources: 'Sources',
    heroTitle: 'Your cinema. Your group only.',
    heroText: 'Compare private screens for 3–5 people, adjust the food budget, and instantly see the full bill and cost per guest.',
    calculateButton: 'Calculate cost',
    copyButton: 'Copy result',
    projectorAria: 'Stylised private cinema with five seats',
    audNote: 'Prices in AUD',
    plannerTitle: 'Plan your screening',
    plannerText: 'Base hire rates cover 2 hours. Food is estimated per person from the supplied pricing table.',
    guestLabel: 'Number of guests',
    minusGuestAria: 'Decrease number of guests',
    plusGuestAria: 'Increase number of guests',
    foodLabel: 'Food and drinks',
    foodRecommended: 'Recommended package',
    foodNone: 'No food',
    foodCustom: 'Custom budget',
    foodBudgetAria: 'Food budget per guest',
    totalBudgetLabel: 'Maximum budget',
    sortLabel: 'Sort by',
    sortTotal: 'Total cost',
    sortPerson: 'Cost per person',
    sortPremium: 'Premium first',
    cheapestLabel: 'Most affordable option',
    budgetFitLabel: 'Within budget',
    savingLabel: 'Saving versus premium option',
    comparisonTitle: 'Venue comparison',
    comparisonText: 'Pricing updates automatically when you change the number of guests or food settings.',
    legendAria: 'Price confidence legend',
    legendFixed: 'supplied fixed price',
    legendEstimated: 'estimate or range',
    emptyState: 'No venue fits the selected budget. Increase the limit or remove the food package.',
    chartTitle: 'Visual comparison of the full bill',
    sourcesTitle: 'Calculation method, limitations and sources',
    methodIntro: "This page uses the figures from the user's original table. For groups smaller than five, the recommended food budget is recalculated proportionally per guest:",
    methodHenkel: 'Henkel Street Cinema: $129 hire + approximately $23 of food per guest.',
    methodVillage: 'Village Cinemas Vsuite: $350 hire + approximately $30 of food per guest.',
    methodFomo: 'FOMO Cinemas: $500–$650 hire + approximately $35 of food per guest.',
    methodRange: 'The FOMO range is shown as a minimum and maximum total. All amounts are in Australian dollars.',
    sourceHenkelFaq: 'Henkel Street Cinema — FAQ',
    sourceHenkelBooking: 'Henkel Street Cinema — booking form',
    sourceVillage: 'Village Cinemas — Vsuite',
    sourceFomo: 'FOMO Cinemas — official website',
    disclaimer: 'Prices, availability, minimum orders, outside-food rules and screening duration may change. Before paying, verify the final amount in the booking form or directly with the venue. Automated verification of the official websites was unavailable when this page was built, so these figures are not presented as confirmed for August 2026.',
    footer: 'Private Cinema Planner · A local interactive page with no external libraries or trackers.',
    toastCopied: 'Result copied',
    toastFailed: 'Could not copy automatically',
    bestMatch: 'BEST MATCH',
    perPersonShort: '{amount}/person',
    noFoodDynamic: 'no food',
    foodDynamic: '{total} for food ({perGuest}/guest)',
    fixedConfidence: 'supplied fixed rate',
    estimatedConfidence: 'estimate / range',
    fullBill: 'Full bill for {guests} guests',
    perPerson: '{amount} per person',
    breakdown: 'Hire {hire} + {food}',
    aboutVenue: 'About venue',
    checkBooking: 'Check booking',
    budgetCount: '{count} of {total}',
    closestBudget: 'Closest to budget: {name}',
    recommendation: 'Recommendation: {name}',
    overBudget: 'The minimum price is {amount} above your limit. Remove food or increase the budget.',
    henkelRecommendation: 'For a small group, this is the most rational choice: full privacy without paying for a large commercial auditorium.',
    recommendationPrice: '{total} total · {perGuest} per guest',
    copyHeading: 'Private cinema for {guests} guests',
    copyBudget: 'Budget: {budget}',
    copyVenue: '{name}: {total} total ({perGuest} per person)'
  },
  ru: {
    documentTitle: 'Private Cinema Planner — сравнение кинотеатров',
    metaDescription: 'Интерактивное сравнение частных микро-кинотеатров для компании из 3–5 человек в Мельбурне и Виктории.',
    navAria: 'Основная навигация',
    languageAria: 'Язык',
    navPlanner: 'Калькулятор',
    navComparison: 'Сравнение',
    navSources: 'Источники',
    heroTitle: 'Ваш кинотеатр. Только ваша компания.',
    heroText: 'Сравните частные экраны для 3–5 человек, настройте бюджет на еду и сразу увидите полный чек и стоимость на гостя.',
    calculateButton: 'Рассчитать стоимость',
    copyButton: 'Скопировать результат',
    projectorAria: 'Стилизованный частный кинозал с пятью креслами',
    audNote: 'Расчёты в AUD',
    plannerTitle: 'Настройте просмотр',
    plannerText: 'Базовые тарифы рассчитаны на 2 часа. Еда — оценка на человека из предоставленной таблицы.',
    guestLabel: 'Количество гостей',
    minusGuestAria: 'Уменьшить количество гостей',
    plusGuestAria: 'Увеличить количество гостей',
    foodLabel: 'Еда и напитки',
    foodRecommended: 'Рекомендуемый пакет',
    foodNone: 'Без еды',
    foodCustom: 'Свой бюджет',
    foodBudgetAria: 'Бюджет на еду на одного гостя',
    totalBudgetLabel: 'Максимальный бюджет',
    sortLabel: 'Сортировать',
    sortTotal: 'По общему итогу',
    sortPerson: 'По цене на человека',
    sortPremium: 'Сначала премиум',
    cheapestLabel: 'Самый доступный вариант',
    budgetFitLabel: 'Помещаются в бюджет',
    savingLabel: 'Экономия против премиум-варианта',
    comparisonTitle: 'Сравнение площадок',
    comparisonText: 'Стоимость обновляется автоматически при изменении числа гостей и настроек еды.',
    legendAria: 'Легенда достоверности цен',
    legendFixed: 'предоставленная фиксированная цена',
    legendEstimated: 'оценка или диапазон',
    emptyState: 'Ни одна площадка не укладывается в выбранный бюджет. Увеличьте лимит или отключите пакет еды.',
    chartTitle: 'Визуальное сравнение полного чека',
    sourcesTitle: 'Методика расчёта, ограничения и источники',
    methodIntro: 'Страница использует данные из исходной таблицы пользователя. Для группы меньше пяти человек рекомендованный бюджет на еду пересчитывается пропорционально на каждого гостя:',
    methodHenkel: 'Henkel Street Cinema: $129 аренда + примерно $23 еды на гостя.',
    methodVillage: 'Village Cinemas Vsuite: $350 аренда + примерно $30 еды на гостя.',
    methodFomo: 'FOMO Cinemas: $500–$650 аренда + примерно $35 еды на гостя.',
    methodRange: 'Диапазон FOMO отображается как минимальный и максимальный итог. Все суммы — австралийские доллары.',
    sourceHenkelFaq: 'Henkel Street Cinema — FAQ',
    sourceHenkelBooking: 'Henkel Street Cinema — форма бронирования',
    sourceVillage: 'Village Cinemas — Vsuite',
    sourceFomo: 'FOMO Cinemas — официальный сайт',
    disclaimer: 'Цены, доступность, минимальный заказ, правила внешней еды и продолжительность сеанса могут измениться. Перед оплатой проверьте итоговую сумму в форме бронирования или у площадки. В момент сборки страницы автоматическая онлайн-проверка официальных сайтов была недоступна, поэтому данные не заявлены как подтверждённые на август 2026 года.',
    footer: 'Private Cinema Planner · Локальная интерактивная страница без внешних библиотек и трекеров.',
    toastCopied: 'Результат скопирован',
    toastFailed: 'Не удалось скопировать автоматически',
    bestMatch: 'ЛУЧШИЙ ВАРИАНТ',
    perPersonShort: '{amount}/чел.',
    noFoodDynamic: 'без еды',
    foodDynamic: '{total} на еду ({perGuest}/гость)',
    fixedConfidence: 'предоставленная фиксированная ставка',
    estimatedConfidence: 'оценка / диапазон',
    fullBill: 'Полный чек для {guests} гостей',
    perPerson: '{amount} на человека',
    breakdown: 'Аренда {hire} + {food}',
    aboutVenue: 'О площадке',
    checkBooking: 'Проверить бронирование',
    budgetCount: '{count} из {total}',
    closestBudget: 'Ближайший к бюджету: {name}',
    recommendation: 'Рекомендация: {name}',
    overBudget: 'Минимальная стоимость превышает ваш лимит на {amount}. Уберите еду или увеличьте бюджет.',
    henkelRecommendation: 'Для маленькой компании это наиболее рациональный выбор: полноценная приватность без переплаты за большой коммерческий зал.',
    recommendationPrice: '{total} всего · {perGuest} на гостя',
    copyHeading: 'Частный кинотеатр для {guests} гостей',
    copyBudget: 'Бюджет: {budget}',
    copyVenue: '{name}: {total} всего ({perGuest} на человека)'
  }
};

const venueTranslations = {
  en: {
    henkel: {
      location: 'Brunswick, VIC',
      capacity: 'Up to 12 seats',
      fitTitle: 'Best balance of price and privacy',
      description: 'A compact room with armchairs, suitable for your own content, streaming services or a game console.',
      tags: ['Best value', 'Your own content', 'Private room']
    },
    village: {
      location: 'Geelong and selected multiplexes',
      capacity: 'Approximately 1–14 guests',
      fitTitle: 'For new releases and a VIP experience',
      description: 'Recliners, individual tables and premium service. Better suited to current cinema releases.',
      tags: ['VIP seating', 'New releases', 'Premium']
    },
    fomo: {
      location: 'Brunswick East, VIC',
      capacity: 'Boutique auditorium',
      fitTitle: 'For dinner and an atmospheric event',
      description: 'A boutique cinema with an on-site kitchen and food ordered to your seat. The most expensive, but the most event-focused option.',
      tags: ['Hot meals', 'Cocktails', 'Boutique']
    }
  },
  ru: {
    henkel: {
      location: 'Brunswick, VIC',
      capacity: 'до 12 мест',
      fitTitle: 'Лучшее соотношение цены и приватности',
      description: 'Небольшой зал с креслами; подходит для собственного контента, стриминга или игровой консоли.',
      tags: ['Самый доступный', 'Свой контент', 'Приватный зал']
    },
    village: {
      location: 'Geelong и отдельные комплексы',
      capacity: 'примерно 1–14 гостей',
      fitTitle: 'Для нового релиза и VIP-формата',
      description: 'Реклайнеры, индивидуальные столики и премиальная подача. Лучше подходит для актуальных кино-релизов.',
      tags: ['VIP-кресла', 'Новые релизы', 'Премиум']
    },
    fomo: {
      location: 'Brunswick East, VIC',
      capacity: 'бутик-зал',
      fitTitle: 'Для ужина и атмосферного события',
      description: 'Бутик-кинотеатр с кухней и заказом еды к месту. Самый дорогой, но наиболее событийный формат.',
      tags: ['Горячая еда', 'Коктейли', 'Бутик']
    }
  }
};

const savedLanguage = localStorage.getItem('cinemaPlannerLanguage');
state.language = savedLanguage === 'ru' ? 'ru' : 'en';

function t(key, values = {}) {
  const template = translations[state.language][key] ?? translations.en[key] ?? key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function localisedVenue(venue) {
  return { ...venue, ...(venueTranslations[state.language][venue.id] || {}) };
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = t('documentTitle');
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', t('metaDescription'));

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll('.lang-button').forEach(button => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  document.querySelector('.rec-visual')?.setAttribute('data-label', t('bestMatch'));
}

function setLanguage(language) {
  state.language = language === 'ru' ? 'ru' : 'en';
  localStorage.setItem('cinemaPlannerLanguage', state.language);
  applyTranslations();
  render();
}

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
  list.innerHTML = sortResults(results).map(rawVenue => {
    const v = localisedVenue(rawVenue);
    const foodText = state.foodMode === 'none'
      ? t('noFoodDynamic')
      : t('foodDynamic', { total: money(v.food), perGuest: money(v.foodPerGuest) });
    const confidence = v.sourceConfidence === 'fixed' ? t('fixedConfidence') : t('estimatedConfidence');
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
          <small>${t('fullBill', { guests: state.guests })}</small>
          <div class="total">${formatRange(v.min, v.max)}</div>
          <div class="per-person">${t('perPerson', { amount: formatRange(v.perPersonMin, v.perPersonMax) })}</div>
          <div class="breakdown">${t('breakdown', { hire: formatRange(v.baseMin, v.baseMax), food: foodText })}<br>${confidence}</div>
        </div>
        <div class="fit-col">
          <div class="fit"><strong>${v.fitTitle}</strong>${v.description}<br><span style="color:var(--muted)">${v.capacity}</span></div>
          <div class="venue-actions">
            <a class="mini-btn" href="${v.source}" target="_blank" rel="noreferrer">${t('aboutVenue')}</a>
            <a class="mini-btn" href="${v.booking}" target="_blank" rel="noreferrer">${t('checkBooking')}</a>
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
  const cheapest = [...results].sort((a, b) => a.min - b.min)[0];
  const premium = [...results].sort((a, b) => b.max - a.max)[0];
  document.getElementById('cheapestMetric').textContent = `${cheapest.name} · ${formatRange(cheapest.min, cheapest.max)}`;
  document.getElementById('budgetMetric').textContent = t('budgetCount', { count: affordable.length, total: results.length });
  document.getElementById('savingMetric').textContent = money(Math.max(0, premium.max - cheapest.min));
}

function renderRecommendation(results) {
  const affordable = results.filter(v => v.withinBudget).sort((a, b) => a.min - b.min);
  const rawBest = affordable[0] || [...results].sort((a, b) => a.min - b.min)[0];
  const best = localisedVenue(rawBest);
  const overBudget = best.min > state.budget;
  document.getElementById('recommendationTitle').textContent = overBudget
    ? t('closestBudget', { name: best.name })
    : t('recommendation', { name: best.name });
  document.getElementById('recommendationText').textContent = overBudget
    ? t('overBudget', { amount: money(best.min - state.budget) })
    : best.id === 'henkel'
      ? t('henkelRecommendation')
      : best.description;
  document.getElementById('recommendationPrice').textContent = t('recommendationPrice', {
    total: formatRange(best.min, best.max),
    perGuest: formatRange(best.perPersonMin, best.perPersonMax)
  });
}

function render() {
  const results = venues.map(calcVenue);
  document.getElementById('guestCount').textContent = state.guests;
  document.getElementById('foodBudgetValue').textContent = t('perPersonShort', { amount: money(state.customFood) });
  document.getElementById('totalBudgetValue').textContent = money(state.budget);
  document.getElementById('customFood').classList.toggle('visible', state.foodMode === 'custom');
  renderMetrics(results);
  renderVenues(results);
  renderChart(results);
  renderRecommendation(results);
}

document.querySelectorAll('.lang-button').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
document.getElementById('minusGuest').addEventListener('click', () => { state.guests = Math.max(3, state.guests - 1); render(); });
document.getElementById('plusGuest').addEventListener('click', () => { state.guests = Math.min(5, state.guests + 1); render(); });
document.getElementById('foodMode').addEventListener('change', event => { state.foodMode = event.target.value; render(); });
document.getElementById('foodBudget').addEventListener('input', event => { state.customFood = Number(event.target.value); render(); });
document.getElementById('totalBudget').addEventListener('input', event => { state.budget = Number(event.target.value); render(); });
document.getElementById('sortBy').addEventListener('change', event => { state.sort = event.target.value; render(); });

document.getElementById('copyButton').addEventListener('click', async () => {
  const results = sortResults(venues.map(calcVenue));
  const lines = [
    t('copyHeading', { guests: state.guests }),
    t('copyBudget', { budget: money(state.budget) }),
    ...results.map(v => t('copyVenue', {
      name: v.name,
      total: formatRange(v.min, v.max),
      perGuest: formatRange(v.perPersonMin, v.perPersonMax)
    }))
  ];
  try {
    await navigator.clipboard.writeText(lines.join('\n'));
    showToast(t('toastCopied'));
  } catch {
    showToast(t('toastFailed'));
  }
});

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('visible');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

applyTranslations();
render();
