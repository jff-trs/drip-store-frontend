import { Link } from "react-router-dom";

export default function MyOrdersPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-bold text-dark-gray-2 mb-4">Meus Pedidos</h1>
      <p className="text-light-gray text-lg mb-8 text-center">
        Você ainda não tem pedidos ou esta área está em construção.
      </p>
      <Link
        to="/"
        className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-tertiary transition-colors cursor-pointer"
      >
        Voltar para a Loja
      </Link>
    </div>
  );
}
