export const Card = function (
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
