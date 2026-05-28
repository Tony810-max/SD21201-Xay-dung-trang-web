/**
 * HomeController - Điều khiển logic trang chủ
 */
class HomeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    const featuredProducts = this.model.getFeaturedProducts(3);
    this.view.render(featuredProducts, this.model.formatPrice);
  }
}

// Khởi tạo MVC khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  const model = new ProductModel();
  const view = new HomeView();
  new HomeController(model, view);
});
