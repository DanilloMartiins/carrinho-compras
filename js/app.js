let totalGeral;
limpar();

function adicionar(){ 
                                    //recuperar valores nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-') [0];
let valorUnitario = produto.split('R$') [1];
let quantidade = document.getElementById('quantidade').value;

let preco = quantidade * valorUnitario     //calcular o preço, nosso subtotal

let carrinho = document.getElementById('lista-produtos');       //adicionar no carrinho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">${preco}</span>
        </section>`;

//atualizar o valor total

totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
quantidade = document.getElementById('quantidade').value = '';
}

//Copiado o inicio do codigo anterior e substituindo pela função limpar

function limpar() {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}