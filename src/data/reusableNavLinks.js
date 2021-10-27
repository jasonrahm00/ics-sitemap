import {Link} from 'react-router-dom';
import { MeritFlatSawList } from './variables';

const sharedLinks = {
  icsBrandLink: <Link to='/products/ics'>ICS</Link>,
  meritBrandLink: <Link to='/products/merit'>Merit</Link>,
  pentruderBrandLink: <Link to='/products/pentruder'>Pentruder</Link>,
  powerCutters: <Link to="/products/power-cutters">Power Cutters</Link>,
  flatSaws: <Link to={{
              pathname: '/plp',
              state: {
                products: MeritFlatSawList,
                pageTitle: 'Flat Saws',
                customCrumbs: '/products/flat-saws'
              }
            }}>Flat Saws</Link>,
  wallWireSaws: <Link to="/products/wall-wire-saws">Wall/Wire Saws</Link>,
  diamondChains: <Link to="/products/diamond-chains">Diamond Chains</Link>,
  partsAccessories: <Link to="/products/parts-accessories">Parts and Accessories</Link>,
  concreteCutting: <Link to="/products/concrete-cutting">Concrete Cutting</Link>,
  pipeCutting: <Link to="/products/pipe-cutting">Pipe Cutting</Link>,
  steelCutting: <Link to={{
                  pathname: '/plp',
                  state: {
                    products: ['Steel Wire – Longer Lasting', 'Steel Wire – Fast Cutting'],
                    pageTitle: 'Steel Cutting', 
                    customCrumbs: '/products/steel-cutting'
                  }
                }}>Steel Cutting</Link>,
  powerSupply: <Link to={{
                  pathname: '/plp',
                  state: {
                    products: ['M300-23G-HPP Power Pack', 'Powerpack'],
                    pageTitle: 'Power Supply',
                    customCrumbs: '/products/power-supply'
                  },
                }}>Power Supply</Link>,
  contactUs: <Link to="/contact-us">Contact Us</Link>,
  findDealer: <Link to="/find-dealer">Find a Dealer</Link>,
  productRegistration: <Link to="/product-registration">Product Registration</Link>,
  docLibrary: <Link to="/document-library">Document Library</Link>,
  proCorner: <Link to="/pro-corner">Pro Corner</Link>,
  demoRequest: <Link to="/demo-request">Request a Demo</Link>,
  successStories: <Link to="/news-features">News and Features</Link>,
  aboutICS: <Link to="/about-ics">About ICS</Link>,
  allProducts: <Link to="/products">All Products</Link>,
  styleGuide: <Link to="/style-guide">Style Guide</Link>,
};

export default sharedLinks;