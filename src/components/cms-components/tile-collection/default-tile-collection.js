import { Tile, TileGroup } from "../../../utility/constructors";
import ProductImage from './ics-product.jpeg'

const DefaultTiles = [
  new Tile('Header 1', 'Subheader 1', ProductImage, '', '/', 'CTA Text'),
  new Tile('Header 2', 'Subheader 2', ProductImage, '', '/', 'CTA Text'),
  new Tile('Header 3', 'Subheader 3', ProductImage, '', '/', 'CTA Text'),
];

const DefaulTileCollection = new TileGroup('Tile Collection Header', 'Tile Collection Subheader', DefaultTiles)

export default DefaulTileCollection;