# MÓDULO 03 - BOOTCAMP ROCKETSEAT

CRIANDO O SERVIDOR - 


TEMPLATE ENGINE (Nunjucks) - 
* INSTALAÇÃO E UTILIZAÇÃO DO NUNJUCKS;
    . npm install nunjucks para inserí-lo no programa, então na página de servidor deve-se adicionar seu require e fazer o server.set view engine njk, o que faz mostrar qual engine que será utilizada (nunjucks nesse caso).
* LEVANDO O FRONT-END PARA O SERVIDOR;
    . Utilizando o render na página de servidor (em server.get) para fixar a página inicial.
* PÁGINA DINÂMICA COM O NUNJUCKS
    . Adicionando uma página de view principal e trabalhando com {% blocks %} para deixar o código mais enxuto. Onde, as "páginas secundárias" devem ter um extends da página principal.
* CONFIGURAÇÃO DE ARQUIVOS .NJK
    . Fazendo a Engine ler arquivos .njk e renomeando os views de .html para .njk.
    . Instalando a extensão de template para ter uma estilização especial, alertas, ... referente ao njk.
    . Inserindo linha de código no settings(JSON) para que o emmet volte a funcionar mesmo na extensão nunjucks.