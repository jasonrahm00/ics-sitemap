export const Card = function (
  brand,
  type,
  header,
  ctaText,
  description,
  link,
  productList,
  verified,
  crumbs
) {
  this.brand = brand;
  this.type = type;
  this.header = header;
  this.ctaText = ctaText;
  this.description = description;
  this.link = link;
  this.productList = productList;
  this.verified = verified;
  this.crumbs = crumbs;
};

export const CardGroup = function(group, cards) {
  this.group = group;
  this.cards = cards;
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
