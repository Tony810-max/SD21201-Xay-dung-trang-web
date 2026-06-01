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

      <div class="product-modal" id="product-modal" aria-hidden="true">
        <div class="modal-overlay" data-close-modal></div>
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-product-name">
          <button class="modal-close" type="button" data-close-modal aria-label="Đóng">×</button>
          <img src="" alt="" class="modal-image" id="modal-product-image" />
          <div class="modal-info">
            <span class="product-category" id="modal-product-category"></span>
            <h3 class="product-name" id="modal-product-name"></h3>
            <p class="product-desc" id="modal-product-description"></p>
            <span class="product-price" id="modal-product-price"></span>
          </div>
        </div>
      </div>

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
          <button class="btn-detail" data-product-id="${product.id}">Xem chi tiết</button>
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

  bindProductButtons(handler) {
    const productList = document.getElementById("product-list");
    productList.addEventListener("click", (e) => {
      const detailButton = e.target.closest(".btn-detail");
      if (!detailButton) {
        return;
      }

      handler(Number(detailButton.dataset.productId));
    });
  }

  bindModalClose() {
    const modal = document.getElementById("product-modal");
    modal.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", () => this.closeProductModal());
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        this.closeProductModal();
      }
    });
  }

  showProductModal(product, formatPrice) {
    const modal = document.getElementById("product-modal");
    const image = document.getElementById("modal-product-image");

    image.src = product.image;
    image.alt = product.name;
    document.getElementById("modal-product-category").textContent = product.category;
    document.getElementById("modal-product-name").textContent = product.name;
    document.getElementById("modal-product-description").textContent = product.description;
    document.getElementById("modal-product-price").textContent = formatPrice(product.price);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }
}
