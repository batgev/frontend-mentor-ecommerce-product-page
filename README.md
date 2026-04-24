# E-commerce Product Page

A responsive, interactive e-commerce product page built as a [Frontend Mentor](https://www.frontendmentor.io/) challenge. Users can browse product images in a gallery with a lightbox modal, adjust item quantities, add products to a cart, and view their cart contents.

## Features

- **Responsive Product Gallery** – Click through product images with thumbnail navigation.
- **Lightbox Modal** – Desktop users can click the main image to open an expanded lightbox view with next/previous controls.
- **Add to Cart** – Increment or decrement item quantity and add items to the shopping cart.
- **Cart Dropdown** – View cart summary with item count, product details, and total price.
- **Mobile Sidebar Navigation** – Hamburger menu for mobile users with a slide-out navigation panel.
- **Fully Responsive Design** – Optimized layout for mobile, tablet, and desktop using Tailwind CSS.

## Tech Stack

- **React** – UI library
- **Vite** – Build tool and development server
- **Tailwind CSS** – Utility-first CSS framework
- **Zustand** – Lightweight state management (with persistence and devtools)
- **ESLint** – Code linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173/`) to view the app.

### Building for Production

```bash
npm run build
```

### Previewing the Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── public/
│   └── images/           # Product images, icons, and logos
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Navigation, cart icon, mobile sidebar, cart dropdown
│   │   └── Lightbox.jsx  # Desktop lightbox modal for product images
│   ├── Store/
│   │   └── store.js      # Zustand store for cart and sidebar state
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── index.html
├── package.json
├── vite.config.js
└── README.md
```





## Author

- Frontend Mentor Profile: [@batgev](https://www.github.com/batgev)
