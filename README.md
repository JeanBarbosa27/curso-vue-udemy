# Stock Trader

## Escopo do projeto solicitado no curso
A ideia inicial é um painel onde o usuário tem um saldo inicial de R$ 10.000 e pode **simular a compra e venda de ações**. A ideia é que de acordo com as flutuações simuladas que forem ocorrendo das ações poderá vender ou comprar mais até esgotar o saldo. A aplicação deverá:
  - usar o vuetify para estilizar o projeto.
  - trabalhar com rotas considerando uma animação na mudança das rotas. Na aula 296 tem o exemplo da animação que é como se o conteúdo da tela fosse pra cima ao sair da rota e viesse pra baixo ao entrar na tela;
  - permitir carregamento e armazenamento de dados usando o Firebase;
  - à medida que as compras forem sendo feitas, o saldo do usuário que fica no header deve ir diminuindo automaticamente
  - na rota de portifólio o formulário deve validar a quantidade de ações que o usuário pode selecionar para vender, mostrando "insuficiente" no botão se o usuário selecionar mais ações que possui, inabilitando o botão.
  - flutuar as ações de forma randômica para cima ou para baixo, quando o usuário clicar em "finalizar o dia".

### Trabalhar com as seguintes rotas
As rotas apresentadas foram: 
  - início:
    Terá apenas duas dicas, uma informando que o usuário pode salvar e carregar os dados e outra informando que pode clicar em finalizar o dia, para iniciar um novo dia. Outra informação que terá na tela de início será referente ao valor total do saldo do usuário.
  - portifólio:
    Terá a lista de ações que foram compradas, mostrando no card o valor atual da ação, quantas o usuário tem e com um formulário que vai permitir o usuário selecionar quantas quer "vender" daquela ação.
  - ações:
    Terá a lista de ações que o usuário poderá "comprar", de modo que cada card terá um formulário onde o usuário poderá selecionar a quantidade de ações que quer comprar.

### Ideias para customizar o projeto do meu jeito
  - Incluir min="0" nos inputs dos cards de compra e venda, pois não faz sentido selecionar um valor negativo.
  - Validar o formulário de compra, de modo que se o usuário selecionar mais ações do que pode comprar, de acordo com o saldo, fazer o mesmo tipo de validação exigida para a quantidade de itens em venda.
  - Resposta visual de loading para salvar e carregar dados, sendo que deverá mostrar que a ação foi ou não feita com sucesso.
  - Procurar por alguma API pública que retorne uma lista de empresas e o valor das ações delas.
  - Mostrar de alguma forma quanto teve de lucro ou prejuízo, quando vender a ação.
  - Em vez do usuário ter que ficar carregando o quanto preencheu, se ele pudesse realizar um cadastro inicialmente e posteriormente voltasse com um login, de modo que os dados sempre serão carregados automaticamente, com os dados salvos para aquele usuário. Porém ainda assim teria a possibilidade de carregar os dados durante as ações, se quiser desfazer o que fez, claro com algum aviso antes de realmente sobrescrever os dados.
  - Rota de usuário com sub rota de perfil para visualizar e editar os dados de cadastro
  - Rota de usuário com sub rota de configurações, caso a lista de configurações fique grande demais para caber na página do perfil dele.
  - Rota de usuário com sub rota do histórico das ações, como se fosse um log de tudo que ele fez
  - Rota de usuário com sub rota pra gráficos baseado no histórico
  - Ideias para configurações pelo usuário:
    - Exibir o quanto do saldo irá alterar, enquanto seleciona a quantidade para compra ou venda da ação;
    - Salvar automaticamente a cada compra ou venda de ações (pode salvar de fato só quando for sair da rota após ter comprado ou vendido, a fim de reduzir as chamadas ao Firebase);
    - Filtrar o ramo de negócios das empresas que quer ver na listas de ações para comprar.

---

## Project setup
`yarn install` ou `npm install`

### Compiles and hot-reloads for development
`yarn serve` ou `npm run serve`

### Compiles and minifies for production
`yarn build` ou `npm run build`

### Run your tests
`yarn test` ou `npm run test`

### Lints and fixes files
`yarn lint` ou `npm run lint`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
