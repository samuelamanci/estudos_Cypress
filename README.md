\Desafio Greenmile\

O desafio proposto solicitou criar um mini-projeto de automação para executar um long click e validar se o tamanho foi aumentado para a escala 225 x 225
para isso eu deveria entrar no website: https://codepen.io/choskim/pen/RLYebL e utilizar a ferramenta de automação Cypress e executar esse long click e validação
em seguinda enviar o código fonte em um repositporio github com meu nome. este e o link para o repositório: 

INICIO DO TESTE.

	A princícpio o teste aparentava ser de fácil resolução, mas o cypress não conseguia identificar e executar o long click como faz em outros testes front-end
após pesquisas consegui verificar que a biblioteca hammer.js foi a causadora desse problema, o cypress não tem compatibildade com ela.

SOLUÇÃO ENCONTRADA.

	A solução que encontrei foi converter toda a parte em hammer.js para javascript native, e desta forma o cypress conseguia efeturar o long click 
e consequentemente validar se após o click o tamanho realmente saiu de 90 x 90 para 225 x 225 para fazer a assertiva que o desafio havia proposto.

	toda a parte visual em CSS não teve nenhum tipo de alteração, tal como o HTML, sendo necessário somente essa inteverção para fugir do problema
de incompatibilidade, segue a parte em javascript com a biblioteca hammer.js original e em seguida javascript native feita por mim.

Javascript com biblioteca hammer.js

 
var square = document.querySelector('.square');
var manager = new Hammer.Manager(square);


var Press = new Hammer.Press({
  time: 500
});


manager.add(Press);

manager.on('press', function(e) {
  e.target.classList.toggle('expand');
});






Javascript native modificado por mim.

var square = document.querySelector('.square');

var tempoDePressao = 500;

square.addEventListener("mouseup", function pressionar ()  {
    
    clearTimeout(tempoDePressao);

})

square.addEventListener("mousedown", function (btnesquerdo) {

    tempoDePressao = window.setTimeout(() => {

        btnesquerdo.target.classList.toggle('expand');
        
        },500);


})


COMO EXECUTAR O TESTE

1 - será necessário instalar o node.js
2 - será necessário instalar o framework cypress com o comando npm install cypress no prompt do node.js que foi instalado
3 - abra a pasta do projeto que estava no repositório que foi baixado do github
4 - o desafio está na pasta cypress, subpasta integration
5 - execute o cypress e execute o desafioGM.spec
6 - aguarde o teste finalizar







