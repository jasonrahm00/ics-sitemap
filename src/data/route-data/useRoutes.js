import PLP from "../../components/pages/plp/plp";
import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import AllProducts from "../products/allProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";

const ProductsSteelCutting = AllProducts.filter(product => product.useCat === Categories.steelCutting);
const ProductsPowerSupply = AllProducts.filter(product => product.primaryCat === Categories.powerSupply);

const UseRoutes = [
  new RouteObject('/products/concrete-cutting', () => <CategoryContent components={[
    <ImgTextOverlay 
      header={'Concrete Cutting'} 
      headerTag='h1'
      text={<p>It’s ok to take the occasional gamble, as long as it’s something like switching from regular to decaf coffee.  But if you cut concrete for a living, you know rolling the dice on your equipment is not a trade-off you should make.  You’re working for every dollar and so should your tools. At ICS, we design and manufacture all our concrete cutting equipment with high-quality, top-of-the-line materials.  Because we know, our tools shouldn’t stop working until you do.</p>} />,
    ReusableTileCollections.concreteCuttingSaws,
    ReusableTileCollections.concreteCuttingChainsCollection,
    ReusableTileCollections.concreteCuttingPartsCollection,
  ]} />),
  new RouteObject('/products/pipe-cutting', 
    () => <CategoryContent components={[
      <ImgTextOverlay 
        header={'Pipe Cutting'} 
        headerTag='h1'
        text={<p>If you’re in the water and wastewater industry or road and bridge maintenance,  ICS technology is literally changing the way you work. With products that virtually eliminate rotational kickback, designs that give you more control and tools that create practically no debris or dust, we have a range of solutions that make your job safer, faster, and easier.</p>} />,
      ReusableTileCollections.allChainSawsCollection,
      ReusableTileCollections.pipeCuttingChainsCollection,
      ReusableTileCollections.pipeCuttingAccessoriesCollection,
    ]} />
  ),
  new RouteObject('/products/steel-cutting', () => <PLP title={'Steel Cutting'} products={ProductsSteelCutting} />),
  new RouteObject('/products/power-supply', () => <PLP title={'Power Supply'} products={ProductsPowerSupply} />),
];

export default UseRoutes;
