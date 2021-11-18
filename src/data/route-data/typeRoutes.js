import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";

const ProductsFlatSaws = AllProducts.filter(product => product.primaryCat === Categories.flatSaws);
const ProductsWallWireSaws = AllProducts.filter(
  product => product.primaryCat === Categories.wallSaws || product.primaryCat === Categories.wireSaws
);

const TypeRoutes = [
  new RouteObject('/products', () => <PLP title={'All Products'} products={AllProducts} />),
  new RouteObject('/products/power-cutters', 
    () => <CategoryContent components={[
      <ImgTextOverlay 
        header={'Power Cutters'} 
        headerTag='h1'
        text={<p>As the world leader and pioneering force in Diamond Chain Technology, ICS concrete power cutters and diamond chain technology deliver the perfect blend of power, precision, efficiency, and safety. Whether you’re a contractor, concrete professional, industrial artist, or homeowner, we help you get the job done faster and easier—so you can move on to the next one.</p>} />,
      ReusableTileCollections.allChainSawsCollection,
    ]} />
  ),
  new RouteObject('/products/flat-saws', () => <PLP title={'Flat Saws'} products={ProductsFlatSaws}/>),
  new RouteObject('/products/wall-wire-saws', () => <PLP title={'Wall/Wire Saws'} products={ProductsWallWireSaws} />),
  new RouteObject('/products/diamond-chains', 
    () => <CategoryContent components={[
      <ImgTextOverlay 
        header={'Diamond Chains'}
        headerTag='h1' 
        text={<p>Diamond chains are not all created equal. Sure, there are less expensive options out there, but the old adage of "you get what you pay for" isn't just a cliché. Insist on genuine diamond chains from ICS, the people who invented the technology. Our engineers show up, every day, committed to continuously improve quality, durability and versatility.  Our chains are built to outwork our competition.</p>} />,
      ReusableTileCollections.icsChainsCollection,
    ]} />
  ),
  new RouteObject('/products/parts-accessories', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'Parts & Accessories'} text={<p>From power packs that run your hydraulic tools, pipe clamps to reduce fatigue on your team and heavy duty carrying bags to keep your equipment organized. These work-proven products are indispensable complements to your ICS, Merit & Pentruder Tools.</p>} />,
      ReusableTileCollections.icsPartsCollection,
      ReusableTileCollections.meritPartsCollection,
      ReusableTileCollections.pentruderPartsCollection,
    ]} />
  ),
]

export default TypeRoutes;