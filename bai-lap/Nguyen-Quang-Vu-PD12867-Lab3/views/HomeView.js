/**
 * HomeView - Hiển thị giao diện trang chủ
 */
class HomeView {
  constructor() {
    this.app = document.getElementById("app");
  }

  render(featuredProducts, formatPrice) {
    this.app.innerHTML = `
      <header class="header">
        <div class="header-container">
          <h1 class="logo">🛒 TechShop</h1>
          <nav class="nav">
            <a href="index.html" class="nav-link active">Trang chủ</a>
            <a href="products.html" class="nav-link">Sản phẩm</a>
          </nav>
        </div>
      </header>

      <section class="hero">
        <div class="hero-content">
          <h2>Chào mừng đến với TechShop</h2>
          <p>Khám phá các sản phẩm công nghệ hàng đầu với giá tốt nhất</p>
          <a href="products.html" class="btn-primary">Xem sản phẩm</a>
        </div>
      </section>

      <section class="featured-section">
        <h2 class="section-title">Sản phẩm nổi bật</h2>
        <div class="product-grid">
          ${featuredProducts.map(product => `
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <span class="product-price">${formatPrice(product.price)}</span>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="view-all-wrapper">
          <a href="products.html" class="btn-secondary">Xem tất cả sản phẩm →</a>
        </div>
      </section>

      <footer class="footer">
        <p>© 2024 TechShop - Nguyễn Quang Vũ | Lab 3 - MVC Pattern</p>
      </footer>
    `;
  }
}
