import { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import miniCart from "../../assets/mini-cart.svg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] pt-6 md:pt-[34px] pb-6 md:pb-[29px]">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-[32px]">
            <button
              className="md:hidden text-dark-gray text-2xl cursor-pointer z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 shrink-0 w-[180px] md:w-[253px] h-[44px] flex items-center justify-center md:justify-start">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div className="hidden md:flex items-center bg-[#474747]/[0.04] px-6 rounded-[8px] md:w-[320px] lg:w-[559px] h-[60px]">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                className="bg-transparent outline-none w-full text-dark-gray-2 placeholder-light-gray text-[16px]"
              />
              <button
                onClick={handleSearch}
                type="button"
                className="cursor-pointer ml-2"
              >
                <FiSearch
                  size={20}
                  className="text-light-gray-2 hover:text-primary transition-colors"
                />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/register"
              className="text-[16px] text-dark-gray-2 underline hover:text-primary transition-colors mr-[30px] whitespace-nowrap"
            >
              Cadastre-se
            </Link>
            <Link
              to="/login"
              className="w-[114px] h-[40px] bg-primary text-white font-bold text-[14px] rounded-[4px] flex items-center justify-center hover:bg-tertiary transition-colors mr-[70px]"
            >
              Entrar
            </Link>
            <Link to="/cart" className="relative block shrink-0">
              <img
                src={miniCart}
                alt="Carrinho de Compras"
                className="w-[33px] h-[29px] cursor-pointer hover:opacity-80 transition-opacity"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4 shrink-0 z-10">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-dark-gray-2 text-xl"
            >
              <FiSearch />
            </button>

            <Link to="/cart" className="relative block">
              <img
                src={miniCart}
                alt="Carrinho"
                className="w-[33px] h-[29px]"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-[32px] mt-[40px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[24px]"
                : "text-dark-gray-2 pb-1 hover:text-primary transition-colors text-[16px] leading-[24px]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[24px]"
                : "text-dark-gray-2 pb-1 hover:text-primary transition-colors text-[16px] leading-[24px]"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[24px]"
                : "text-dark-gray-2 pb-1 hover:text-primary transition-colors text-[16px] leading-[24px]"
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[24px]"
                : "text-dark-gray-2 pb-1 hover:text-primary transition-colors text-[16px] leading-[24px]"
            }
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white border-t border-light-gray-2 p-4 gap-4 shadow-lg absolute w-full z-50">
          <div className="flex items-center bg-[#474747]/[0.04] px-4 py-2 rounded-[8px] w-full">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent outline-none w-full text-dark-gray-2 placeholder-light-gray"
            />
            <button onClick={handleSearch} type="button">
              <FiSearch size={20} className="text-dark-gray-2" />
            </button>
          </div>

          <div className="flex flex-col gap-3 font-bold text-dark-gray-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
              Produtos
            </NavLink>
            <NavLink to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categorias
            </NavLink>
            <NavLink to="/my-orders" onClick={() => setIsMenuOpen(false)}>
              Meus Pedidos
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 mt-2 border-t border-light-gray-2 pt-4">
            <Link
              to="/register"
              className="text-dark-gray-2 underline text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastre-se
            </Link>
            <Link
              to="/login"
              className="bg-primary text-white font-bold py-2 rounded-[4px] text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
