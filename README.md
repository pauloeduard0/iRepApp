<h1 align="center"> iRep - Mobile 🏠📱 </h1>

## Tópicos

- [O Projeto](#o-projeto-)
- [Equipe](#equipe)
- [Tecnologias](#tecnologias-)
- [Instalação](#instalação-)
   - [React Native, NodeJS e Expo](#react-native-nodejs-expo)
   - [Android Studio](#android-studio)
   - [MySQL](#mysql)
- [Executando Simulador](#executando-simulador-)
- [Cypress](#cypress)
- [Screenshots](#screenshots-)


## O projeto 📈
O projeto é um aplicativo onde estudantes universitários podem encontrar repúblicas para morar, da mesma forma que as repúblicas podem encontrar possíveis futuros moradores.<br>
O usuário poderá optar por criar um perfil pessoal de estudante ou um perfil para sua república (ou ambos). <br>
Na tela de navegação as repúblicas terão acesso aos perfis dos estudantes cadastrados no app e os estudantes terão acesso aos perfis das repúblicas. <br>
Aplicação desenvolvida nas linguagens: <a href="https://www.javascript.com/">JavaScript</a>, <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a> e <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a>.

## Equipe
* 👦 <a href="https://github.com/pauloeduard0">Paulo Eduardo</a>
* 👦 <a href="https://github.com/pedro-abritta">Pedro Abritta</a>

## Tecnologias 🛠 
- [Visual Studio (link para download)](https://visualstudio.microsoft.com/pt-br/downloads/) foi utilizado para implementação dos códigos 
- [ReactNative](https://reactnative.dev/) utilizado para desenvolvimento mobile do front-end
- [NodeJS (link para download)](https://nodejs.org/en/) utilizado para back-end
- [MySQL (link para download)](https://www.mysql.com/downloads/) usado para armazenar os dados
- [Android Studio (link para download)](https://developer.android.com/studio?gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsBHMwaRatvdLRI6d0-MyjHkxE-ta5HYnAitKmMpLSySTBc-RaIvhx4aAqyzEALw_wcB&gclsrc=aw.ds#downloads) uzado para emular
- [Expo](https://expo.dev/) Também utilizado para emular

## Instalação ⚙💻

### React Native NodeJS Expo
"Para trabalhar com o React Native, você precisará compreender os fundamentos do JavaScript." Além de precisar instalar algumas dependências.
Antes de tudo, abra um console com permissão de administrador no seu computador.
Após aberto, siga os seguintes passos:
- 1º IMPORTANTE‼️ Para baixar todas as dependências contidas no projeto e rodá-lo (pode demorar um pouco). Irá instalar também o Cypress: 
```
npm install
```
- 2º Instalando o <a href="https://nodejs.org/en/">NODEJS</a>. Após a instalação, digite o código no prompt de comandos para verificar a instalação:
```
node -v
```
- 3º Instalando o <a href="https://docs.expo.dev/">expo</a>:
```
npm install --global expo-cli
```
- 4º Criando um novo projeto:
```
expo init my-project
```
- 5º Instalando NODE (caso não tenha instalado pelo primeiro passo), Python2 e JDK</a>:
```
choco install -y nodejs.install openjdk8
```
### Android Studio
Página de instalação <a href="https://developer.android.com/studio?gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsBHMwaRatvdLRI6d0-MyjHkxE-ta5HYnAitKmMpLSySTBc-RaIvhx4aAqyzEALw_wcB&gclsrc=aw.ds#downloads">aqui</a><br>
É necessário fazer algumas configurações também:
- 1º: vá em configurações > SDK manager<br>
![image](https://user-images.githubusercontent.com/73140691/145121846-647c0e5c-fd41-44f1-99be-d94a84c0592a.png)
- 2º: Em "Android JDK > SDK Platform marque uma das opções mais recentes (clique em apply):
![image](https://user-images.githubusercontent.com/73140691/145121988-521baa81-942a-4b8a-a87d-f1f509dafb8b.png)
- 3º: Selecione as opções e clique em apply: <br>
![image](https://user-images.githubusercontent.com/73140691/145122138-24c50c46-c86f-440a-ac1b-867529df4695.png)
- 4º: Em seguida volte na tela inicial do AS e vá em configurações > AVG manager e crie um novo emulador:<br>Clique em next, dê um nome ao emulador  e depois em finish:
![image](https://user-images.githubusercontent.com/73140691/145122480-3b326d9d-9958-44c0-8f77-0d04f5251dbc.png)
- 5º: navegue pelo prompt até o diretório do projeto e digite o código abaixo que irá abrir uma aba no seu navegador padrão: 
```
expo start
```
### MySQL
Para a instação do nosso bando de dados não há linhas de código, basta apenas seguir um tutorial simples <a href="https://www.youtube.com/watch?v=zpssr3u1EO8&t=320s&ab_channel=HostingerBrasil">aqui</a>

## Executando simulador 🤖
Para evitar muito processamento da máquina, é possível executar a simulação no próprio navegador: <br>
- 1º: abra o terminal e digite
```
expo start --web
```

## Cypress
<a href="https://www.cypress.io/">Cypress</a> é uma ferramenta poderosa de última geração desenvolvida especialmente para engenheiros de controle de qualidade (analistas QA) e desenvolvedores, que podem usá-la para os testes unitários<br>
Para executá-lo basta abrir o terminal onde se encontra o projeto e digitar:
```
npx cypress open
```

## Screenshots 📷
### Web:
- Tela de login: <br>![image](https://user-images.githubusercontent.com/73140691/145647525-898189a9-af2c-453a-81c0-2b44a9b62614.png)
- Tela de cadastro de aluno: <br>![image](https://user-images.githubusercontent.com/73140691/145647562-8b60b506-e1c2-463a-9fb5-ff77d1008632.png)
- Tela de cadastro de república: <br>![image](https://user-images.githubusercontent.com/73140691/145647629-c49db64d-53e8-4ebf-af6c-475549e89f83.png)
- Tela Home: <br> ![image](https://user-images.githubusercontent.com/73140691/145647675-f666bf1c-3299-4d65-8f08-42accc7b1505.png)

### Mobile:
- Tela de login: <br>![image](https://user-images.githubusercontent.com/73140691/145650896-d8364621-7e3c-47a3-a187-4a345a3f5af3.png)
- Tela Home: <br> ![image](https://user-images.githubusercontent.com/73140691/145650932-a411741d-b873-4796-90c0-90b829fdd49b.png)
- Tela república: <br>![image](https://user-images.githubusercontent.com/73140691/145650956-12546a0f-5728-468f-b513-b2a9d267fbff.png)

<h1 align="center"> OBRIGADO </h1>
