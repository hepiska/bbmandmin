export const filterProducts = (products, keyword) => (
  products.filter(product => product.name.toLowerCase().includes(keyword))
);
