/**
 * ProductController - Điều khiển logic trang sản phẩm
 */
class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    const products = this.model.getAllProducts();
    const categories = this.model.getCategories();
    this.view.render(products, categories, this.model.formatPrice);
    this.view.bindFilterButtons(this.handleFilter.bind(this));
    this.view.bindProductButtons(this.handleViewProduct.bind(this));
    this.view.bindModalClose();
  }

  handleFilter(category) {
    let products;
    if (category === "all") {
      products = this.model.getAllProducts();
    } else {
      products = this.model.getProductsByCategory(category);
    }
    this.view.updateProductList(products, this.model.formatPrice);
  }

  handleViewProduct(productId) {
    const product = this.model.getProductById(productId);
    if (!product) {
      return;
    }

    this.view.showProductModal(product, this.model.formatPrice);
  }
}

// Khởi tạo MVC khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  const model = new ProductModel();
  const view = new ProductView();
  new ProductController(model, view);
});
