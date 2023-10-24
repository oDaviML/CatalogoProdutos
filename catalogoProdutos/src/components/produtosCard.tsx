import produtos from "../model/produtos";
import { useState } from "react";
import ProdutoModal from "./produtoModal";
import {BiFilterAlt} from 'react-icons/bi';
import {PiSortAscendingBold} from 'react-icons/pi';
import {PiSortDescendingBold} from 'react-icons/pi';

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
  const [precoOrdenado, setPrecoOrdenado] = useState<"asc" | "desc" | "">("");

  const handleCardClick = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ordenarPorPreco = () => {
    if (precoOrdenado === "") {
      setPrecoOrdenado("asc");
    } else if (precoOrdenado === "asc") {
      setPrecoOrdenado("desc");
    } else {
      setPrecoOrdenado("");
    }
  };

  const getFiltroIcon = () => {
    if (precoOrdenado === "asc") {
      return <PiSortAscendingBold />;
    } else if (precoOrdenado === "desc") {
      return <PiSortDescendingBold />;
    } else {
      return <BiFilterAlt />;
    }
  };

  const produtosOrdenados = [...produtos].sort((a, b) => {
    if (precoOrdenado === "asc") {
      return a.preco - b.preco;
    } else if (precoOrdenado === "desc") {
      return b.preco - a.preco;
    }
    return 0;
  });

  return (
    <div className="ProdutosContainer">
      <div className="headerProdutos">
        <h1>Cardápio</h1>
        <button id="filtro" onClick={ordenarPorPreco}>{getFiltroIcon()}</button>
      </div>
      <div className="ProdutosCard">
        {produtosOrdenados.map((produto, index) => (
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
    </div>
  );
}

export default ProdutosCard;