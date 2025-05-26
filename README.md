# 🛍️ Product Store Application

A full-stack web application built with Angular and .NET Core that allows users to perform CRUD operations on a product catalog. This project demonstrates modern front-end and back-end development best practices, including clean architecture, dependency injection, and responsive UI design using Bootstrap.

---

## 🚀 Tech Stack

| Layer       | Technology                           |
| ----------- | ------------------------------------ |
| Frontend    | Angular 15+ (Standalone Components)  |
| Styling     | Bootstrap 5                          |
| Backend     | .NET 6 / ASP.NET Core Web API        |
| ORM         | Entity Framework Core                |
| Auth (opt.) | JWT (JSON Web Tokens)                |
| Database    | SQL Server                           |
| Tools       | Visual Studio / VS Code, Angular CLI |

---

## 📁 Project Structure

### 🔹 Backend (`/FullStackApp`)

* **Controllers/** – `ProductsController.cs`
* **Models/** – `Product.cs`
* **Data/** – `ApplicationDbContext.cs`
* **Repositories/** – `IProductRepository.cs`, `ProductRepository.cs`
* **Program.cs** – Middleware config (Swagger, EF Core, Auth)

### 🔹 Frontend (`/product-store-ui`)

* **services/** – `product.service.ts`
* **products/** – `product-list`, `add-product`, `edit-product`
* **app.routes.ts** – Client-side routes
* **styles.scss** – Global styles (Bootstrap included)

---

## ✨ Features

* ✅ View all products with ID, name, and price
* ➕ Add product with validation
* ✏️ Edit product with prefilled data
* 🗑️ Delete product with confirmation
* 🎨 Clean Bootstrap UI
* 🔁 Automatic refresh after updates
* 🔐 Optional JWT-based route protection
* 📜 Swagger UI enabled for API testing

---

## 🌐 API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/products`      | Get all products  |
| GET    | `/api/products/{id}` | Get product by ID |
| POST   | `/api/products`      | Add new product   |
| PUT    | `/api/products/{id}` | Update product    |
| DELETE | `/api/products/{id}` | Delete product    |

---

## 📦 Running the App

### Backend:

```bash
cd FullStackApp
 dotnet run
```

Visit Swagger: [https://localhost:5001/swagger](https://localhost:5001/swagger)

### Frontend:

```bash
cd product-store-ui
npm install
ng serve
```

Visit App: [http://localhost:4200](http://localhost:4200)

---

## ✅ Design Patterns & Practices

* Repository Pattern
* Dependency Injection
* Separation of Concerns
* Angular Standalone Components
* DTO Binding in Web API

---

## 📄 License

This project is licensed under the MIT License. Feel free to fork and customize!

---

## 🙌 Acknowledgments

Thanks to Bootstrap, Angular, and the .NET Core community for their fantastic tools and documentation!

---

> *Built with ❤️ by Koteswara Rao Tankasala*
