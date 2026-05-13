const productList = document.getElementById('product-list');

products.forEach(product => {

  productList.innerHTML += `

    <div class="product-card">

      <img src="${product.image}" alt="${product.name}">

      <h3>${product.name}</h3>

      <p>${product.description}</p>

      

      <a href="${product.whatsapp}" target="_blank">
        Pesan Sekarang
      </a>

    </div>

  `;

});