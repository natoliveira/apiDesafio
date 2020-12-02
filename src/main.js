// Faremos as requisaÃ§Ãµes em uma API externa, cujo endpoint jÃ¡ estÃ¡ listado abaixo.
const API_URL = "https://dry-cliffs-94979.herokuapp.com/";

// Para isso, usaremos o "fetch", conforme vocÃª deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisiÃ§Ã£o funcione.
fetch(API_URL)
  .then(response => response.text())
  .then(result => {
    // Aqui, estamos pegando o resultado da requisiÃ§Ã£o e parseando em JSON, 
    // para que fique mais fÃ¡cil e amigÃ¡vel, tratarmos esses dados.
    const data = JSON.parse(result);

    // Como Ã© mesmo que percorremos um array? 'hm
    data.map(element => {
      // Desestruture seu objeto, trazendo os seguintes dados:
      // Foto, tipo, nome e preÃ§o da propriedade.
      const { name, photo, property_type, price } = element;

      // Pegue a linha do container onde serÃ£o exibidos os cards.
      row = document.querySelector('#row');

      // Agora, crie um elemento "div" com a class "col-md-4" do Bootstrap.
      div = document.createElement("div");
      div.classList = "col-md-4";

      // Boa! Agora, precisamos criar a "div" do card a ser exibido. Ao criar, atribua a class "card mb-4 box-shadow".
      card = document.createElement('div');
      card.classList = "card mb-4 box-shadow"

      // Humm... Agora que jÃ¡ temos o card, que tal comeÃ§armos a popular as informaÃ§Ãµes?
      // Crie um elemento "img" e, atribua a class como "card-img-top";
      // NÃ£o se esqueÃ§a que sua imagem precisa ser referenciada!
      img = document.createElement('img');
      img.classList = "card-img-top img";
      img.setAttribute("src", photo);

      // Legal! Agora, jÃ¡ podemos comeÃ§ar a construir o "corpo" do card. Bora lÃ¡!
      // Obs.: atribua a class "card-body" do Bootstrap, para que fique bonitÃ£o. :)
      cardBody = document.createElement('div');
      cardBody.classList = "card-body";

      // Beleza, corpo criado. Seguindo nossa estrutura, o prÃ³ximo elemento seria os textos, para exibir
      // o tipo da propriedade, nome e preÃ§o. Mas, antes, vamos criar um elemento "div" para manter isso
      // tudo organizado. VocÃª pode atribuir a class "card-text" do Bootstrap!
      cardText = document.createElement('div');
      cardText.classList = "card-text";

      // Uffa! Finalmente os elementos da proriedade!
      // Precisamos agora, listar o tipo, o nome e o preÃ§o.
      tipo = document.createElement("p");
      tipo.classList = "property-type";
      tipo.innerHTML = property_type;

      nome = document.createElement('p');
      nome.classList = "property-name";
      nome.innerHTML = name;

      preco = document.createElement('p');
      preco.classList = "property-price";
      preco.innerHTML = price;

      // AOBA! Temos agora, todos os elementos necessÃ¡rios para percorrer a resposta da API e,
      // anexar um ao outro para exibiÃ§Ã£o ao usuÃ¡rio. Para "anexar" os elementos, nÃ³s usaremos
      // o mÃ©todo "appendChild". Se liga na estrutura do componente, para que tudo seja exibido
      // corretamente:
      //
      // row
      //   div
      //     card
      //       image
      //       cardBody
      //         cardText
      //           propertyType
      //           propertyName
      //           propertyPrice

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(tipo);
      cardText.appendChild(nome);
      cardText.appendChild(preco);

      // [ ... ]
    });
  });