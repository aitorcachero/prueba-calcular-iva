const precio = document.querySelector('#precio');
const iva = document.querySelector('#iva');
const total = document.querySelector('#total');
const impuestos = document.querySelector('#impuestos');
const btn = document.querySelector('#btn');

function sumarIva(precio, iva) {
  const total = (precio * iva) / 100 + precio;
  return `${total} €`;
}

function calcularIva(precio, iva) {
  const total = (precio * iva) / 100;
  return `${total} €`;
}

btn.addEventListener('click', () => {
  switch (true) {
    case precio.value === '' && iva.value === '':
      alert('Tienes que introducir el precio y el IVA del producto');
      break;
    case precio.value === '' && iva.value !== '':
      alert('Tienes que introducir el precio del producto');
      break;
    case precio.value !== '' && iva.value === '':
      alert('Tienes que introducir el IVA del producto');
      break;

    default:
      total.value = sumarIva(Number(precio.value), Number(iva.value));
      impuestos.value = calcularIva(Number(precio.value), Number(iva.value));
      break;
  }
});
