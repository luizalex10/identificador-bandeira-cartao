# Validador de Bandeiras de Cartão

Este projeto é um validador de bandeiras de cartão de crédito feito em JavaScript, com uma interface simples em HTML. Ele identifica a bandeira do cartão a partir do número informado, suportando as principais bandeiras do mercado.

## Funcionalidades

- Identificação automática das bandeiras:
  - MasterCard
  - Visa
  - American Express
  - Diners Club
  - Discover
  - EnRoute
  - JCB
  - Voyager
  - HiperCard
  - Aura

- Interface web simples para digitar o número do cartão e exibir o resultado.

## Como usar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite o número do cartão no campo de texto e clique em "Verificar Bandeira".
4. O nome da bandeira será exibido abaixo do botão, caso reconhecida.

## Estrutura do Projeto

- `index.html`: Interface web para entrada do número do cartão e exibição do resultado.
- `card.js` : Funções de validação das bandeiras e lógica de identificação.
- `index.js` : Constantes contendo os elementos html e Funções de chamada da função de validação

## Exemplo de Uso

Digite, por exemplo, `4111111111111111` e clique em "Verificar Bandeira". O resultado será:

```
A bandeira do cartão é: Visa
```

## Como funciona

Cada função JavaScript verifica se o número do cartão corresponde ao padrão de uma bandeira específica, analisando prefixos e quantidade de dígitos. A função `getCardBrand` retorna o nome da bandeira identificada ou `null` caso não reconheça.

## Licença

Este projeto é livre para uso e modificação.
