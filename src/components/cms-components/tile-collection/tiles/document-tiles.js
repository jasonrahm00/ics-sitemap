import { Tile } from "../../../../utility/constructors";

export const productManuals = new Tile(
  'Product Manuals',
  null,
  null,
  '',
  '/document-library/product-manuals',
  'Product Manuals'
);

export const partsLists = new Tile(
  'Parts Lists',
  null,
  null,
  '',
  '/document-library/parts-lists',
  'Parts Lists'
);

export const serviceManuals = new Tile(
  'Service Manuals',
  null,
  null,
  '',
  '/document-library/service-manuals',
  'Service Manuals'
);

export const catalogs = new Tile(
  'Catalogs',
  null,
  null,
  '',
  '/document-library/catalogs',
  'Catalogs'
);

export const dataSheets = new Tile(
  'Data Sheets',
  null,
  null,
  '',
  '/document-library/data-sheets',
  'Data Sheets'
);

export const tipSheets = new Tile(
  'Tip Sheets',
  null,
  null,
  '',
  '/document-library/tip-sheets',
  'Tip Sheets'
);

export const guideBarFit = new Tile(
  'Guide Bar Fit-Up Chart',
  null,
  null,
  '',
  '',
  'Link Directly to PDF'
);

export const safetySheets = new Tile(
  'Safety Data Sheets',
  null,
  null,
  '',
  '/document-library/safety-sheets',
  'Safety Data Sheets'
);

export const AllDocTiles = [
  productManuals,
  partsLists,
  serviceManuals,
  catalogs,
  dataSheets,
  tipSheets,
  guideBarFit,
  safetySheets
];