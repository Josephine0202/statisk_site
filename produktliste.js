// Hent data fra API'et
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

// Funktion til at vise alle produkter
function showProducts(products) {
  products.forEach(showProduct);
}

// Funktion til at vise et enkelt produkt
function showProduct(product) {
  const template = document.querySelector("#template").content;
  const copy = template.cloneNode(true);

  // Opdater produktinformationerne
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = `${product.brandname} ${product.articletype}`;
  copy.querySelector(".price").textContent = "DKK " + product.price;

  // Opdater billedet med det korrekte produktbillede
  copy.querySelector(".produkt_billeder").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".produkt_billeder").alt = product.productdisplayname;

  // Hvis produktet er udsolgt, tilføj en "soldOut" klasse
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  // Indsæt produktet i containeren
  document.querySelector(".liste").appendChild(copy);
}
