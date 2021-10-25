# E-PEOPLE

### O que é?
É um aplicativo para pesquisar e encontrar pessoas aleatoriamente.
Como se utiliza? É bem simples, só tem que clicar no botão 'Find People' e siga os passos.
Se gostou de algum perfil, pode descarrega-lo em uma planilha excel.

### Como eu faço?
Para fazer o projeto funcionar, você só precisa fazer o download com o 'Git clone'
Depois fazer 'npm install' para instalar dependências.
E finalmente 'npm start' para ver o projeto.
Se houver algum erro de compatibilidade de versão, você pode colocar num arquivo '.env' o siguinte: SKIP_PREFLIGHT_CHECK=true .


### Especificações técnicas e opiniões?
A página foi feita com React para gerenciar bem os estados e poder fazer as ligações para a API rapidamente por meio da renderização automática do 'DOM VIRTUAL'.
Não precisei usar 'Redux' ou usar 'Use Context', pois é um pequeno aplicativo onde as informações podem ser gerenciadas com 'Hooks', como o 'UseEffect' para atualizar as informações e chamadas e funções perzonalizadas para lidar com eventos.
Para a conexão usei 'Fetch' com tratamento de erros, conforme sugerido pela documentação oficial do React.
Por ser um processo simples, pareceu uma boa ideia usar alertas personalizados com a biblioteca 'SweetAlert' para escolher quais informações ver e acessá-las de forma dinâmica.

Por fim, como as ligações são aleatórias e não se repetem, gostei da ideia de poder baixar as informações de cada usuário em uma planilha Excel, para isso utilizei a libraria 'React-export-excel'.

#### Os estilos foram fornecidos com css e responsivos com flex.
