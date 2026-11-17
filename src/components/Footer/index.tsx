import { Link } from "react-router-dom";
import FooterInfo from "../FooterInfo";
import Logo from "../Logo";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const infosCol1 = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe Conosco", link: "/careers" },
    { text: "Meus Pedidos", link: "/orders" },
  ];

  const infosCol2 = [
    { text: "Camisetas", link: "/products?category=camisetas" },
    { text: "Calças", link: "/products?category=calcas" },
    { text: "Bonés", link: "/products?category=bones" },
    { text: "Headphones", link: "/products?category=headphones" },
    { text: "Tênis", link: "/products?category=tenis" },
  ];

  const infosCol3 = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      link: "/contact",
    },
    {
      text: "(85) 3051-3411",
      link: "/contact",
    },
  ];

  return (
    <footer className="bg-dark-gray text-white w-full pt-12 pb-6 mt-auto">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col">
        <div className="flex justify-between gap-8 mb-12">
          <div className="flex flex-col gap-6 w-[307px]">
            <Link to="/">
              <Logo variant="footer" />
            </Link>
            <p className="text-white text-[14px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-dark-gray p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-dark-gray p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-dark-gray p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gapp-[100px]">
            <div className="w-[135px]">
              <FooterInfo title="Informações" informations={infosCol1} />
            </div>

            <div className="w-[96px]">
              <FooterInfo title="Categorias" informations={infosCol2} />
            </div>

            <div className="w-[233px] ml-[60px]">
              <FooterInfo title="Contato" informations={infosCol3} />
            </div>
          </div>
        </div>

        <hr className="border-light-gray-3 opacity-20 mb-6" />

        <p className="text-center text-white text-[14px]">
          © {new Date().getFullYear()} Digital College
        </p>
      </div>
    </footer>
  );
}
