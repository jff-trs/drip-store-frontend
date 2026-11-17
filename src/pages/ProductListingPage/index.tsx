import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../../components/Section";
import ProductListing from "../../components/ProductListing";
import type { ApiProduct } from "../../components/ProductListing";
import FilterGroup from "../../components/FilterGroup";
import { FiFilter } from "react-icons/fi";

export default function ProductListingPage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get("filter");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: ApiProduct[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleGenderChange = (value: string) => {
    setSelectedGender((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  let filteredProducts = products;

  if (searchFilter) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchFilter.toLowerCase()),
    );
  }

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }

  if (selectedGender.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      const title = product.title.toLowerCase();
      if (
        selectedGender.includes("masculino") &&
        (title.includes("men") || title.includes("male"))
      )
        return true;
      if (
        selectedGender.includes("feminino") &&
        (title.includes("women") || title.includes("female"))
      )
        return true;
      return false;
    });
  }

  const sectionTitle = searchFilter
    ? `Resultados para "${searchFilter}" (${filteredProducts.length})`
    : `${filteredProducts.length} produtos encontrados`;

  const categoryOptions = [
    { text: "Eletrônicos", value: "electronics" },
    { text: "Joias", value: "jewelery" },
    { text: "Roupas Masculinas", value: "men's clothing" },
    { text: "Roupas Femininas", value: "women's clothing" },
  ];

  const genderOptions = [
    { text: "Masculino", value: "masculino" },
    { text: "Feminino", value: "feminino" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <h1 className="text-2xl font-bold text-dark-gray-2 mb-6">
        Todos os Produtos
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="hidden md:flex w-full md:w-[308px] flex flex-col gap-6 shrink-0">
          <div className="flex flex-col gap-2">
            <label className="text-[16px] text-dark-gray-2 font-bold">
              Ordenar por
            </label>
            <select className="w-full h-[60px] px-4 border border-light-gray-2 rounded-lg bg-white text-dark-gray-2 outline-none focus:border-primary">
              <option>Mais relevantes</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
          </div>

          <div className="bg-white border border-light-gray-2 rounded-lg p-6 flex flex-col gap-6">
            <h2 className="text-[16px] text-dark-gray-2 font-bold border-b border-light-gray-2 pb-4 flex items-center gap-2">
              <FiFilter /> Filtrar por
            </h2>

            <FilterGroup
              title="Categorias"
              inputType="checkbox"
              options={categoryOptions}
              selectedValues={selectedCategories}
              onChange={handleCategoryChange}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={genderOptions}
              selectedValues={selectedGender}
              onChange={handleGenderChange}
            />
          </div>
        </aside>

        <div className="md:hidden w-full mb-4">
          <button className="flex items-center justify-center gap-2 w-full bg-white border border-light-gray-2 rounded-lg py-3 font-bold text-dark-gray-2">
            <FiFilter /> Filtrar e Ordenar
          </button>
        </div>

        <main className="flex-1">
          <Section title={sectionTitle} titleAlign="left">
            {loading ? (
              <div className="w-full h-[300px] flex items-center justify-center text-primary text-xl font-bold">
                Carregando...
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductListing products={filteredProducts} />
            ) : (
              <div className="w-full h-[200px] flex items-center justify-center text-dark-gray-3 text-lg">
                Nenhum produto encontrado com esses filtros.
              </div>
            )}
          </Section>
        </main>
      </div>
    </div>
  );
}
