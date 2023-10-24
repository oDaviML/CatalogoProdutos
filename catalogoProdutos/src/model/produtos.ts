interface Produto {
    imagem: string;
    nome: string;
    preco: number;
    descricao: string;
    avaliacao: number;
  }
  
  const produtos: Produto[] = [
    {
      imagem: "https://anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg",
      nome: "Pizza Margherita",
      preco: 39.99,
      descricao: "Uma deliciosa pizza Margherita com molho de tomate, mussarela, manjericão fresco e azeite de oliva.",
      avaliacao: 4.5
    },
    {
      imagem: "https://www.unileverfoodsolutions.pt/dam/global-ufs/mcos/portugal/calcmenu/recipes/PT-recipes/In-Development/hamb%C3%BArguer-cl%C3%A1ssico/main-header.jpg",
      nome: "Hambúrguer Clássico",
      preco: 9.99,
      descricao: "Um hambúrguer clássico com carne 100% bovina, queijo, alface, tomate e maionese.",
      avaliacao: 4.2
    },
    {
      imagem: "https://static.itdg.com.br/images/1200-630/a4880db5302563b309e2cd9664c8981c/303370-original.jpg",
      nome: "Sushi de Salmão",
      preco: 19.99,
      descricao: "Sushi de salmão fresco, arroz temperado e alga nori, servido com molho de soja e gengibre.",
      avaliacao: 4.7
    },
    {
      imagem: "https://static.tvgazeta.com.br/uploads/2022/05/macarrao-a-carbonara-receita.png",
      nome: "Massa Carbonara",
      preco: 14.99,
      descricao: "Massa carbonara com bacon crocante, queijo parmesão e molho à base de ovos.",
      avaliacao: 4.4
    },
    {
      imagem: "https://marolacomcarambola.com.br/wp-content/uploads/2019/08/Receita-de-Salada-Caesar-Caesar-Salad-1.jpg",
      nome: "Salada Caesar",
      preco: 8.99,
      descricao: "Uma refrescante salada Caesar com alface romana, croutons, queijo parmesão e molho Caesar.",
      avaliacao: 4.6
    },
    {
      imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/681ce4883e44e134adfdaa9762e2ced0_XL.jpg",
      nome: "Sorvete de Chocolate",
      preco: 6.99,
      descricao: "Uma generosa porção de sorvete de chocolate belga com calda de chocolate e chantilly.",
      avaliacao: 4.8
    },
    {
      imagem: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-2.jpg",
      nome: "Taco de Carnitas",
      preco: 12.99,
      descricao: "Taco de carnitas com carne de porco marinada, cebola, coentro e molho de abacate.",
      avaliacao: 4.3
    },
    {
      imagem: "https://espetinhodesucesso.com.br/wp-content/uploads/2022/06/ceviche-de-camarao.jpg",
      nome: "Ceviche de Camarão",
      preco: 17.99,
      descricao: "Ceviche de camarão fresco marinado em suco de limão, cebola roxa e coentro.",
      avaliacao: 4.5
    },
    {
      imagem: "https://pubimg.band.uol.com.br/files/9a77dfbf18ca12c514dc.png",
      nome: "Panquecas de Blueberry",
      preco: 10.99,
      descricao: "Panquecas fofas com blueberries frescos e xarope de bordo.",
      avaliacao: 4.0
    },
    {
      imagem: "https://www.pingodoce.pt/wp-content/uploads/2015/12/1449086533",
      nome: "Risoto de Cogumelos",
      preco: 28.99,
      descricao: "Risoto cremoso com cogumelos selvagens, queijo parmesão e ervas frescas.",
      avaliacao: 3.5
    },
    {
      imagem: "https://static.itdg.com.br/images/1200-630/d59df3673a8fcd365af0caac830ed377/324510-original.jpg",
      nome: "Salmão Grelhado",
      preco: 40.99,
      descricao: "Filé de salmão grelhado com molho de manteiga e ervas, servido com vegetais sauté.",
      avaliacao: 4.4
    },
    {
      imagem: "https://static.itdg.com.br/images/1200-630/992b3b1ebeb0984248bfcd234a22f08a/332009-original.jpg",
      nome: "Tiramisu",
      preco: 7.99,
      descricao: "Uma porção clássica de tiramisu, o famoso doce italiano à base de café e mascarpone.",
      avaliacao: 4.6
    }
  ];

export default produtos;