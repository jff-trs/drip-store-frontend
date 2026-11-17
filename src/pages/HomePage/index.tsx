import { useState, useEffect } from "react";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import type { ApiProduct } from "../../components/ProductListing";
import Gallery from "../../components/Gallery";
import type { GalleryImage } from "../../components/Gallery";
import {
  FiShoppingBag,
  FiTag,
  FiHeadphones,
  FiActivity,
  FiBox,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const bannerImages: GalleryImage[] = [
    {
      src: "/home-slide-6.jpeg",
      tagline: "Melhores ofertas personalizadas",
      title: "Queima de estoque Nike 🔥",
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do temporis laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas",
      buttonLink: "/products",
    },
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];
  const collections = [
    {
      image: "/collection-1.png",
      title: "Novo drop Supreme",
      badge: "30% OFF",
    },
    { image: "/collection-2.png", title: "Coleção Adidas", badge: "30% OFF" },
    { image: "/collection-3.png", title: "Novo Beats Bass", badge: "30% OFF" },
  ];

  const categories = [
    {
      name: "Camisetas",
      icon: <FiShoppingBag size={40} className="text-primary" />,
    },
    { name: "Calças", icon: <FiTag size={40} className="text-primary" /> },
    { name: "Bonés", icon: <FiBox size={40} className="text-primary" /> },
    {
      name: "Headphones",
      icon: <FiHeadphones size={40} className="text-primary" />,
    },
    { name: "Tênis", icon: <FiActivity size={40} className="text-primary" /> },
  ];

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="w-full flex justify-center mb-8 md:mb-12">
        <Gallery images={bannerImages} width="1440px" />
      </div>

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
          {collections.map((col, index) => (
            <div
              key={index}
              className="relative w-full h-[251px] rounded-[4px] overflow-hidden cursor-pointer group"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <span className="absolute top-4 left-4 bg-[#E7FF86] text-dark-gray-2 text-[12px] font-bold px-3 py-1 rounded-full z-10">
                {col.badge}
              </span>

              <Link
                to="/products"
                className="absolute bottom-6 left-4 bg-white text-primary font-bold text-[14px] px-6 py-2 rounded-lg z-10 hover:bg-primary hover:text-white transition-colors"
              >
                Comprar
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer group w-[80px] md:w-[104px]"
            >
              <div className="w-[80px] h-[80px] md:w-[104px] md:h-[104px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border border-light-gray-3">
                {cat.icon}
              </div>
              <span className="text-dark-gray-2 font-bold text-[14px] text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        {loading ? (
          <div className="w-full h-[300px] flex items-center justify-center text-primary text-xl font-bold">
            Carregando produtos...
          </div>
        ) : (
          <ProductListing products={products.slice(0, 8)} />
        )}
      </Section>
    </div>
  );
}
