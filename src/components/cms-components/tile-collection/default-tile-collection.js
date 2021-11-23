import { Tile, TileGroup } from "../../../utility/constructors";
import ProductImage from './ics-product.jpeg'
import { PlaceholderText } from "../../../utility/variables";

const DefaultTiles = [
  new Tile('Header 1', 'Subheader 1', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 2', 'Subheader 2', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 3', 'Subheader 3', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 4', 'Subheader 4', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 5', 'Subheader 5', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 6', 'Subheader 6', ProductImage, PlaceholderText, '/', 'CTA Text'),
  new Tile('Header 7', 'Subheader 7', ProductImage, PlaceholderText, '/', 'CTA Text'),
];

export const DefaulTileCollectionFew = new TileGroup('Three or Fewer Tiles', 'Tile Width ~ 33%', DefaultTiles.slice(0,3));

export const DefaulTileCollectionSeveral = new TileGroup('Four or More Tiles', 'Tile Width ~ 25%', DefaultTiles);
