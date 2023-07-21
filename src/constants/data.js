import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Excellence in Seafood Selection',
    subtitle: 'Our commitment to sourcing the finest catch has been recognized with the prestigious "Excellence in Seafood Selection" laurel award. We take great pride in offering you the freshest and most exquisite flavors from the Mediterranean shores, ensuring an unparalleled dining experience.',
  },
  {
    imgUrl: images.award01,
    title: 'Innovative Culinary Creations',
    subtitle: 'The "Innovative Culinary Creations" laurel award celebrates our dedication to infusing modern creativity into traditional recipes. Our talented chefs are passionate about crafting unique dishes that harmonize the essence of our heritage with exciting new flavors.',
  },
  {
    imgUrl: images.award05,
    title: 'Authentic Coastal Flavors',
    subtitle: "With the 'Authentic Coastal Flavors' laurel award, we take you on a captivating journey along Egypt's culinary coastline. Each dish tells a story of the rich coastal legacy, captivating your taste buds with the true essence of our Mediterranean heritage.",
  },
  {
    imgUrl: images.award03,
    title: 'Unforgettable Dining Experience',
    subtitle: 'The "Unforgettable Dining Experience" laurel award acknowledges our mission to create cherished memories for our valued guests. We strive to offer an extraordinary seafood sojourn, where every moment at our restaurant is infused with warmth, sophistication, and impeccable service.',
  },
];

export default { wines, cocktails, awards };
