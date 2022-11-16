import { createSlice } from "@reduxjs/toolkit";

// Начальное значение
const initialState = {
  news: [
    {
      id: 100,
      event: "Сплит акций",
      type: "split",
      url:'split-couple-actii',
      title_url: 'split-acti',
      instrumentId: 1111,
      ticker: 'btc',
      date: "12.12.2022",
      title: "Рыба конь, вперёд гармонь",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 101,
      event: "Дивиденды",
      type: "dividend",
      url:'dividend-couple',
      title_url: 'dividends',
      instrumentId: 1111,
      ticker: 'btc',
      date: "12.12.2022",
      title: " Cредний курс покупки/продажи",
      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 102,
      event: "Новости",
      type: "news",
      ticker: 'btc',
      url:'full-down-ruble',
      title_url: 'full-ruble',
      instrumentId: 1111,
      date: "12.12.2022",
      title: "Обвал рубля",
      text: "Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",
      link: "https://www.binance.com/ru/trade/DOGE_USDT?theme=dark&type=spot",
    },
    {
      id: 103,
      event: "Новости",
      type: "news",
      url:'kurs-ruble-to-12-12-2022',
      ticker: 'btc',
      title_url: 'kurs-ruble',
      instrumentId: 1111,
      date: "12.12.2022",
      title: "Новый курс рубля",
      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
  ],
  newsItem:{}
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    case 'incrementByAmount':
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
}

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {  getEvent } = newsSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default newsSlice.reducer;
