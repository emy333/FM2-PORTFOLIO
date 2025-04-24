export const Header = () => {
    return (
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
    )
} 