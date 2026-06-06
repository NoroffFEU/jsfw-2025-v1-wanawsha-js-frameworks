# Online Shop - JavaScript Frameworks Course Assignment

This project is a fully functional online shop built with **Next.Js, React, and Typecript**.
The application fetches products from the Noroff API and allows users to browse products, search, viewd details, add items to a shopping cart, and complete a checkout process.

## Live Demo
https://onlineshop-jsframeworks.netlify.app/

## Repository
https://github.com/NoroffFEU/jsfw-2025-v1-wanawsha-js-frameworks 

## Screenshots

<img width="1328" height="796" alt="Skjermbilde 2026-06-06 kl  21 08 58" src="https://github.com/user-attachments/assets/a8ec76c7-02aa-4bcc-8706-b30b40ce24df" />
<img width="1358" height="795" alt="Skjermbilde 2026-06-06 kl  21 09 14" src="https://github.com/user-attachments/assets/ba11f452-9a8d-4863-86bd-2b87d9f99d3e" />

---

## Portfolio Improvements

For Portfolio 2, I reviewed the project and made improvements to prepare it for professional presentation.

### Improvements Made

* Improved the product details page layout
* Increased spacing between product information sections
* Improved the presentation of product images
* Refined typography for product titles, prices and descriptions
* Improved the reviews section layout and readability
* Improved responsiveness on smaller screens
* Updated project documentation and README

### Related Commit

https://github.com/NoroffFEU/jsfw-2025-v1-wanawsha-js-frameworks/commit/21a881d51a1a78197c29e8b861faae5b7c786195

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

## Search Functionality
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

# Project Structure

        src
            app
                cart
                    contact
                    checkout
                        success
                    product
                        [id]
                    loading.tsx
                    page.tsx
        
            components
                Header
                ProductCard
                ProductSearch
                AddToCartButton
        
            store
                CartContext
        
            services
                api

            types

## Author

**Wanawsha Ahmad**

JavaScript Frameworks Course Assignment – Front-End Development at Noroff

