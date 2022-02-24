function productsByStatus(products, status) {
  return products.filter((product) => product.status === status);
}
