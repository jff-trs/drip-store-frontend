import ProductCard from "../ProductCard";

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductListingProps {
  products: ApiProduct[];
}

export default function ProductListing({ products }: ProductListingProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
      {products.map((product) => {
        const discountPrice = product.price * 0.9;

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            priceDiscount={discountPrice}
          />
        );
      })}
    </div>
  );
}
