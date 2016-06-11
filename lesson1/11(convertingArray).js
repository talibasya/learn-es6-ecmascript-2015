//___________________________________
const products = document.querySelectorAll('.product');
console.log(products); // type NodeList - li



//___________________________________
const products = Array.from(document.querySelectorAll('.product'));
products
	.filter(product => parseFloat(product.innerHTML) < 10)
	.forEach(product => product.style.color = 'red');

console.log(products); // type NodeList - li

