import { useState } from "react";
import "./App.css";

function App() {
  const [busca, setBusca] = useState("");
  const [imovelSelecionado, setImovelSelecionado] = useState<number | null>(null);

  const imoveis = [
    {
      id: 1,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      imagens: [
        "https://blog.toroinvestimentos.com.br/wp-content/uploads/2024/01/investir-em-imoveis-para-alugar-e-um-bom-negocio.png",
        "https://i1.wp.com/catagua.com.br/wp-content/uploads/2020/06/investimento-descubra-os-motivos-para-comprar-imoveis-no-interior.jpg",
        "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg",
      ],
    },
    {
      id: 2,
      titulo: "Casa de Alto Padrão - Porto das Dunas",
      descricao: "350m² • Piscina • Condomínio Fechado",
      preco: "R$ 1.750.000",
      imagens: [
        "https://source.unsplash.com/800x600/?luxury,house,1",
        "https://source.unsplash.com/800x600/?luxury,house,2",
      ],
    },
    {
      id: 3,
      titulo: "Apartamento Moderno - Aldeota",
      descricao: "95m² • 2 Quartos • Mobiliado",
      preco: "R$ 680.000",
      imagens: [
        "https://source.unsplash.com/800x600/?apartment,interior,1",
        "https://source.unsplash.com/800x600/?apartment,interior,2",
      ],
    },
  ];

  const imovel = imoveis.find((i) => i.id === imovelSelecionado);

  const [imagemPrincipal, setImagemPrincipal] = useState<string | null>(null);

  const imoveisFiltrados = imoveis.filter(
    (imovel) =>
      imovel.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      imovel.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="font-sans text-gray-800">
      <section className="relative h-screen w-full">
        <img
          src="https://blog.toroinvestimentos.com.br/wp-content/uploads/2024/01/investir-em-imoveis-para-alugar-e-um-bom-negocio.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-semibold font-lato leading-tight tracking-wide">
              FM2 Imobiliária
            </h1>
            <p className="mt-6 text-lg md:text-xl font-light text-gray-200">
              Encontre seu novo lar com qualidade, conforto e condições facilitadas.
            </p>
            <a
              href="#imoveis"
              className="mt-10 inline-block px-8 py-3 rounded-full bg-blue-400 text-gray-800 font-semibold text-lg shadow hover:bg-blue-400 transition"
            >
              Conheça nossos imóveis
            </a>
          </div>
        </div>
      </section>

      {imovel ? (
        <section className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setImovelSelecionado(null)}
              className="mb-10 flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
            >
              <span className="text-lg">← Voltar para listagem</span>
            </button>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="grid gap-4">
                  <div>
                    <img
                      src={imagemPrincipal || imovel.imagens[0]}
                      alt="Imagem principal"
                      className="h-[450px] w-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    {imovel.imagens.map((url, index) => (
                      <div key={index}>
                        <img
                          src={url}
                          alt={`Miniatura ${index + 1}`}
                          onClick={() => {
                            console.log("Imagem principal mudada para: ", url);
                            setImagemPrincipal(url);
                          }}
                          className={`cursor-pointer h-24 w-full object-cover rounded-lg transition border-2 ${imagemPrincipal === url ? "border-blue-500" : "border-transparent"
                            }`}
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              <div className="text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{imovel.titulo}</h2>
                <p className="text-lg text-gray-600 mb-6">{imovel.descricao}</p>
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <p className="text-3xl font-bold text-yellow-600">{imovel.preco}</p>
                </div>
                <button className="mt-10 bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium shadow hover:bg-blue-600 transition">
                  Entrar em Contato
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (

        <section id="imoveis" className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">Imóveis Disponíveis</h2>
            <div className="max-w-md mx-auto mb-10">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar imóvel por localização, tipo..."
                className="w-full p-4 border rounded-full shadow focus:outline-none border-gray-400"
              />
            </div>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {imoveisFiltrados.length > 0 ? (
                imoveisFiltrados.map((imovel) => (
                  <div
                    key={imovel.id}
                    className="bg-gray-100 border border-gray-300 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <img src={imovel.imagens[0]} alt={imovel.titulo} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800">{imovel.titulo}</h3>
                      <p className="text-gray-600 mt-2">{imovel.descricao}</p>
                      <p className="text-yellow-600 text-xl font-bold mt-4">{imovel.preco}</p>
                      <button
                        onClick={() => setImovelSelecionado(imovel.id)}
                        className="mt-6 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">Nenhum imóvel encontrado.</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contato */}
      <section id="contato" className="py-20 px-6 bg-blue-400 text-center text-gray-900">
        <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
        <p className="text-gray-900 mb-6 max-w-xl mx-auto">
          Entre em contato conosco e tire suas dúvidas. Estamos prontos para te ajudar!
        </p>
        <button className="bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 hover:text-white">
          Entrar em Contato
        </button>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-100 text-center text-gray-600 py-6 text-sm">
        © 2025 FM2 Imobiliária • Realize o sonho da casa própria com condições facilitadas.
      </footer>
    </div>
  );
}

export default App;
