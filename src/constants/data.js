import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '#10,000',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '#15,000',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '#12,000',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '#8,000',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '#10,000',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Mojito',
    price: '#3500',
    tags: 'White rum | Sugarcane Juice | Lime juice | Mint leaves',
  },
  {
    title: 'Pine Colada',
    price: '#4000',
    tags: 'Dark rum | Coconut cream | Pineapple Juice',
  },
  {
    title: 'Daiquiri',
    price: '#3000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Sex on the beach',
    price: '#4500',
    tags: 'Vodka| Peach schnapps | Orange juice | Cranberry Juice',
  },
  {
    title: 'Negroni',
    price: '#6000',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
