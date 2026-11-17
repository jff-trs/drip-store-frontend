import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 flex flex-col gap-10 min-h-[50vh]">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white border border-light-gray-2 rounded-lg p-6">
          <div className="flex justify-between items-center border-b border-light-gray-2 pb-4 mb-6">
            <h2 className="font-bold text-dark-gray-2 text-sm uppercase">
              Meu Carrinho
            </h2>
            <div className="flex gap-12 text-xs text-dark-gray-2 uppercase font-bold">
              <span>Qtd</span>
              <span>Unitário</span>
              <span>Total</span>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-dark-gray-2">
              Seu carrinho está vazio.{" "}
              <Link to="/products" className="text-primary underline">
                Voltar às compras
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b border-light-gray-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-light-gray-3 rounded p-1"
                  />
                  <div>
                    <p className="text-sm font-bold text-dark-gray-2 line-clamp-1 max-w-[200px]">
                      {item.title}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-error mt-1 hover:underline"
                    >
                      Remover
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="flex items-center border border-light-gray-2 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 text-dark-gray-2 hover:bg-light-gray-3"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm border-x border-light-gray-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 text-dark-gray-2 hover:bg-light-gray-3"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-light-gray-2 line-through w-16 text-right">
                    {formatPrice(item.price * 1.2)}
                  </span>
                  <span className="text-sm font-bold text-dark-gray-2 w-16 text-right">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full lg:w-[350px] bg-white border border-light-gray-2 rounded-lg p-6 flex flex-col gap-4 h-fit">
          <h2 className="font-bold text-dark-gray-2 text-sm uppercase border-b border-light-gray-2 pb-4">
            Resumo
          </h2>

          <div className="flex justify-between text-sm text-dark-gray-2">
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-dark-gray-2">
            <span>Frete:</span>
            <span>R$ 0,00</span>
          </div>

          <div className="flex justify-between items-center border-t border-light-gray-2 pt-4 mt-2">
            <span className="font-bold text-dark-gray-2">Total</span>
            <div className="text-right">
              <span className="font-bold text-xl text-dark-gray-2">
                {formatPrice(subtotal)}
              </span>
            </div>
          </div>

          <button className="bg-warning text-white font-bold py-3 rounded-lg w-full mt-4 hover:brightness-110 transition-all uppercase">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
