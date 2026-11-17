import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  priceDiscount,
}: ProductCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col h-full w-full max-w-[292px] cursor-pointer group"
    >
      <div className="relative w-full h-[321px] bg-light-gray-3 rounded-lg overflow-hidden flex items-center justify-center p-4 shrink-0">
        {priceDiscount && (
          <span className="absolute top-4 left-4 bg-[#E7FF86] text-dark-gray-2 text-[12px] font-bold px-3 py-1 rounded-full z-10">
            {Math.round(((price - priceDiscount) / price) * 100)}% OFF
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>

      <h3 className="text-dark-gray-3 text-[16px] font-medium mt-3 line-clamp-2 h-[48px] leading-[24px]">
        {name}
      </h3>

      <div className="flex items-end gap-2 mt-auto pt-2">
        {priceDiscount ? (
          <>
            <span className="text-light-gray text-[16px] line-through mb-1">
              {formatPrice(price)}
            </span>
            <span className="text-dark-gray text-[24px] font-bold">
              {formatPrice(priceDiscount)}
            </span>
          </>
        ) : (
          <span className="text-dark-gray text-[24px] font-bold">
            {formatPrice(price)}
          </span>
        )}
      </div>
    </Link>
  );
}
