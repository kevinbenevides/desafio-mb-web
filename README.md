# 📌 Projeto Mercado Bitcoin - Registro

Este projeto consiste em um **frontend Vue.js** sendo renderizado por um servidor **Node.js (Express)** e consumindo uma **API Node.js (Express)**.  

---

## 🚀 Tecnologias Utilizadas
- **Frontend:** Vue.js 3 + Vite
- **Backend:** Node.js + Express
- **Comunicação:** Fetch API para requisições HTTP
- **Validações:** Implementadas no frontend

---

## ⚙ Configurando o projeto/servidor
Vamos configurar o projeto/servidor? Basta seguir o passo a passo descrito a baixo: 
- Faça um clone do projeto em sua máquina, após realiza-lo, abra a pasta do projeto;
- Em seguida abra a pasta **backend** em sua IDE(Por exemplo: Visual Studio Code);
- No terminal da IDE, rode o comando: `npm install`;
- Após terminar de executar, insira o comando `node server.js` ou `npm run dev` (fica a seu critério).
- Projeto configurado, e servidor rodando, agora vamos acessar o projeto:
  - Acesse a rota configurada: http://localhost:3001;
  - Deve aparecer um texto informando qual o link para a abertura do projeto;
  - Em todo caso, se não conseguir por lá, acesse a rota http://localhost:3001/registration.
- Pronto, agora é só utilizar o sistema!

![image](https://github.com/user-attachments/assets/5b7b2352-b217-4b6b-a7ca-b1bf175d93b4)

## ⚙ Configurando o projeto Frontend de forma independente (Opcional)
Como o servidor renderiza o front automaticamente, não é necessário rodar especificamente o seu projeto frontend, mas para fins do desafio, vou explicar o que fazer para rodar o projeto front de forma independente:
- O processo é extremamente parecido com o utilizado no back;
- Abra a pasta **frontend** em sua IDE;
- No terminal da IDE, rode o comando: `npm install`;
- Após terminar de executar, insira o comando `npm run dev`;
- Agora o front está configurado, e rodando, para acessa-lo:
  - Acesse a rota exibida no terminal, provavelmente deve ser a: http://localhost:5173;
- E pronto, front rodando de forma independente!

--- 

## 🚀 Postman (Opcional)
Caso queira testar as apis, deixei todas as requisições criadas dentro da pasta **Collection Postman**, com uma coleção de endpoints dentro.
- Para acessa-las, basta abrir o postman, selecionar ou criar um workspace de sua escolha, e importar no botãozinho de **Import**, ao lado do nome do workspace e do botão New.
- Agora é só testar as apis criadas, deixei alguns exemplos de retornos da api de envio de registro.
- PS: Lembre-se, por se tratar de uma api local/mockada, é necessário estar rodando o servidor em sua máquina conforme explicado a cima.
![image](https://github.com/user-attachments/assets/fe6dd3e5-dc33-4e5c-a6e4-ea5924b74ccd)

## 🎁 Features extras
Tomei a liberdade de adicionar algumas features extras, espero que não seja um problema.
- Adicionei um `title` para a página, e um `favicon` do Mercado Bitcoin que eu encontrei no site da empresa.
- Adicionei máscara a todos os inputs que eram cabíveis de utilizar, com uma lib famosa no Vue 3, a `Maska`.
- Adicionado um modal para exibir os retornos da Api, ele renderiza tanto as mensagens de erro, quanto a de sucesso.
- E por fim, não é tanto um extra, mas sim uma melhoria baseado no requisito do desafio, mas adicionei um checkbox no final do fluxo (Etapa 4), onde se marcado, ele retornará uma mensagem de erro no servidor (500), para conseguir fazer uma validação visual no front. Como não existe a possibilidade de enviar vazio os campos pelo front, graças as validações feitas em cada input, não será possível visualizar a mensagem de erro Bad Request (400), mas no Postman é possível fazer esse teste.

## 🔥 Considerações finais
- Foi uma incrível experiência concluir esse desafio, sinto que me dediquei ao máximo na conclusão do mesmo, focando bastante na experiência do usuário.
- Duas curiosidades: Foi a minha primeira experiência com Node.js, então praticamente um exercício de ensino, o que foi extremamente satisfatório ver a Api que eu construi funcionando. E o outro ponto é que eu não utilizava o Vue a mais de 3 anos, então relembrar e buscar conhecer mais coisas sobre o framework foi de extrema importância pra mim, como o nome já diz, é um desafio, então não pude não leva-lo a sério, e me esforçar ao máximo.
- Desde já agradeço a compreensão, e ótima revisão!
  

