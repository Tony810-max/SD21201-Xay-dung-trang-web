/**
 * ProductModel - Quản lý dữ liệu sản phẩm
 */
class ProductModel {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: 35000000,
        image: "https://via.placeholder.com/300x200?text=Laptop+Dell",
        description: "Laptop cao cấp với màn hình 15 inch, chip Intel Core i7, RAM 16GB",
        category: "Laptop"
      },
      {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 29000000,
        image: "https://via.placeholder.com/300x200?text=iPhone+15",
        description: "Điện thoại flagship của Apple với camera 48MP, chip A17 Pro",
        category: "Điện thoại"
      },
      {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 25000000,
        image: "https://via.placeholder.com/300x200?text=Galaxy+S24",
        description: "Smartphone Android cao cấp với bút S-Pen và camera AI",
        category: "Điện thoại"
      },
      {
        id: 4,
        name: "MacBook Air M3",
        price: 28000000,
        image: "https://via.placeholder.com/300x200?text=MacBook+Air",
        description: "Laptop mỏng nhẹ với chip Apple M3, thời lượng pin 18 giờ",
        category: "Laptop"
      },
      {
        id: 5,
        name: "iPad Pro M2",
        price: 22000000,
        image: "https://via.placeholder.com/300x200?text=iPad+Pro",
        description: "Máy tính bảng mạnh mẽ với màn hình Liquid Retina XDR",
        category: "Máy tính bảng"
      },
      {
        id: 6,
        name: "AirPods Pro 2",
        price: 5500000,
        image: "https://via.placeholder.com/300x200?text=AirPods+Pro",
        description: "Tai nghe không dây với chống ồn chủ động thế hệ mới",
        category: "Phụ kiện"
      }
    ];
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category) {
    return this.products.filter(product => product.category === category);
  }

  getCategories() {
    return [...new Set(this.products.map(product => product.category))];
  }

  getFeaturedProducts(count = 3) {
    return this.products.slice(0, count);
  }

  formatPrice(price) {
    return price.toLocaleString("vi-VN") + " ₫";
  }
}
