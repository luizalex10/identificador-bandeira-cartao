const txtNumeroCartao = document.getElementById('txt_numero_cartao');
const btnVerificarBandeira = document.getElementById('btn_verificar_bandeira');
const lblResultado = document.getElementById('lbl_resultado');

function verificarBandeira() {
    const cardNumber = txtNumeroCartao.value;
    const bandeira = getCardBrand(cardNumber);
    
    if (bandeira) {
        lblResultado.textContent = `A bandeira do cartão é: ${bandeira}`;
    } else {
        lblResultado.textContent = 'Bandeira não reconhecida ou inválida.';
    }
}

document.addEventListener('DOMContentLoaded', function() {

    txtNumeroCartao.addEventListener('onchange', verificarBandeira);
    btnVerificarBandeira.addEventListener('click', verificarBandeira);
    txtNumeroCartao.value = ''; // Limpa o campo de entrada ao carregar a página

});