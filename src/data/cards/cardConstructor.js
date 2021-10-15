const Card = function (
  brand,
  type,
  use,
  header,
  ctaText,
  description,
  link,
  productList,
  verified
) {
  this.brand = brand;
  this.type = type;
  this.use = use;
  this.header = header;
  this.ctaText = ctaText;
  this.description = description;
  this.link = link;
  this.productList = productList;
  this.verified = verified;
};

export default Card;