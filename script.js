let opEsc1 = "";
let opEsc2 = "";
let opEsc3 = "";
var valoropEsc = "";
var valorobEsc = "";
var valorosEsc = "";
var valorTotal = "";


function selecionarPrato(opcao1){
    opEsc1 = opcao1.innerHTML;
    let cardSelecionadoAntes = document.querySelector(".opcoes1 .selecionado");
    let nomePrato = opcao1.querySelector('.nomePrato').textContent


    valoropEsc = opcao1.innerHTML;
    var valorPrato = opcao1.querySelector('.precoValor').textContent

    if(cardSelecionadoAntes !== null){
        cardSelecionadoAntes.classList.remove("selecionado");
    }

    opcao1.classList.add("selecionado");

    let prato = document.querySelector('.prato')
    prato.innerHTML = nomePrato

    var precoPrato = document.querySelector('.precop')
    precoPrato.innerHTML = valorPrato

    valoropEsc = parseFloat(valorPrato.replace(",", "."))

    precoPrato.innerHTML = "R$ " + valorPrato

    
    console.log(nomePrato)
    console.log(valorPrato)
} 






function selecionarBebida(opcao2){

    opEsc2 = opcao2.innerHTML;
    let nomeBebida = opcao2.querySelector('.nomePrato').textContent
    valorobEsc = opcao2.innerHTML;
    var valorBebida = opcao2.querySelector('.precoValor').textContent


    let cardSelecionadoAntes = document.querySelector(".opcoes2 .selecionado");
    if(cardSelecionadoAntes !== null){
        cardSelecionadoAntes.classList.remove("selecionado");
    }
    opcao2.classList.add("selecionado");


    let bebida = document.querySelector('.bebida')
    bebida.innerHTML = nomeBebida


    var precoBebida = document.querySelector('.precob')
    precoBebida.innerHTML = valorBebida

    valorobEsc = parseFloat(valorBebida.replace(",", "."))

    precoBebida.innerHTML = "R$ " + valorBebida 
    

    console.log(nomeBebida)
    console.log(valorBebida)
} 










function selecionarSobre(opcao3){
    opEsc3 = opcao3.innerHTML;
    let cardSelecionadoAntes = document.querySelector(".opcoes3 .selecionado");
    let nomeSobre = opcao3.querySelector('.nomePrato').textContent
    valorosEsc = opcao3.innerHTML;
    var valorSobre = opcao3.querySelector('.precoValor').textContent

    if(cardSelecionadoAntes !== null){
        cardSelecionadoAntes.classList.remove("selecionado");
    }

    opcao3.classList.add("selecionado");

    let sobremesa = document.querySelector('.sobre')
    sobremesa.innerHTML = nomeSobre

    var precoSobre = document.querySelector('.precoss')
    precoSobre.innerHTML = valorSobre

    valorosEsc = parseFloat(valorSobre.replace(",", "."))

    precoSobre.innerHTML = "R$ " + valorSobre

    console.log(nomeSobre)
    console.log(valorSobre)
}






function fecharPedido(){

    if(opEsc1 !== ""){
        if(opEsc2 !== ""){
            if(opEsc3 !== ""){
                document.querySelector(".esconderfecharPedido").classList.remove("escondido")
                
                var valorTotal = (valoropEsc) + (valorobEsc) + (valorosEsc)
                
                console.log(valorTotal.toFixed(2).replace('.', ','))

                var valorFinal = document.querySelector('.precoTotal')
                valorFinal.innerHTML = "R$ " + (valorTotal.toFixed(2).replace('.', ','))

            }
        }
    }
         

}

function cancelarPedido(){

    document.querySelector(".esconderfecharPedido").classList.add("escondido")

}

function mandarWhatsapp(){
    
    let mensagemEnviar = "Olá, gostaria de fazer um pedido: "
    let nomeDoPrato = document.querySelector('.prato').textContent
    let nomeDaBebida = document.querySelector('.bebida').textContent
    let nomeDaSobre = document.querySelector('.sobre').textContent
    var totalPedido = document.querySelector('.precoTotal').textContent

    

    let url = "https://wa.me/5549999242997?text="
    + mensagemEnviar + "%0a"
    + "- Prato: " + nomeDoPrato + "%0a"
    + "- Bebida: " + nomeDaBebida + "%0a"
    + "- Sobremesa: " + nomeDaSobre + "%0a"
    + "Total: " + totalPedido
    
    

    window.open(url, '_blank').focus();
}
