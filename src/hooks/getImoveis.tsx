import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/api";

const getImoveis= async () => {
  const { data } = await axiosInstance.get(`imoveis/imoveisPortfolio/fm2-imobiliaria`);
  if (data.erro) {
    throw new Error("Imóveis não encontrados");
  }
  return data.result;
};

export const useGetImoveis = () => {
  return useQuery({
    queryKey: ["getImoveis"],
    queryFn: () => getImoveis()
  });
};
