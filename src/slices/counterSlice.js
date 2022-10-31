import { createSlice } from "@reduxjs/toolkit";

// Начальное значение
const initialState = {
  value: 0,
  news: [
    {
      id: 100,
      event: "Сплит акций",
      type: "split",
      instrumentId: 1111,
      date: "12.12.2022",
      title: "Рыба конь, вперёд гармонь",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 101,
      event: "Дивиденты",
      type: "dividend",
      instrumentId: 1111,
      date: "12.12.2022",
      title: " Cредний курс покупки/продажи",
      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 102,
      event: "Новости",
      type: "news",
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
      instrumentId: 1111,
      date: "12.12.2022",
      title: "Новый курс рубля",
      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
  ],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // пример с данными
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment } = counterSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default counterSlice.reducer;
