interface Carrinho {
    nome: string;
    quantidade: number;
    preco: number;
    total: number;
}

class carrinhoService  {
    carrinho: Carrinho[];

    constructor() {
        this.carrinho = [];
    }

    adicionarCarrinho(produto: Carrinho) {
        this.carrinho.push(produto);
    }
    
    removerProduto(produto: Carrinho) {
        this.carrinho.splice(this.carrinho.indexOf(produto), 1);
    }
    
    totalCarrinho() {
        return this.carrinho.reduce((acc, curr) => acc + curr.total, 0);
    }

    listarCarrinho() {
        return this.carrinho;
    }

    totaldeitens() {
        return this.carrinho.reduce((acc, curr) => acc + curr.quantidade, 0);
    }
}

export default carrinhoService;