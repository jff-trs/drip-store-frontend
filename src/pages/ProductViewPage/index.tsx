import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Gallery from "../../components/Gallery";
import BuyBox from "../../components/BuyBox";
import ProductOptions from "../../components/ProductOptions";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import type { ApiProduct } from "../../components/ProductListing";
import { useCart } from "../../contexts/CartContext";

export default function ProductViewPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [recommended, setRecommended] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produto não encontrado");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setRecommended(data));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-primary font-bold text-xl">
        Carregando produto...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-20 text-dark-gray-2 font-bold text-xl">
        Produto não encontrado.
      </div>
    );
  }

  const galleryImages = [
    { src: product.image },
    { src: product.image },
    { src: product.image },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">
      <div className="text-[12px] text-dark-gray-3 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-primary transition-colors">
          Produtos
        </Link>
        <span>/</span>
        <span className="text-dark-gray-2 font-bold capitalize">
          {product.category}
        </span>
        <span>/</span>
        <span className="text-dark-gray-2 font-bold truncate max-w-[200px] md:max-w-md">
          {product.title}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mt-4">
        <div className="w-full md:w-[700px] shrink-0">
          <Gallery
            images={galleryImages}
            width="100%"
            height="570px"
            objectFit="contain"
            showThumbs={true}
            radius="4px"
          />
        </div>

        <div className="flex-1">
          <BuyBox
            name={product.title}
            reference={`#${product.id}`}
            stars={product.rating.rate}
            rating={product.rating.count}
            price={product.price * 1.2}
            priceDiscount={product.price}
            description={product.description}
            onBuy={() => addToCart(product)}
          >
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[14px] font-bold text-dark-gray-2 block mb-1">
                  Tamanhos:
                </span>
                <ProductOptions
                  options={["39", "40", "41", "42"]}
                  shape="square"
                  type="text"
                  radius="4px"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold text-dark-gray-2 block mb-1">
                  Cores:
                </span>
                <ProductOptions
                  options={["#000000", "#FF0000", "#0000FF"]}
                  shape="circle"
                  type="color"
                />
              </div>
            </div>
          </BuyBox>
        </div>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommended} />
      </Section>
    </div>
  );
}
