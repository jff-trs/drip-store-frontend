import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import CategoriesPage from "./pages/CategoriesPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <div className="w-full overflow-x-hidden">
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <ProductListingPage />
                </Layout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Layout>
                  <ProductViewPage />
                </Layout>
              }
            />

            <Route
              path="/categories"
              element={
                <Layout>
                  <CategoriesPage />
                </Layout>
              }
            />
            <Route
              path="/my-orders"
              element={
                <Layout>
                  <MyOrdersPage />
                </Layout>
              }
            />

            <Route
              path="/login"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/register"
              element={
                <Layout>
                  <RegisterPage />
                </Layout>
              }
            />

            <Route
              path="/cart"
              element={
                <Layout>
                  <CartPage />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
