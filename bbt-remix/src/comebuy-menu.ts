import { getRandomEntry } from "./utils";

export const menu = {
  menu: {
    milkTea: [
      {
        name: "Ceylon Milch-Tee",
      },
      {
        name: "Jasmin Milch-Tee",
      },
      {
        name: "Grüner Honig Milch-Tee",
      },
      {
        name: "Grüner Osmanthus Milch-Tee",
      },
      {
        name: "Neptun Sencha Milch-Tee",
      },
      {
        name: "Gerösteter Oolong Milch-Tee",
      },
      {
        name: "Erdbeer Milch-Tee",
        onlyCold: true,
      },
      {
        name: "Matcha Milch-Tee",
      },
      {
        name: "Schwarzer Reis Milch-Tee",
      },
      {
        name: "Perlen Milch-Tee",
      },
      {
        name: "Taro Milch-Tee",
      },
      {
        name: "Ultimate QQ Milch-Tee",
      },
      {
        name: "Brauner Zucker Jasmin (Ceylon Milch-Tee)",
      },
      {
        name: "Brauner Zucker Tapioka Milch",
      },
    ],
    toppings: [
      {
        name: "Pudding",
      },
      {
        name: "Tapiokaperlen",
      },
      {
        name: "Basilikumsamen",
      },
      {
        name: "Aiyu Gelee",
      },
      {
        name: "Ananas-kokos Gelee",
      },
      {
        name: "Litschi Gelee",
      },
      {
        name: "Schwarzer Reis",
      },
      {
        name: "Adzukibohnen",
      },
      {
        name: "Aloe Vera",
      },
      {
        name: "Hantian Perlen",
      },
      {
        name: "Popping Boba",
      },
      {
        name: "Tripple Q",
      },
      {
        name: "Ultimate QQ",
      },
      {
        name: "Cream Cheese Teeccino",
      },
      {
        name: "Taro & Yams Perlen",
      },
    ],
    sugarLevel: [
      {
        name: "Normal Zucker",
        percentage: 1,
      },
      {
        name: "Wenig Zucker",
        percentage: 0.7,
      },
      {
        name: "Halb Zucker",
        percentage: 0.5,
      },
      {
        name: "Minimum Zucker",
        percentage: 0.3,
      },
      {
        name: "Ohne Zucker",
        percentage: 0,
      },
    ],
    temperature: [
      {
        name: "Normal Eis",
      },
      {
        name: "Wenig Eis",
      },
      {
        name: "Ohne Eis",
      },
      {
        name: "Warm (50°C)",
      },
      {
        name: "Heiß (75°C)",
      },
    ],
  },
};

export function giveMeMyBbt() {
  return {
    milkTea: getRandomEntry(menu.menu.milkTea),
    toppings: getRandomEntry(menu.menu.toppings),
    sugarLevel: getRandomEntry(menu.menu.sugarLevel),
    temperature: getRandomEntry(menu.menu.temperature),
  };
}
