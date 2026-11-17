import type { ReactNode } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface BuyBoxProps {
  name: string;
  reference: string;
  stars: number;
  rating: number;
  price: number;
  priceDiscount?: number;
  description: string;
  children?: ReactNode;
  onBuy: () => void;
}

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}: BuyBoxProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div>
        <h1 className="text-[32px] font-bold text-dark-gray leading-tight">
          {name}
        </h1>
        <span className="text-[12px] text-dark-gray-3">
          Referência: {reference}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex text-warning gap-1 text-[14px]">
          {[1, 2, 3, 4, 5].map((star) => {
            if (stars >= star) {
              return <FaStar key={star} />;
            } else if (stars >= star - 0.5) {
              return <FaStarHalfAlt key={star} />;
            } else {
              return <FaRegStar key={star} />;
            }
          })}
        </div>

        <div className="flex items-center gap-1 bg-warning text-white px-3 py-1 rounded-[4px] text-[14px] font-bold">
          {stars} <FaStar size={12} fill="white" />
        </div>
        <span className="text-[14px] text-light-gray">
          ({rating} avaliações)
        </span>
      </div>

      <p className="text-[14px] text-dark-gray-2 leading-relaxed mt-2">
        {description}
      </p>

      <div className="flex items-end gap-3 mt-2">
        {priceDiscount ? (
          <>
            <span className="text-[16px] text-light-gray-2 line-through mb-1">
              {formatPrice(price)}
            </span>
            <span className="text-[32px] font-bold text-dark-gray-2">
              {formatPrice(priceDiscount)}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-dark-gray-2">
            {formatPrice(price)}
          </span>
        )}
      </div>

      <div className="mt-2">{children}</div>

      <button
        onClick={onBuy}
        className="
          bg-warning text-white font-bold text-[16px] px-8 py-4 rounded-lg w-full md:w-[300px] mt-6 uppercase
          transition-all duration-150 
          hover:brightness-110 hover:scale-[1.02] 
          active:scale-95 active:brightness-90
        "
      >
        Comprar
      </button>
    </div>
  );
}
