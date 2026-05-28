/**
 * ProductView - Hiển thị giao diện trang sản phẩm
 */
class ProductView {
  constructor() {
    this.app = document.getElementById("app");
  }

  render(products, categories, formatPrice) {
    this.app.innerHTML = `
      <header class="header">
        <div class="header-container">
          <h1 class="logo">🛒 TechShop</h1>
          <nav class="nav">
            <a href="index.html" class="nav-link">Trang chủ</a>
            <a href="products.html" class="nav-link active">Sản phẩm</a>
          </nav>
        </div>
      </header>

      <section class="product-page">
        <h2 class="section-title">Tất cả sản phẩm</h2>

        <div class="filter-bar">
          <button class="filter-btn active" data-category="all">Tất cả</button>
          ${categories.map(cat => `
            <button class="filter-btn" data-category="${cat}">${cat}</button>
          `).join("")}
        </div>

        <div class="product-grid" id="product-list">
          ${this.renderProducts(products, formatPrice)}
        </div>
      </section>

      <footer class="footer">
        <p>© 2024 TechShop - Nguyễn Quang Vũ | Lab 3 - MVC Pattern</p>
      </footer>
    `;
  }

  renderProducts(products, formatPrice) {
    if (products.length === 0) {
      return '<p class="no-products">Không có sản phẩm nào trong danh mục này.</p>';
    }
    return products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="btn-detail" onclick="alert('Chi tiết: ${product.name}')">Xem chi tiết</button>
        </div>
      </div>
    `).join("");
  }

  updateProductList(products, formatPrice) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = this.renderProducts(products, formatPrice);
  }

  bindFilterButtons(handler) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        handler(e.target.dataset.category);
      });
    });
  }
}
