import {Link} from 'react-router-dom';

const sharedLinks = {
  icsBrandLink: <Link to='/products/ics'>ICS</Link>,
  meritBrandLink: <Link to='/products/merit'>Merit</Link>,
  pentruderBrandLink: <Link to='/products/pentruder'>Pentruder</Link>,
  powerCutters: <Link to="/products/power-cutters">Power Cutters</Link>,
  flatSaws: <Link to="/products/flat-saws">Flat Saws</Link>,
  wallWireSaws: <Link to="/products/wall-wire-saws">Wall/Wire Saws</Link>,
  diamondChains: <Link to="/products/diamond-chains">Diamond Chains</Link>,
  partsAccessories: <Link to="/products/parts-accessories">Parts and Accessories</Link>
};

export default sharedLinks;