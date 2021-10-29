import { Tile, TileGroup } from "../../../utility/constructors";
import ProductImage from './ics-product.jpeg'
import { PlaceholderText } from "../../../utility/variables";

const DefaultTiles = [
  new Tile('Header 1', 'Subheader 1', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 2', 'Subheader 2', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 3', 'Subheader 3', ProductImage, PlaceholderText, '/', 'CTA Text'),
];

const DefaulTileCollection = new TileGroup('Tile Collection Header', 'Tile Collection Subheader', DefaultTiles)

export default DefaulTileCollection;