import {Product} from "./types";

export default {
  list: (): Promise<Product[]> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png",
              },
              _id: "5a0b35df734d1d08bf7084cb",
              name: "Macbook Pro",
              cost: 1300,
              category: "Laptops",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png",
              },
              _id: "5a0b3600734d1d08bf7084e5",
              name: "Canon EOS 5D",
              cost: 2200,
              category: "Cameras",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png",
              },
              _id: "5a0b3658734d1d08bf70850f",
              name: "Amazon Echo",
              cost: 150,
              category: "Smart Home",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x2.png",
              },
              _id: "5a0b35f0734d1d08bf7084df",
              name: "Marshall Major ll",
              cost: 300,
              category: "Audio",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/RazerBladePro-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/RazerBladePro-x2.png",
              },
              _id: "5a0b35f8734d1d08bf7084e3",
              name: "Razer Blade Pro",
              cost: 2500,
              category: "Laptops",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Chromecast-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Chromecast-x2.png",
              },
              _id: "5a0b3640734d1d08bf708500",
              name: "Google Chromecast",
              cost: 100,
              category: "Monitors & TV",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/RazerNaga-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/RazerNaga-x2.png",
              },
              _id: "5a0b364f734d1d08bf708506",
              name: "Razer Naga Chroma",
              cost: 50,
              category: "PC Accessories",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/BeatsPro-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/BeatsPro-x2.png",
              },
              _id: "5a0b3660734d1d08bf708511",
              name: "Beats Pro",
              cost: 220,
              category: "Audio",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/LenovoYogaBook-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/LenovoYogaBook-x1.png",
              },
              _id: "5a0b3668734d1d08bf708516",
              name: "Lenovo Yoga Book 10”",
              cost: 250,
              category: "Laptops",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
              },
              _id: "5a0b36b3734d1d08bf70856f",
              name: "Alienware 13",
              cost: 1500,
              category: "Laptops",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Switch-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Switch-x2.png",
              },
              _id: "5a0b35d7734d1d08bf7084c9",
              name: "Nintendo Switch 32GB",
              cost: 300,
              category: "Gaming",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Dell-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Dell-x2.png",
              },
              _id: "5a0b3609734d1d08bf7084e6",
              name: "Dell UP3218k",
              cost: 900,
              category: "Monitors & TV",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/SonySRSX11-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/SonySRSX11-x2.png",
              },
              _id: "5a0b362f734d1d08bf7084fa",
              name: "Sony SRS-X11",
              cost: 330,
              category: "Audio",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/SonyPS4-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/SonyPS4-x2.png",
              },
              _id: "5a0b3628734d1d08bf7084f3",
              name: "Sony PS4",
              cost: 200,
              category: "Gaming",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/AmazonEchoDot-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/AmazonEchoDot-x2.png",
              },
              _id: "5a0b3620734d1d08bf7084f0",
              name: "Amazon Echo Dot",
              cost: 50,
              category: "Smart Home",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/GoPro-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/GoPro-x2.png",
              },
              _id: "5a0b3678734d1d08bf708537",
              name: "Go Pro Hero4",
              cost: 330,
              category: "Cameras",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/AcerAspire-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/AcerAspire-x2.png",
              },
              _id: "5a0b36ac734d1d08bf70856c",
              name: "Acer Aspire E1-522",
              cost: 600,
              category: "Laptops",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/iPadMini-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/iPadMini-x2.png",
              },
              _id: "5a0b3680734d1d08bf70853b",
              name: "iPad Mini",
              cost: 280,
              category: "Tablets & E-readers",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/InstaxMini-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/InstaxMini-x2.png",
              },
              _id: "5a0b35e8734d1d08bf7084cf",
              name: "Instax Mini 8",
              cost: 80,
              category: "Cameras",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/KoboAura-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/KoboAura-x2.png",
              },
              _id: "5a0b36c3734d1d08bf70857f",
              name: "Kobo Aura",
              cost: 150,
              category: "Tablets & E-readers",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/SamsungS8-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungS8-x2.png",
              },
              _id: "5a0b3637734d1d08bf7084fb",
              name: "Samsung S8",
              cost: 510,
              category: "Phones",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/ParrotAR-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/ParrotAR-x2.png",
              },
              _id: "5a0b368e734d1d08bf708558",
              name: "Parrot AR",
              cost: 200,
              category: "Drones",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/AndroidWear-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/AndroidWear-x2.png",
              },
              _id: "5a0b3618734d1d08bf7084ec",
              name: "Android Wear",
              cost: 210,
              category: "Phone Accessories",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png",
              },
              _id: "5a0b35c1734d1d08bf7084c3",
              name: "iPhone 8",
              cost: 800,
              category: "Phones",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Nintendo3DS-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Nintendo3DS-x2.png",
              },
              _id: "5a0b3648734d1d08bf708502",
              name: "Nintendo 3DS",
              cost: 200,
              category: "Gaming",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/RazerBlackwidow-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/RazerBlackwidow-x2.png",
              },
              _id: "5a0b36a5734d1d08bf70856b",
              name: "Razer Blackwidow Chroma",
              cost: 100,
              category: "PC Accesories",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x2.png",
              },
              _id: "5a0b36bb734d1d08bf70857e",
              name: "Samsung Tab S2",
              cost: 230,
              category: "Tablets & E-readers",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/LenovoYogaTab-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/LenovoYogaTab-x2.png",
              },
              _id: "5a0b3695734d1d08bf70855d",
              name: "Lenovo Yoga Tab 3",
              cost: 200,
              category: "Tablets & E-readers",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/Phantom2-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/Phantom2-x2.png",
              },
              _id: "5a0b3611734d1d08bf7084eb",
              name: "Phantom 2",
              cost: 500,
              category: "Drones",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/SonyDSCRX10-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/SonyDSCRX10-x1.png",
              },
              _id: "5a0b3670734d1d08bf70851f",
              name: "Sony DSC-RX10",
              cost: 1200,
              category: "Cameras",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/NikonD300-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/NikonD300-x2.png",
              },
              _id: "5a0b3687734d1d08bf70854d",
              name: "Nikon D300",
              cost: 220,
              category: "Cameras",
            },
            {
              img: {
                url: "https://coding-challenge-api.aerolab.co/images/MotoG5-x1.png",
                hdUrl: "https://coding-challenge-api.aerolab.co/images/MotoG5-x2.png",
              },
              _id: "5a0b369e734d1d08bf708567",
              name: "Moto G5",
              cost: 230,
              category: "Phones",
            },
          ]),
        500,
      ),
    ),
  redeem: (product: Product): Promise<string> =>
    Promise.resolve(`You have redeem the product successfully (${product.name})`),
};
