export const Brands = {
  ics: 'ICS',
  merit: 'Merit',
  pentruder: 'Pentruder'
};

export const PageTypes = {
  pdp: 'Product Page',
  plp: 'Product Listing Page',
  categoryContent: 'Category Content Page',
  plainContent: 'Content Page'
};

export const Categories = {
  powerCut: 'Power Cutters',
  diamondChains: 'Diamond Chains',
  parts: 'Parts and Accessories',
  diamondWire: 'Diamond Wires',
  powerSupply: 'Power Supply',
  flatSaws: 'Flat Saws',
  wallSaws: 'Wall Saws',
  wireSaws: 'Wire Saws',
  steelCutting: 'Steel Cutting'
};

export const Attributes = {
  power: function(type) {this.type = type;},
  chainType: function(abrasion) {this.abrasion = abrasion},
  series: function(name) {this.name = name},
};