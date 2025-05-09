const produtos = [
    { id: 1, preco: 10.00, quantidade: 2 },
    { id: 2, preco: 20.00, quantidade: 2 },
    { id: 3, preco: 30.00, quantidade: 2 },
    { id: 4, preco: 40.00, quantidade: 0 }
];
let result=0
for (const item of produtos) {
    if (item.quantidade>0) {
        result+=item.preco*item.quantidade
    }
}

console.log("total da compra: " + result)