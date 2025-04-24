import { FaWhatsapp } from "react-icons/fa";

export const EntreContato = () => {
    const telefone = '558592015734';

    return (
        <section id="contato" className="py-20 px-6 bg-blue-400 text-center text-gray-900">
            <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-gray-900 mb-6 mx-auto">
                Entre em contato conosco e tire suas dúvidas. Estamos prontos para te ajudar!
            </p>

            <a
                href={`https://wa.me/${telefone}?text=Olá,%20tenho%20interesse%20em%20comprar%20o%20meu%20imóvel!!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition-all text-lg shadow hover:text-white"
            >
                <FaWhatsapp className="text-2xl" />
                Entrar em Contato
            </a>
        </section>
    );
};
