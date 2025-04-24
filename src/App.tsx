import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import { EntreContato } from "./components/Contato";
import { Header } from "./components/Header";
import { FaBath, FaBed, FaMapMarkerAlt, FaRulerCombined, FaWhatsapp } from 'react-icons/fa';
import { useGetImoveis } from "./hooks/getImoveis";

type Midia = {
  url: string;
  tipo: "imagem" | "video";
};

type Imovel = {
  id: number;
  titulo: string;
  descricao: string;
  valor: string;
  midia: Midia[];
  endereco: string;
  cidade: string;
  estado: string;
  tipo: string;
  area: number;
  quartos: number;
  banheiros: number;
};

function App() {
  const [busca, setBusca] = useState("");
  const [imovelSelecionado, setImovelSelecionado] = useState<number | null>(null);
  const [imagemPrincipal, setImagemPrincipal] = useState<Midia | null>(null);
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 3;
  const { data: imoveisData, isLoading, isError } = useGetImoveis();

  const telefone = '558592015734';

  useEffect(() => {
    if (imoveisData) {
      setImoveis(imoveisData);
    }
  }, [imoveisData]);


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

  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  const expandirImagem = (src: string) => {
    setImagemSelecionada(src);
  };

  const fecharImagem = () => {
    setImagemSelecionada(null);
  };

  function formatarTitulo(titulo: string) {
    return titulo
      .toLowerCase()
      .split(" ")
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ");
  }


  return (
    <>
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
                          onClick={() => expandirImagem(imagemPrincipal?.url || imovel.midia[0].url)}

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
                  <p className="text-lg text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: imovel.descricao.replace(/\n/g, '<br />') }} />
                  {imovel.tipo && (
                    <p className="text-gray-500 mt-2">
                      Tipo: <span className="font-medium text-gray-700">{imovel.tipo}</span>
                    </p>
                  )}
                  <div>
                    {(imovel.quartos || imovel.banheiros || imovel.area) && (
                      <div className="flex items-center gap-4 text-sm text-gray-700 mt-3 flex-wrap">
                        {imovel.quartos && (
                          <span className="flex items-center gap-1">
                            <FaBed className="text-yellow-600 text-base" />
                            {imovel.quartos} Quartos
                          </span>
                        )}
                        {imovel.banheiros && (
                          <span className="flex items-center gap-1">
                            <FaBath className="text-yellow-600 text-base" />
                            {imovel.banheiros} Banheiros
                          </span>
                        )}
                        {imovel.area && (
                          <span className="flex items-center gap-1">
                            <FaRulerCombined className="text-yellow-600 text-base" />
                            {imovel.area} m²
                          </span>
                        )}
                      </div>
                    )}

                    {(imovel.endereco || imovel.cidade || imovel.estado) && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                        <FaMapMarkerAlt className="text-yellow-600 text-base" />
                        <span>
                          {[imovel.endereco, imovel.cidade, imovel.estado].filter(Boolean).join(', ')}
                        </span>
                      </div>
                    )}
                  </div>



                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <p className="text-3xl font-bold text-yellow-600">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(imovel.valor))}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${telefone}?text=Olá,%20tenho%20interesse%20no%20imóvel%20${encodeURIComponent(imovel.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex font-poppins bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium shadow hover:bg-blue-600 hover:text-white transition items-center gap-2 w-fit"
                  >
                    <FaWhatsapp className="text-xl" />
                    Entrar em Contato
                  </a>

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

                {isLoading ? (
                  <div className="flex justify-center items-center col-span-full">
                    <p className="text-center justify-center text-lg">Carregando imóveis...</p>

                  </div>
                ) : isError ? (
                  <div className="flex justify-center items-center col-span-full">
                    <p className="text-center justify-center text-red-500 text-lg">Erro interno ao carregar os imóveis.</p>
                  </div>
                ) : imoveisNaPaginaAtual.length > 0 ? (
                  imoveisNaPaginaAtual.map((imovel) => (
                    <div
                      key={imovel.id}
                      className="bg-gray-100 border border-gray-300 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                      <img src={imovel.midia.find(m => m.tipo === "imagem")?.url || ""} alt={imovel.titulo} className="h-64 w-full object-cover" />
                      <div className="p-6">
                        <h3 className="text-[20px] font-semibold text-gray-800">
                          {formatarTitulo(imovel.titulo)}
                        </h3>
                        {/* <p
                        className="text-gray-600 mt-2 whitespace-pre-line overflow-hidden text-ellipsis"
                        style={{ maxHeight: '100px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}
                        dangerouslySetInnerHTML={{ __html: imovel.descricao.replace(/\n/g, '<br />') }}
                      /> */}
                        {imovel.tipo && (
                          <p className="text-gray-500 mt-2">
                            Tipo: <span className="font-medium text-gray-700">{imovel.tipo}</span>
                          </p>
                        )}

                        <div>
                          {(imovel.quartos || imovel.banheiros || imovel.area) && (
                            <div className="flex items-center gap-4 text-sm text-gray-700 mt-3 flex-wrap">
                              {imovel.quartos && (
                                <span className="flex items-center gap-1">
                                  <FaBed className="text-yellow-600 text-base" />
                                  {imovel.quartos} Quartos
                                </span>
                              )}
                              {imovel.banheiros && (
                                <span className="flex items-center gap-1">
                                  <FaBath className="text-yellow-600 text-base" />
                                  {imovel.banheiros} Banheiros
                                </span>
                              )}
                              {imovel.area && (
                                <span className="flex items-center gap-1">
                                  <FaRulerCombined className="text-yellow-600 text-base" />
                                  {imovel.area} m²
                                </span>
                              )}
                            </div>
                          )}

                          {(imovel.endereco || imovel.cidade || imovel.estado) && (
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                              <FaMapMarkerAlt className="text-yellow-600 text-base" />
                              <span>
                                {[imovel.endereco, imovel.cidade, imovel.estado].filter(Boolean).join(', ')}
                              </span>
                            </div>
                          )}
                        </div>




                        <p className="text-yellow-600 text-xl font-bold mt-4">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(imovel.valor))}
                        </p>
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

      {imagemSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={fecharImagem}
          />
          <div className="relative z-10 max-w-4xl w-full px-4">
            <img
              src={imagemSelecionada}
              alt="Imagem expandida"
              className="w-full max-h-[90vh] rounded-lg  transition-transform duration-300 transform hover:scale-105 object-contain"
            />
          </div>
        </div>
      )}


    </>

  );
}

export default App;
