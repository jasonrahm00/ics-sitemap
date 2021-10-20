import {Link} from 'react-router-dom';

const sharedLinks = {
  icsBrandLink: <Link to='/products/ics'>ICS</Link>,
  meritBrandLink: <Link to='/products/merit'>Merit</Link>,
  pentruderBrandLink: <Link to='/products/pentruder'>Pentruder</Link>,
  powerCutters: <Link to="/products/power-cutters">Power Cutters</Link>,
  flatSaws: <Link to="/products/flat-saws">Flat Saws</Link>,
  wallWireSaws: <Link to="/products/wall-wire-saws">Wall/Wire Saws</Link>,
  diamondChains: <Link to="/products/diamond-chains">Diamond Chains</Link>,
  partsAccessories: <Link to="/products/parts-accessories">Parts and Accessories</Link>,
  concreteCutting: <Link to="/products/concrete-cutting">Concrete Cutting</Link>,
  pipeCutting: <Link to="/products/pipe-cutting">Pipe Cutting</Link>,
  steelCutting: <Link to={{
                  pathname: '/products/steel-cutting',
                  state: {products: ['Steel Wire – Longer Lasting', 'Steel Wire – Fast Cutting'],pageTitle: 'Steel Cutting'}
                }}>Steel Cutting</Link>,
  powerSupply: <Link to={{
                  pathname: '/products/power-supply',
                  state: {products: ['M300-23G-HPP Power Pack', 'Powerpack'],pageTitle: 'Power Supply'},
                }}>Power Supply</Link>
};

export default sharedLinks;