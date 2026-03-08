# Online Shop - JavaScript Frameworks Course Assignment

This project is a fully functional online shop built with **Next.Js, React, and Typecript**.
The application fetches products from the Noroff API and allows users to browse products, search, viewd details, add items to a shopping cart, and complete a checkout process.

## Live Demo
https://onlineshop-jsframeworks.netlify.app/

## Repository
https://github.com/NoroffFEU/jsfw-2025-v1-wanawsha-js-frameworks 

---

# Features

## Product Listing
Products are fetched from the Noroff API and displayed in a responsive grid layout.

Each product card shows:
- Product image
- Product title
- Price
- Discounted price (with strike-through on the original price)
- Rating
- Discount percentage badge

## Product Details Page
- Product image
- Product title
- Price
- Discounted price (with strike-through on the original price)
- Rating
- Discount percentage badge

Users can add items directly to the cart from this page.

## Dearch Functionality
Users can search for products using the search bar on the homepage.
Products are filtered dynamically based on the search query.

## Shopping Cart
The shopping cart allows users to:
- Add products
- Remove products
- Adjust quantities
- See the total price
- View the cart item count in the header

Cart data is stored in **localStorage**, so it persists after page refresh.

## Checkout
Users can proceed to checkout from the cart page.
After checkout:
- The user is redirected to a **Checkout Success page**
- The cart is cleared
- A confirmation message is shown

## Toast Notifications
Notifications appear when
- A product is added to the cart
- A product is removed from the cart

## Contact Form
The contact page includes a validated form with the following rules:
- Full Name: minimum 3 characters
- Subject: minimum 3 characters
- Email: must be valid
- Message: minimum 10 characters

Error messages are shown if validation fails.

---

# Technologies Used
- Next.js
- React
- TypeScript
- CSS Modules
- Noroff Online Shop API

---

## API
Data is fetched from the Noroff API:

GET /online-shop  
GET /online-shop/<id>

API documentation:  
https://docs.noroff.dev/docs/v2/basic/online-shop

---

# Installation
Clone the repository:
git clone https://github.com/NoroffFEU/jsfw-2025-v1-wanawsha-js-frameworks


Navigate into the project folder:
```bash
cd jsfw-2025-v1-wanawsha-js-frameworks
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open the project in the browser:
```bash
http://localhost:3000
```
