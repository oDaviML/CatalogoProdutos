import { useState } from "react";
import Modal from "react-modal";
import { FiShoppingCart } from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import carrinhoService from "../model/carrinhoService";

interface Produto {
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
  avaliacao: number;
}

interface Carrinho {
  nome: string;
  quantidade: number;
  preco: number;
  total: number;
}

let produtoCarrinho: Carrinho;
const carrinhoServiceInstance = new carrinhoService();

const ProdutoModal = ({ produto, isOpen, onRequestClose }: { produto: Produto; isOpen: boolean; onRequestClose: () => void }) => {
  const closeModal = () => {
    onRequestClose();
  };

  const [quantidade, setQuantidade] = useState(1);

  const handleQuantidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantidade(Number(event.target.value));
  };

  const handleAdicionarCarrinho = () => {
    closeModal();
    produtoCarrinho = {
      nome: produto.nome,
      quantidade: quantidade,
      preco: produto.preco,
      total: produto.preco * quantidade
    }

    carrinhoServiceInstance.adicionarCarrinho(produtoCarrinho);
    console.log(carrinhoServiceInstance.totaldeitens());
    console.log(carrinhoServiceInstance.listarCarrinho());
  };

  return (
    <Modal className={"Modal"} isOpen={isOpen} onRequestClose={closeModal}>
      <div className="HeaderModal">
        <button className="CloseButton" onClick={closeModal}><AiOutlineClose /></button>
      </div>
      <div className="ModalInfo">
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p style={{ color: "green", fontWeight: "bold" }}>R${produto.preco}</p>
        <p>Avaliação: {produto.avaliacao}</p>
      </div>
      <div className="ModalFooter">
        <div className="Separator"></div>
        <div className="ModalCarrinho">
          <label htmlFor="quantidade">Quantidade: </label>
          <input type="number" min={1} max={10} value={quantidade} onChange={handleQuantidadeChange} />
          <button onClick={handleAdicionarCarrinho}><FiShoppingCart /></button>
          <p>Total: R${ (quantidade * produto.preco).toFixed(2) }</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProdutoModal;