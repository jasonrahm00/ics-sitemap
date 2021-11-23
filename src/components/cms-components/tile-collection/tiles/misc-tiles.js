import { Tile } from '../../../../utility/constructors';

const HeadquartersAddress = () => {
  return (
    <p>
      USA headquarters<br></br>
      Oregon Tool<br></br>
      4909 SE International Way<br></br>
      Portland, OR 97222<br></br>
      Phone: 800.321.1240<br></br>
      Customer Service/Sales Email: <a href="mailto:ics.orders@oregontool.com">ics.orders@oregontool.com</a><br></br>
      Marketing Email: <a href="mailto:ics.marketing@oregontool.com">ics.marketing@oregontool.com</a>
    </p>
  )
};

const EuropeAddress = () => {
  return (
    <p>
      Phone +32 10 301 251<br></br>
      Fax +32 10 301 259<br></br>
      Customer Service/Sales Email:  <a href="mailto:ics.europe.orders@oregontool.com">ics.europe.orders@oregontool.com</a><br></br>
      Marketing Email: <a href="mailto:ics.europe.marketing@oregontool.com">ics.europe.marketing@oregontool.com</a>
    </p>
  )
};

const GermanyAddress = () => {
  return (
    <p>
      Phone: {'+49 ()7071 970450'}<br></br>
      Customer Service/Sales Email:  <a href="mailto:ics.europe.orders@oregontool.com">ics.europe.orders@oregontool.com</a><br></br>
      Marketing Email: <a href="mailto:ics.europe.marketing@oregontool.com">ics.europe.marketing@oregontool.com</a>
    </p>
    

  )
}

export const usHeadquarters = new Tile(
  'US Headquarters',
  'Oregon Tool',
  null,
  <HeadquartersAddress />,
);

export const europeHeadquarters = new Tile (
  'Europe',
  'ICS, Oregon Tool Europe SA',
  null,
  <EuropeAddress />
);

export const germanyHeadquarters = new Tile (
  'Germany',
  'ICS, Oregon Tool Germany',
  null,
  <GermanyAddress />
);

export const findDealerTile = new Tile (
  'Find a Dealer',
  null,
  null,
  null,
  '/find-dealer',
  'Find a Dealer'
);

export const registerProductTile = new Tile (
  'Register a Product',
  null,
  null,
  null,
  '/product-registration',
  'Register a Product'
)

export const downloadWhitepaperTile = new Tile (
  'Kickback Study Whitepaper',
  null,
  null,
  null,
  '#',
  'Download Whitepaper'
);

export const AddressTiles = [
  usHeadquarters,
  europeHeadquarters,
  germanyHeadquarters,
];

export const TopActionsTiles = [
  findDealerTile,
  registerProductTile,
  downloadWhitepaperTile
];