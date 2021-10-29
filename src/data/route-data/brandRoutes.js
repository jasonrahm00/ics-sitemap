import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import PLP from "../../components/pages/plp/plp";
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import PentruderProducts from "../products/pentruderProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";

const ProductsPentruderParts = PentruderProducts.filter(product => product.primaryCat === Categories.parts);

const BrandRoutes = [
  new RouteObject('/products/ics', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'ICS Brand'} />,
      ReusableTileCollections.icsSawCollection,
      ReusableTileCollections.icsChainsCollection,
      ReusableTileCollections.icsPartsCollection,
    ]} />
  ),
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay header={'Merit Brand'} />,
    ReusableTileCollections.flatSawsCollection,
    ReusableTileCollections.meritPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay header={'Pentruder Brand'} />,
    ReusableTileCollections.pentruderSawsCollection,
    ReusableTileCollections.wallSawsCollection,
    ReusableTileCollections.wireSawsCollection,
    ReusableTileCollections.pentruderPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder/parts', () => <PLP title={'Pentruder Parts'} products={ProductsPentruderParts} />)
]

export default BrandRoutes;