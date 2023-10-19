import produtos from "../model/produtos";
import { useState } from "react";
import ProdutoModal from "./produtoModal";

interface Produto {
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
  avaliacao: number;
}

const ProdutosCard = () => {
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="ProdutosCard">
      {produtos.map((produto, index) => (
        <div className="Card" key={index} onClick={() => handleCardClick(produto)}>
          <img src={produto.imagem} alt={produto.nome} />
          <div className="CardInfo">
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </div>
          <p style={{ color: "green", fontWeight: "bold" }}>R${produto.preco}</p>
        </div>
      ))}
      {selectedProduto && (
        <ProdutoModal produto={selectedProduto} isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
    </div>
  );
}

export default ProdutosCard;