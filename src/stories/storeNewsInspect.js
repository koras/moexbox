//import { observable,autorun, makeObservable, computed, action }  from "mobx"

import { makeAutoObservable } from "mobx";
 


import moment from "moment";

//import _ from "lodash";

class storeNewsInspect {
  constructor() {
    makeAutoObservable(this);
  }
  // объект для редактирования
  eventNew = {};

  news = [
    {
      id: 100,
      event: "Сплит акций",
      type: "split",
      typeId: 8,
      hash: '78e731027d8fd50ed642340b7c9a63b3',
      source: "https://ru.investing.com/analysis/article-200298747",
      url: "split-couple-actii",
      title_url: "split-acti",
      instrument: {
        id: 1111,
        name: "Биткоин",
        price: 150,
        type: "crypto",
        change: "+10",
        ticker: "btc",
        currency: "$",
        images: {
          logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
        },
      },
      ticker: "btc",
      date: "01/03/2022",
      title: "Рыба конь, вперёд гармонь",
      text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 101,
      event: "Отчётность",
      type: "reporting",
      typeId: 3,
      url: "dividend-couple",
      hash: '78e731027d8fd50ed642340b7c91111111',
      source: "https://ru.investing.com/analysis/article-200298747",
      title_url: "dividends",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 140,
        change: "+10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      ticker: "btc",
      date: "01/03/2022",
      title: " Cредний курс покупки/продажи",
      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",
      link: "https://journal.tinkoff.ru/invest-service/",
    },
    {
      id: 102,
      event: "Новости",
      type: "news",
      typeId: 4,
      ticker: "btc",
      hash: '78e731027d8fd50ed642340b7c9444444',
      source: "https://ru.investing.com/analysis/article-200298747",
      url: "full-down-ruble",
      title_url: "full-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 130,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
        },
      },
      date: "01/03/2022",
      title: "Обвал рубля",
      text: "Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      link: "https://www.binance.com/ru/trade/DOGE_USDT?theme=dark&type=spot",
    },
    {
      id: 103,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c97777777',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 105,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c97775555',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 107,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c977755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 108,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c97775511116',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/08/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 111,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c9777225111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 110,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7111237755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 120,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed64234044447755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 123,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed642340b7c977232411',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 144,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed61220b7c977755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 155,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed61220b222377755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "01/03/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 166,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed61220b2121217755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "02/05/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 177,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed61220b2121217755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "03/06/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
    {
      id: 1177,
      event: "Новости",
      type: "news",
      typeId: 5,
      url: "kurs-ruble-to-12-12-2022",
      hash: '78e731027d8fd50ed61220b2121217755111',
      ticker: "btc",
      title_url: "kurs-ruble",
      instrument: {
        id: 1111,
        name: "Биткоин",
        type: "crypto",
        ticker: "btc",
        price: 120,
        change: "-10",
        currency: "$",
        images: {
          logo: "https://logodix.com/logo/2103877.png",
        },
      },
      date: "04/09/2022",
      title: "Новый курс рубля",
      source: "https://ru.investing.com/analysis/article-200298747",
      fulltext:
        "<p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> <p>Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением.</p> Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. <br><br>Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%Российский фондовый рынок после обвала в первой половине месяца завершает октябрь заметным повышением. Индикатор Мосбиржи подскочил почти на 11%",

      text: "По состоянию на 16:00 мск на основе информации, предоставленной банками и обменными пунктами Москвы, Cредний курс покупки/продажи наличного доллара составил 62,68/68 руб. за",
      link: "https://ru.investing.com/currencies/usd-rub",
    },
  ];

  changeTypeEvent(id, value) {
    console.log(value);
    this.news.forEach((element) => {
      if (element.id === id) {
        element.typeId = value.value; 
        element.event = value.label;
        element.type = value.type;
      }
    });
    this.eventNew.typeId = value.value;
    this.eventNew.event = value.label;
    this.eventNew.type = value.type;
  }
  // обновляем дату при редактированиие события
  setDateEvent(id, date) {
    if(date){ 
    console.log(date);
      this.news.forEach((element) => {
        if (element.id === id) {
          element.date = moment(date).format("DD/MM/YYYY");
          this.eventNew.date = moment(date).format("DD/MM/YYYY");
        }
      });
    }
  }

  changeEventName(id, text) {
    this.news.forEach((element) => {
      if (element.id === id) {
        element.title = text;
        this.eventNew.title = text;
        // element.date = moment( date).format("DD/MM/YYYY")
      }
    });
  }

  changeEventSource(id, text) {
    this.news.forEach((element) => {
      if (element.id === id) {
        element.source = text;
        this.eventNew.source = text;
        // element.date = moment( date).format("DD/MM/YYYY")
      }
    });
  }

  changeEventText(id, text) {
    this.news.forEach((element) => {
      if (element.id === id) {
        element.text = text;
        this.eventNew.text = text;
        // element.date = moment( date).format("DD/MM/YYYY")
      }
    });
  }

  changeEventFulltext(text) {
  //  console.log(text);
    this.eventNew.fulltext= text;
  }

  // сохраняем событие
  saveEvent=()=> {
    console.log( this.eventNew);
    return this.eventNew.hash;
   //return md5(this.eventNew.text +  Math.floor(Math.random()));
  }
  getInspectEvent(hash){
    // сперва пытаемся получить новость по хэшу
    const event = this.news.filter((item) => {
      return item.hash === hash ;
    });
    this.eventNew = Object.assign({}, event[0]);
    return event[0];
  }

  getEvent(hash) { 
    // сперва пытаемся получить новость по хэшу
    const event = this.news.filter((item) => {
      return  (item.hash === hash ) ;
    });
    this.eventNew = Object.assign({}, event[0]);
    return event[0];
  }

  getAll() {
    return this.news;
  }
}

export { storeNewsInspect };

export const newsInspect = new storeNewsInspect();