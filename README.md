# 📦 Acme Widget Co – Basket Proof of Concept

This project implements a simple basket system for **Acme Widget Co**, featuring product pricing, promotional offers, and dynamic delivery rules. The application is built with **React**, **TypeScript**, and **Vite**, with business logic fully isolated for testing and extensibility.

---

## 🚀 Overview
The basket system handles complex pricing rules, including "Buy One Get One Half Price" offers and tiered delivery costs. The UI is responsive, featuring square product tiles and a real-time breakdown of the subtotal, discounts, and delivery fees.

### Core Features
* **Isolated Logic:** All pricing and discount logic resides in `Basket.ts`.
* **Promotional Offers:** Automated "buy one Red Widget, get the second half price" calculation.
* **Dynamic Delivery:** Tiered shipping rates based on order value.
* **Responsive UI:** CSS Grid-based layout with square product tiles.
* **Unit Tested:** Comprehensive test suite using Vitest.

---

## 🛠 Tech Stack
* **Frontend:** React 18, TypeScript 5, Vite 5
* **Styling:** CSS3 (Grid & Flexbox)
* **Testing:** Vitest

---

## 📐 Product & Pricing Rules

### Product Catalogue
| Code | Name | Price |
| :--- | :--- | :--- |
| **R01** | Red Widget | $32.95 |
| **G01** | Green Widget | $24.95 |
| **B01** | Blue Widget | $7.95 |

### Offers & Delivery
* **Special Offer:** Buy one Red Widget (R01), get the second for **half price**. Applies per pair.
* **Delivery Charges:**
    * Orders < $50: **$4.95**
    * Orders < $90: **$2.95**
    * Orders $90+: **Free**

---

## 📂 Project Structure
```text
acme-widget-basket/
├─ src/
│  ├─ basket/
│  │  ├─ Basket.ts      <-- Business logic (offers, delivery, totals)
│  │  └─ types.ts       <-- Product & Basket interfaces
│  ├─ components/
│  │  └─ BasketUI.tsx   <-- React UI components
│  ├─ data/
│  │  └─ catalogue.ts   <-- Product definitions
│  ├─ App.tsx           <-- Main Application
│  └─ index.css         <-- Global styles & layout
├─ package.json
└─ vitest.config.ts
``` 

## 💻 Getting Started

This guide will help you set up and run the **Acme Widget Basket** project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
* **Node.js**: Version `18.x` or higher (Development tested on `24.11.1`)
* **npm**: Included with your Node.js installation

---

## Installation & Development

Follow these steps to get your development environment running:


1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Run Unit Tests:**
    ```bash
    npm run test
    ```

---
