import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import { EntreContato } from "./components/Contato";
import { Header } from "./components/Header";
import { FaWhatsapp } from 'react-icons/fa';

type Midia = {
  url: string;
  tipo: "imagem" | "video";
};

type Imovel = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  midia: Midia[];
};

function App() {
  const [busca, setBusca] = useState("");
  const [imovelSelecionado, setImovelSelecionado] = useState<number | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<Midia | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 3;

  const imoveis: Imovel[] = [
    {
      id: 1,
      titulo: "Cobertura Vista Mar 01 - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 2,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 3,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 4,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 5,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 6,
      titulo: "Cobertura Vista Mar - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
    {
      id: 7,
      titulo: "Cobertura Vista Mar 07 - Meireles",
      descricao: "240m² • 4 Suítes • 3 Vagas",
      preco: "R$ 2.300.000",
      midia: [
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://www.youtube.com/watch?v=6gDhsUWCHrg", tipo: "video" },
        { url: "https://stgecommerceprd.blob.core.windows.net/blob-ecom-img/assets/locacao_imoveis_0411d5d55c.jpg", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6O9BfYnu0N7OEOJPj0dYKlIELEpAK40yWA&s", tipo: "imagem" },
        { url: "https://s2-valor.glbimg.com/EY1P88gXexOxnXY_Gy8A_9BQVWU=/0x0:630x469/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/X/z/xxeZd7RtevD0BrNWuBSA/fotaleza.png", tipo: "imagem" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhb8QcRmr4g8Y6TlipgACw-Aubm16rsZ5Uw&s", tipo: "imagem" },
      ]
    },
  ];

  const imovel = imoveis.find((i) => i.id === imovelSelecionado);

  const imoveisFiltrados = imoveis.filter(
    (imovel) =>
      imovel.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      imovel.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(imoveisFiltrados.length / itensPorPagina);
  const imoveisNaPaginaAtual = imoveisFiltrados.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const mudarPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Header />
      {imovel ? (
        //Detalhes do Imóvel
        <section className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => {
                setImagemPrincipal(null);
                setImovelSelecionado(null);
              }}
              className="mb-10 flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
            >
              <span className="text-lg">← Voltar para listagem</span>
            </button>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="grid gap-4">
                  <div>
                    {imagemPrincipal?.tipo === "video" ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${imagemPrincipal.url.split("v=")[1]}`}
                        className="h-[450px] w-full object-cover rounded-2xl shadow-lg"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        src={imagemPrincipal?.url || imovel.midia[0].url}
                        alt="Imagem principal"
                        className="h-[450px] w-full object-cover rounded-2xl shadow-lg"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    {imovel.midia.map((midia, index) => (
                      <div key={index}>
                        {midia.tipo === "imagem" ? (
                          <img
                            src={midia.url}
                            alt={`Miniatura ${index + 1}`}
                            onClick={() => setImagemPrincipal(midia)}
                            className={`cursor-pointer h-24 w-full object-cover rounded-lg transition border-2 ${imagemPrincipal?.url === midia.url ? "border-blue-500" : "border-transparent"
                              }`}
                          />
                        ) : (
                          <div
                            onClick={() => setImagemPrincipal(midia)}
                            className={`relative cursor-pointer h-24 w-full bg-black rounded-lg flex items-center justify-center text-white text-xs border-2 ${imagemPrincipal?.url === midia.url ? "border-blue-500" : "border-transparent"
                              }`}
                          >
                            Vídeo
                          </div>
                        )}
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
                <button className="mt-10 font-poppins bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium shadow hover:bg-blue-600 hover:text-white transition flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
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
              {imoveisNaPaginaAtual.length > 0 ? (
                imoveisNaPaginaAtual.map((imovel) => (
                  <div
                    key={imovel.id}
                    className="bg-gray-100 border border-gray-300 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <img src={imovel.midia.find(m => m.tipo === "imagem")?.url || ""} alt={imovel.titulo} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800">{imovel.titulo}</h3>
                      <p className="text-gray-600 mt-2">{imovel.descricao}</p>
                      <p className="text-yellow-600 text-xl font-bold mt-4">{imovel.preco}</p>
                      <button
                        onClick={() => {
                          setImagemPrincipal(imovel.midia[0]);
                          setImovelSelecionado(imovel.id);
                        }}
                        className="mt-6 w-full bg-black text-white py-2 rounded-full hover:bg-black hover:text-white"
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
            {/* Paginação */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => mudarPagina(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-l-lg disabled:bg-gray-300 disabled:text-gray-500 focus:outline-none hover:bg-blue-500 hover:text-white"
              >
                Anterior
              </button>
              <span className="px-4 py-2">{paginaAtual} de {totalPaginas}</span>
              <button
                onClick={() => mudarPagina(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg disabled:bg-gray-300 disabled:text-gray-500 focus:outline-none hover:bg-blue-500 hover:text-white"
              >
                Próximo
              </button>
            </div>





          </div>
        </section>
      )}
      <EntreContato />
      <Footer />
    </div>
  );
}

export default App;
