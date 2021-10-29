export const Tile = function (
  header,
  subheader,
  image,
  description,
  ctaUrl,
  ctaText,
  productList,
  verified,
  crumbs
) {
  this.header = header;
  this.subheader = subheader;
  this.image = image;
  this.description = description;
  this.ctaUrl = ctaUrl;
  this.ctaText = ctaText;
  this.productList = productList;
  this.verified = verified;
  this.crumbs = crumbs;
};

export const TileGroup = function(header, subheader, tiles) {
  this.header = header;
  this.subheader = subheader;
  this.tiles = tiles;
};

export const RouteObject = function(path, render) {
  this.path = path;
  this.render = render;
};

export const SocialLink = function(channel, url, icon) {
  this.channel = channel;
  this.url = url;
  this.icon = icon;
};

export const Product = function(name, brand, primaryCat, attributes, useCat) {
  this.name = name;
  this.brand = brand;
  this.primaryCat = primaryCat;
  this.attributes = attributes ? attributes : null;
  this.useCat = useCat
};

export const Attributes = function(power, chainType, series) {
  this.power = power;
  this.chainType = chainType;
  this.series = series;
}
