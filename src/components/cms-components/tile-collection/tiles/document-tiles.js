import { Tile } from "../../../../utility/constructors";

export const productManuals = new Tile(
  'Product Manuals',
  null,
  null,
  'Find your product’s operator manual here.',
  '/document-library/product-manuals',
  'Product Manuals'
);

export const partsLists = new Tile(
  'Replacement Parts Lists',
  null,
  null,
  'Keep your equipment running at peak efficiency. Find replacement parts for your machine here.',
  '/document-library/parts-lists',
  'Replacement Parts Lists'
);

export const serviceManuals = new Tile(
  'Service Manuals',
  null,
  null,
  'Keep your equipment running at peak efficiency. Find how to service your tools here.',
  '/document-library/service-manuals',
  'Service Manuals'
);

export const catalogs = new Tile(
  'Product Catalogs',
  null,
  null,
  'Get a digital copy of our product catalogs.',
  '/document-library/catalogs',
  'Product Catalogs'
);

export const dataSheets = new Tile(
  'Data Sheets',
  null,
  null,
  'Find product datasheets here.',
  '/document-library/data-sheets',
  'Data Sheets'
);

export const tipSheets = new Tile(
  'Tip Sheets',
  null,
  null,
  'Contain helpful tips and tricks to get the most out of your ICS tools.',
  '/document-library/tip-sheets',
  'Tip Sheets'
);

export const guideBarFit = new Tile(
  'Guide Bar Fit-Up Chart',
  null,
  null,
  'Use this chart to determine which ICS guidebar is compatible with your tool',
  '',
  'Link Directly to PDF'
);

export const safetySheets = new Tile(
  'Safety Data Sheets',
  null,
  null,
  'Formerly known as MSDS, these sheets include information on chemicals, environmental health hazards, protective measures and safety precautions for the handling, storing and transportation of specific products.',
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