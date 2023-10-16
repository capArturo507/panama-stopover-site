import banner from "./../../assets/img/car-rentals/banner-page.png";

// import card1Banner from "./../../assets/img/car-rentals/cpa_autos_avis.jpg";
// import card1PromoImg from "./../../assets/img/car-rentals/cpa_autos_avis_mob.jpg";

// import card2Banner from "./../../assets/img/car-rentals/cpa_autos_budget.jpg";
// import card2PromoImg from "./../../assets/img/car-rentals/cpa_autos_budget_mob.jpg";

// import card3Banner from "./../../assets/img/car-rentals/cpa_autos_dollar.jpg";
// import card3PromoImg from "./../../assets/img/car-rentals/cpa_autos_dollar_mob.jpg";

import card4Banner from "./../../assets/img/car-rentals/cpa_autos_ace.jpg";
import card4PromoImg from "./../../assets/img/car-rentals/cpa_autos_ace_mob.jpg";

import card5Banner from "./../../assets/img/car-rentals/cpa_autos_alamo.jpg";
import card5PromoImg from "./../../assets/img/car-rentals/cpa_autos_alamo_mob.jpg";

import card6Banner from "./../../assets/img/car-rentals/cpa_autos_dollar.jpg";
import card6PromoImg from "./../../assets/img/car-rentals/cpa_autos_dollar_mob.jpg";

import card7Banner from "./../../assets/img/car-rentals/cpa_autos_hertz.jpg";
import card7PromoImg from "./../../assets/img/car-rentals/cpa_autos_hertz_mob.jpg";

import card8Banner from "./../../assets/img/car-rentals/cpa_autos_national.jpg";
import card8PromoImg from "./../../assets/img/car-rentals/cpa_autos_national_mob.jpg";

import card9Banner from "./../../assets/img/car-rentals/cpa_autos_thrifty.jpg";
import card9PromoImg from "./../../assets/img/car-rentals/cpa_autos_thrifty_mob.jpg";

import cardEconomyBanner from "./../../assets/img/car-rentals/cpa_autos_economycarrental.png";
import cardEconomyPromoImg from "./../../assets/img/car-rentals/cpa_autos_economycarrental_mob.png";

export default {
  es: {
    name: "Alquiler de Autos",
    bannerImg: banner,
    breadcrumb: ["Alquiler de Autos", ""],
    mainText: [
      {
        title: "Alquiler de autos",
        subTitle: "Encuentra el auto perfecto para tu recorrido por Panamá.",
        thirdTitle:
          "Aprovecha estas promociones y elige el vehículo que más te guste.",
        infoUrl: "",
        disclaimer:
          "<p>En Panamá, se han implementado los protocolos de bioseguridad necesarios para que disfrutes con tranquilidad. <a href='https://www.visitpanama.com/es/informacion/protocolos-de-viaje/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama' target='_blank'><strong>Conoce más aquí</strong></a>.</p>",
      },
    ],
    cars: [
      // {
      //   id: 1,
      //   bannerImg: card1Banner,
      //   promotionImg: card1PromoImg,
      //   theName: "Avis",
      //   promotionText:
      //     "descuento del 50 % sobre el tiempo y kilometraje de la tarifa de alquiler.",
      //   code: "AWD O870700",
      //   considerations: [
      //     "Aplica para todos los autos de la flota.",
      //     "Aplica en tarifa de tiempo y kilometraje.",
      //     "El cliente debe complementar el alquiler con las protecciones LDW y WTC.",
      //     "El cliente debe cumplir con todos los requisitos de alquiler de AVIS.",
      //   ],
      //   url: "https://avis.com.pa/stopover/",
      // },
      // {
      //   id: 2,
      //   bannerImg: card2Banner,
      //   promotionImg: card2PromoImg,
      //   theName: "Budget",
      //   promotionText: "descuento del 50 % sobre todas las tarifas vigentes.",
      //   code: "C2H",
      //   considerations: [
      //     "No incluye coberturas ni impuestos.",
      //     "No es válido con otras promociones o descuentos.",
      //     "El cliente debe presentar el boarding pass al momento de retirar el auto.",
      //     "Aplican condiciones regular de alquiler.",
      //   ],
      //   url: "https://www.budgetpanama.com/en/deals/",
      // },
      // {
      //   id: 3,
      //   bannerImg: card3Banner,
      //   promotionImg: card3PromoImg,
      //   theName: "Dollar",
      //   promotionText:
      //     "descuento del 50 % sobre todas las tarifas en la página web.",
      //   code: null,
      //   considerations: [
      //     "No aplica para SUV, 7Packs, ni categoría comercial.",
      //     "No aplica con otras promociones ni descuentos.",
      //   ],
      //   url: "http://stopover.dollarpanama.com/",
      // },
        /*
      {
        id: 4,
        bannerImg: card4Banner,
        promotionImg: card4PromoImg,
        theName: "Ace Rent a Car",
        promotionText: "ACE Regalara 1 día de tarifa para todos los clientes que renten auto por 2 días o mas con promo STOPOVER. Los clientes tendrán 1 conductor adicional de cortesía y servicio de drop-off en cualquier sucursal totalmente gratis. Ofreceremos 50% de descuento en accesorios como: WIFI Portátil, silla de bebe y GPS. Adicionalmente, ofreceremos mejoras o upgrades en categorías de auto sin costo adicional en tarifa (sujeto a disponibilidad). Los clientes tendrán kilometraje ilimitado en sus alquileres de auto. Estos beneficios aplican para cualquier categoría de auto.",
        promotionBody: "Todas las categorías de alquiler disponibles en el link promocional, ya cuentan con el descuento Stopover aplicado.",
        code: "",
        considerations: [
          "Aplican requisitos regulares de alquiler.",
          "No aplica con otras promociones y descuentos.",
          "Aplica solo para pagos con tarjeta de crédito."
        ],
        url: "https://www.acerentacar.com/Landing/Panama/Tocumen/Tocumen-Intl-Airport/Panama_Stopover_Tocumen_Intl_Airport.aspx?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
        /*
       {
         id: 5,
         bannerImg: card5Banner,
         promotionImg: card5PromoImg,
         theName: "Alamo Rent a Car",
         promotionText: "50% de descuento en tarifa.",
         promotionBody: "50% de descuento en tarifa.",
         code: "",
         considerations: [
           "Descuento aplica sobre tarifa regular, descuento no aplica en coberturas, accesorios ni servicios adicionales.",
           "No aplica con otros descuentos ni promociones.",
           "Válido del 1 de junio de 2021 al 31 de diciembre de 2022."
         ],
         url: "https://www.alamopanama.com/es/stop-over-promo/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
       },
         */
      {
        id: 5,
        bannerImg: cardEconomyBanner,
        promotionImg: cardEconomyPromoImg,
        theName: "Economy Car Rental",
        promotionText: "1 día de tarifa gratis para todos los clientes que renten un auto por 2 días o más con promo STOPOVER. 1 conductor adicional de cortesía. Kilometraje ilimitado en sus alquileres de auto. Estos beneficios aplican para cualquier categoria de auto.",
        promotionBody: "1 día de tarifa gratis para todos los clientes que renten un auto por 2 días o más con promo STOPOVER. 1 conductor adicional de cortesía. Kilometraje ilimitado en sus alquileres de auto. Estos beneficios aplican para cualquier categoria de auto.",
        code: "ECOPTY",
        considerations: [
          "No aplica con otras promociones.",
          "Cliente debe cumplir con requisitos de alquiler de auto.",
          "Válido solamente mientras la campaña STOPOVER esté vigente.",
          "Cliente debe ser mayor de 21 años para rentar autos pequeños, compactos y medianos y mayor de 25 años para alquilar autos grandes y SUV.",
          "Previa reserva requerida.",
          "Depósito de garantía en tarjeta de crédito requerido."
        ],
        url: "https://www.economyrentacar.com/es/pamana/alquiler-de-autos-en-panama?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
        id: 6,
        bannerImg: card6Banner,
        promotionImg: card6PromoImg,
        theName: "Dollar Car Rental",
        promotionText: "30% DE DESCUENTO SOBRE LA TARIFA DE ALQUILER.",
        promotionBody: "Todas las categorías de alquiler disponibles en el link promocional, ya cuentan con el descuento Stopover aplicado.",
        code: "",
        considerations: [
          "Aplican requisitos regulares de alquiler.",
          "No aplica con otras promociones y descuentos.",
          "Aplica solo para pagos con tarjeta de crédito."
        ],
        url: "https://stopover.dollarpanama.com/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
        id: 7,
        bannerImg: card7Banner,
        promotionImg: card7PromoImg,
        theName: "Hertz Rent a Car",
        promotionText: "50% de descuento en todos nuestros autos.",
        promotionBody: null,
        code: "stopoverhz",
        considerations: [
          "El descuento aplica para todos los autos de nuestra flota",
          "El descuento aplica solo en tarifa de tiempo de kilometraje",
          "El descuento no se incluye en coberturas e impuestos",
          "El cliente debe cumplir con todos los requisitos de Hertz Rent a Car ",
        ],
        url: "https://hertzpanama.com.pa/stopover/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
         id: 8,
         bannerImg: card8Banner,
         promotionImg: card8PromoImg,
         theName: "National Car Rental",
         promotionText: "50% de descuento en tarifa ",
         promotionBody: "50% de descuento en tarifa ",
         code: "",
         considerations: [
           "Descuento aplica sobre tarifa regular, descuento no aplica en coberturas, accesorios ni servicios adicionales.",
           "No aplica con otros descuentos ni promociones.",
           "Válido del 1 de junio de 2021 al 31 de diciembre de 2022. ",
         ],
         url: "https://www.nationalpanama.com/es/stop-over-promo/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
        id: 9,
        bannerImg: card9Banner,
        promotionImg: card9PromoImg,
        theName: "Thrifty Car Rental",
        promotionText: "50% de descuento en todos nuestros autos",
        promotionBody: null,
        code: "stopoverth",
        considerations: [
          "El descuento aplica para todos los autos de nuestra flota",
          "El descuento aplica solo en tarifa de tiempo de kilometraje",
          "El descuento no se incluye en coberturas e impuestos",
          "El cliente debe cumplir con todos los requisitos de Thrifty Car Rental",
          "Este cupón no aplica del 23 de diciembre 2021 al 2 de enero 2022.",
        ],
        url: "https://es.panamathrifty.com/stopover/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
    ],
    infoUrl: "https://www.acerentacar.com/Landing/Panama/Tocumen/Tocumen-Intl-Airport/Panama_Stopover_Tocumen_Intl_Airport.aspx?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
  },
  en: {
    name: "Alquiler de Autos",
    bannerImg: banner,
    breadcrumb: ["Alquiler de Autos", ""],
    mainText: [
      {
        title: "Car Rentals",
        subTitle: "Find the perfect car for your visit to Panama.",
        thirdTitle:
          "Take advantage of these special offers and choose the one that fits your needs the most.",
        infoUrl: "",
        disclaimer:
          "<p>Panama biosafety protocols have been implemented so that you can enjoy with peace of mind. <a href='https://www.visitpanama.com/information/travel-guidelines/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama' target='_blank'><strong>Learn more here</strong></a>.</p>",
      },
    ],
    cars: [
      // {
      //   id: 1,
      //   bannerImg: card1Banner,
      //   promotionImg: card1PromoImg,
      //   promotionText:
      //     "Special offer: 50% discount on the time and mileage of the rental rate.",
      //   code: "AWD O870700",
      //   considerations: [
      //     "This applies to all the cars of the fleet.",
      //     "This applies to the time and mileage rate.",
      //     "The customer must complement the rental with LDW and WTC coverage.",
      //     "The customer must meet all AVIS rental requirements.",
      //   ],
      //   url: "https://avis.com.pa/stopover/",
      // },
      // {
      //   id: 2,
      //   bannerImg: card2Banner,
      //   promotionImg: card2PromoImg,
      //   promotionText: "50 % discount on all current rates.",
      //   code: "C2H",
      //   considerations: [
      //     "This does not include coverages or taxes.",
      //     "This is not applicable to other special offers or discounts.",
      //     "The customer must present their boarding pass when picking up the car.",
      //     "Regular rental conditions apply.",
      //   ],
      //   url: "https://www.budgetpanama.com/en/deals/",
      // },
      // {
      //   id: 3,
      //   bannerImg: card3Banner,
      //   promotionImg: card3PromoImg,
      //   promotionText: "50 % discount on all current rates.",
      //   code: null,
      //   considerations: [
      //     "This does not include SUVs, 7Packs, or the commercial category.",
      //     "This cannot be combined with other special offers or discounts.",
      //   ],
      //   url: "http://stopover.dollarpanama.com/",
      // },
        /*
      {
        id: 4,
        bannerImg: card4Banner,
        promotionImg: card4PromoImg,
        theName: "Ace Rent a Car",
        promotionText: "ACE will offer a one day rental with no cost for all customers who rent a car for 2 days or more with STOPOVER promo. Customers will have 1 additional driver and drop-off service at any location totally free. We will offer 50% discount on accessories such as: Portable WIFI, baby chair and GPS. Additionally, we will offer upgrades in car categories at no additional cost (subject to availability). Customers will have unlimited mileage on their car rentals. These benefits apply to any car category.",
        promotionBody: "All rental categories available in the promotional link already have the Stopover discount applied.",
        code: null,
        considerations: [
          "Regular rental requirements apply.",
          "Does not apply with other promotions and discounts.",
          "Applies only for credit card payments."
        ],
        url: "https://www.acerentacar.com/Landing/Panama/Tocumen/Tocumen-Intl-Airport/Panama_Stopover_Tocumen_Intl_Airport.aspx?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
        /*
       {
         id: 5,
         bannerImg: card5Banner,
         promotionImg: card5PromoImg,
         theName: "Alamo Rent a Car",
         promotionText: "50% discount on rate.",
         promotionBody: "50% discount on rate.",
         code: null,
         considerations: [
           "Discount applies on regular rate, discount does not apply to additional coverages, accessories or services.",
           "Does not apply with other discounts or promotions.",
           "Valid from June 1, 2021 to December 31, 2022.",
         ],
         url: "https://www.alamopanama.com/en/stop-over-promo/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
         */
      {
        id: 5,
        bannerImg: cardEconomyBanner,
        promotionImg: cardEconomyPromoImg,
        theName: "Economy Car Rental",
        promotionText: "1 day free for all customers who rent a car for 2 days or more with STOPOVER promo. 1 additional driver for free. Unlimited mileage on their car rentals. These benefits apply to any car category.",
        promotionBody: "1 day free for all customers who rent a car for 2 days or more with STOPOVER promo. 1 additional driver for free. Unlimited mileage on their car rentals. These benefits apply to any car category.",
        code: "ECOPTY",
        considerations: [
          "Cannot be combined with another promotion or discount.",
          "Client must meet all car rental requirements.",
          "Valid only while the STOPOVER campaign is in effect.",
          "Customer must be over 21 years old to rent small, compact and medium-sized cars and over 25 years old to rent large cars and SUVs.",
          "Previous reservation is required.",
          "Security Deposit in credit card required."
        ],
        url: "https://www.economyrentacar.com/es/pamana/alquiler-de-autos-en-panama?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
        id: 6,
        bannerImg: card6Banner,
        promotionImg: card6PromoImg,
        theName: "Dollar Car Rental",
        promotionText: "30% OFF OVER THE RENTAL RATE.",
        promotionBody: "All rental categories available in the promotional link already have the Stopover discount applied.",
        code: null,
        considerations: [
          "Regular rental requirements apply.",
          "Does not apply with other promotions and discounts.",
          "Applies only for credit card payments."
        ],
        url: "https://stopover.dollarpanama.com/en/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
      {
        id: 7,
        bannerImg: card7Banner,
        promotionImg: card7PromoImg,
        theName: "Hertz Rent a Car",
        promotionText: "50% OFF in all of our fleet.",
        promotionBody: null,
        code: "stopoverhz",
        considerations: [
          "This discount applies for all of our fleet",
          "This applies only to the time and milleage rate",
          "This does not include discount on coverages or taxes",
          "The customer most meet all Hertz Rent A Car rental requirements",
        ],
        url: "https://hertzpanama.com.pa/stopover/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
       {
         id: 8,
         bannerImg: card8Banner,
         promotionImg: card8PromoImg,
         theName: "National Car Rental",
         promotionText: "50% discount on rate ",
         promotionBody: "50% discount on rate ",
         code: null,
         considerations: [
           "Discount applies on regular rate, discount does not apply to additional coverages, accessories or services.",
           "Does not apply with other discounts or promotions.",
           "Valid from June 1, 2021 to December 31, 2022.",
         ],
         url: "https://www.nationalpanama.com/en/stop-over-promo/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
       },
      {
        id: 9,
        bannerImg: card9Banner,
        promotionImg: card9PromoImg,
        theName: "Thrifty Car Rental",
        promotionText: "50% OFF in all of our fleet.",
        promotionBody: null,
        code: "stopoverth",
        considerations: [
          "This discount applies for all of our fleet",
          "This applies only to the time and milleage rate",
          "This does not include discount on coverages or taxes",
          "The customer most meet all Thrifty Car Rental rental requirements",
          "Not valid from December 23rd 2021 to January 2nd 2022",
        ],
        url: "https://es.panamathrifty.com/en/stopover/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
      },
    ],
    infoUrl: "https://es.panamathrifty.com/en/stopover/?utm_source=stopoverinpanama&utm_medium=referral&utm_campaign=stopoverinpanama",
  },
};
