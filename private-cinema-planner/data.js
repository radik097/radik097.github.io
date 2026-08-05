const venues = [
      {
        id: 'henkel',
        name: 'Henkel Street Cinema',
        room: 'Cinema 2',
        location: 'Brunswick, VIC',
        baseMin: 129,
        baseMax: 129,
        foodPerGuest: 23,
        capacity: 'до 12 мест',
        premium: 1,
        sourceConfidence: 'fixed',
        fitTitle: 'Лучшее соотношение цены и приватности',
        description: 'Небольшой зал с креслами; подходит для собственного контента, стриминга или игровой консоли.',
        tags: ['Самый доступный', 'Свой контент', 'Приватный зал'],
        source: 'https://www.henkelstreetcinema.com.au/faq',
        booking: 'https://henkelstreetcinema.as.me/schedule/2640914a/category/Private%20Cinema%20Hire'
      },
      {
        id: 'village',
        name: 'Village Cinemas Vsuite',
        room: 'Vpremium / Vsuite',
        location: 'Geelong и отдельные комплексы',
        baseMin: 350,
        baseMax: 350,
        foodPerGuest: 30,
        capacity: 'примерно 1–14 гостей',
        premium: 2,
        sourceConfidence: 'estimated',
        fitTitle: 'Для нового релиза и VIP-формата',
        description: 'Реклайнеры, индивидуальные столики и премиальная подача. Лучше подходит для актуальных кино-релизов.',
        tags: ['VIP-кресла', 'Новые релизы', 'Премиум'],
        source: 'https://villagecinemas.com.au/experiences/vsuite',
        booking: 'https://villagecinemas.com.au/experiences/vsuite'
      },
      {
        id: 'fomo',
        name: 'FOMO Cinemas',
        room: 'Boutique Screen',
        location: 'Brunswick East, VIC',
        baseMin: 500,
        baseMax: 650,
        foodPerGuest: 35,
        capacity: 'бутик-зал',
        premium: 3,
        sourceConfidence: 'estimated',
        fitTitle: 'Для ужина и атмосферного события',
        description: 'Бутик-кинотеатр с кухней и заказом еды к месту. Самый дорогой, но наиболее событийный формат.',
        tags: ['Горячая еда', 'Коктейли', 'Бутик'],
        source: 'https://www.fomocinemas.com.au/',
        booking: 'https://www.fomocinemas.com.au/'
      }
    ];

    const state = {
      guests: 5,
      foodMode: 'recommended',
      customFood: 30,
      budget: 850,
      sort: 'total'
    };

    const money = value => new Intl.NumberFormat('en-AU', {
      style: 'currency', currency: 'AUD', maximumFractionDigits: 0
    }).format(value);

    const calcVenue = venue => {
      let foodPerGuest = 0;
      if (state.foodMode === 'recommended') foodPerGuest = venue.foodPerGuest;
      if (state.foodMode === 'custom') foodPerGuest = state.customFood;
      const food = foodPerGuest * state.guests;
      const min = venue.baseMin + food;
      const max = venue.baseMax + food;
      return {
        ...venue,
        foodPerGuest,
        food,
        min,
        max,
        perPersonMin: min / state.guests,
        perPersonMax: max / state.guests,
        withinBudget: min <= state.budget
      };
    };

    const cinemaIcon = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5h16v10H4z" stroke="currentColor" stroke-width="1.7"/>
        <path d="m9.5 11 4.5 2.5-4.5 2.5v-5Z" fill="currentColor"/>
        <path d="m8 4.8 2.2 2.7M15.7 4.8l-2.2 2.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>`;
