import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="w-full bg-gradient-to-br from-[#E5E6FF] to-[#B5B6F2] flex items-center justify-center min-h-[75vh] relative overflow-hidden py-10 px-4">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-full max-w-[400px] z-20">
          <h1 className="text-2xl font-bold text-dark-gray-2 mb-2">
            Acesse sua conta
          </h1>
          <p className="text-[13px] text-dark-gray-2 mb-8">
            Novo cliente? Então registre-se{" "}
            <Link
              to="/register"
              className="underline font-bold hover:text-primary"
            >
              aqui
            </Link>
            .
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="text-[12px] font-bold text-dark-gray-2">
                Login *
              </label>
              <input
                type="email"
                placeholder="Insira seu login ou email"
                className="w-full bg-light-gray-3 p-3 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-primary text-sm text-dark-gray-2"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold text-dark-gray-2">
                Senha *
              </label>
              <input
                type="password"
                placeholder="Insira sua senha"
                className="w-full bg-light-gray-3 p-3 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-primary text-sm text-dark-gray-2"
              />
            </div>

            <a
              href="#"
              className="text-[13px] text-dark-gray-2 underline font-bold mt-1"
            >
              Esqueci minha senha
            </a>

            <button
              type="button"
              className="bg-primary text-white font-bold py-3 rounded-lg hover:bg-tertiary transition-colors mt-2"
            >
              Acessar Conta
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-[13px] text-dark-gray-2">
              Ou faça login com
            </span>
            <div className="flex gap-4 text-2xl">
              <button className="hover:scale-110 transition-transform">
                <FcGoogle />
              </button>
              <button className="text-[#1877F2] hover:scale-110 transition-transform">
                <FaFacebook />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full max-w-[550px] h-[500px] relative">
          <img
            src="/pexels-melvin-buezo-2529148 1.png"
            alt="Tênis 1"
            className="absolute top-10 left-0 w-[300px] object-contain drop-shadow-2xl -rotate-12 z-10"
          />

          <img
            src="/pexels-melvin-buezo-2529148 2.png"
            alt="Tênis 2"
            className="absolute bottom-10 right-0 w-[280px] object-contain drop-shadow-2xl rotate-[20deg] z-0"
          />
        </div>
      </div>
    </div>
  );
}
