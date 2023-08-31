# Contador de palavras 🧮	

Exercício realizado como parte do desafio de lógica do módulo 01 do curso de **desenvolvimento de software back-end** da  **[Cubos Academy](https://cubos.academy/)** <img src="https://avatars.githubusercontent.com/u/64142676?s=280&v=4" alt="Cubos Academy logo" title="Cubos Academy Desenvolvimento de Software - Foco em Backend - Ifood" width="20" height="20"/></a> ministrado em parceria com a **[Potência Tech](https://potenciatech.com.br/)** <img src="https://assets.toolzz.com.br/25202234/logo-instituicao/e8d5d0ca4cec7f9703744a3b4a479b99.png" alt="Potencia Tech" title="Powered by iFood" width="30" height="20">.

O proposto pelo exercício era criarmos um algoritmo que contasse o número de palavras contido em um determinado texto recebido na entrada.

A linguagem utilizada na resolução deste algoritmo foi **Javascript**.

Para resolução deste exercício primeiramente foram definidas as [variaveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types): 

- contadorPalavras - definida com o valor inicial de 0, o qual será incrementado ao longo do raciocínio.
- palavras - utilizando o método de string [split](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split) na entrada texto, esta variável é responsável por "quebrar" o texto em palavras a cada espaço encontrado, retornando um [array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) de palavras.

Para percorrer o array mencionado acima utilizei-me do laço de repetição [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of), para que a cada uma de suas iterações caso a palavra atendesse a estrutura condicional [if](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) implementada aninhada a este laço a variável contadorPalavras seria incrementada em +1.

<div align="center">

![Imagem código](https://raw.githubusercontent.com/uri-hub/contador-de-palavras/main/Captura%20de%20tela%202023-08-30%20212948.jpg)

</div>

Este exercício foi executado através da plataforma [Hackerranck](https://www.hackerrank.com/).
