//import { observable,autorun, makeObservable, computed, action }  from "mobx"
// https://www.tradingview.com/symbols/BTCUSD/history-timeline/#the-british-are-coming-2022-09-30

import { makeAutoObservable } from "mobx";
//import _ from "lodash";

class storeInstrument {
  constructor() {
    makeAutoObservable(this);
  }

  instruments = [
    {
      id: 1,
      name: "Биткоин",
      type: "crypto",
      ticker: "btc",
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      price: 130,
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      change: "-10",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://logodix.com/logo/2103877.png",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "-20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://logodix.com/logo/2103877.png",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "-20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "-20",
      currency: "$",
    },
    {
      id: 2,
      name: "Газпром",
      type: "crypto",
      images: {
        logo: "https://img.freepik.com/premium-vector/vector-illustration-large-bitcoin-coin_541404-125.jpg?w=360",
      },
      description:
        "«Газпром» — крупнейший в России производитель и экспортёр сжиженного природного газа (СПГ). ",
      ticker: "gazp",
      price: 160,
      change: "-20",
      currency: "$",
    },
  ];

  getAll() {
    return this.instruments;
  }

  getNew(ticker, url) {
    const event = this.instruments.filter((item) => {
      return item.url === url && item.ticker === ticker;
    });
    return event[0];
  }

  getChart(ticker) {
    return {
      fill: true,
      labels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
      ],
      datasets: [
        {
          fill: true,
          label: [
            "asd",
            "asd",
            "",
            "asd",
            "asd",
            "asd",
            "",
            "asd",
            "asd",
            "asd",
          ],
          data: [
            12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3,
          ],

          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: [4, 4, 25, 4, 4, 4],
          //  borderWidth: 1,
          tension: 0.5,
        },
      ],
    };
  }
}

export { storeInstrument };

export const instrument = new storeInstrument();
