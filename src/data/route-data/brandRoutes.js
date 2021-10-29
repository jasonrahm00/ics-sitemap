import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import PLP from "../../components/pages/plp/plp";
import ImgTextOverlay from '../../components/cms-components/image-text-overlay/imgTextOverlay';
import PentruderProducts from "../products/pentruderProducts";
import { Categories } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";
import { PlaceholderText } from "../../utility/variables";

const ProductsPentruderParts = PentruderProducts.filter(product => product.primaryCat === Categories.parts);

const BrandRoutes = [
  new RouteObject('/products/ics', 
    () => <CategoryContent components={[
      <ImgTextOverlay header={'ICS Brand'} text={PlaceholderText} />,
      ReusableTileCollections.icsSawCollection,
      ReusableTileCollections.icsChainsCollection,
      ReusableTileCollections.icsPartsCollection,
    ]} />
  ),
  new RouteObject('/products/merit', () => <CategoryContent components={[
    <ImgTextOverlay header={'Merit Brand'} text={PlaceholderText} />,
    ReusableTileCollections.flatSawsCollection,
    ReusableTileCollections.meritPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder', () => <CategoryContent components={[
    <ImgTextOverlay header={'Pentruder Brand'} text={PlaceholderText} />,
    ReusableTileCollections.pentruderSawsCollection,
    ReusableTileCollections.wallSawsCollection,
    ReusableTileCollections.wireSawsCollection,
    ReusableTileCollections.pentruderPartsCollection,
  ]} />),
  new RouteObject('/products/pentruder/parts', () => <PLP title={'Pentruder Parts'} products={ProductsPentruderParts} />)
]

export default BrandRoutes;