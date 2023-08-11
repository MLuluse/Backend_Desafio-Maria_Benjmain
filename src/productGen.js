import ProductManager from './productManager.js'
const productManager = new ProductManager('./products.json'); // Asegúrate de proporcionar la ruta correcta al archivo JSON


let producto1 = {
    title: 'Producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
}
let producto2 ={
    title: 'producto dos',
    description:'esto es el producto dos',
    price: 350,
    thumbnail: 'sin imagen2',
    code: 'ab54',
    stock: 10,

}
let producto3 = {
    title: 'producto tres',
    description:'esto es el producto tres',
    price: 75,
    thumbnail: 'sin imagen3',
    code: 'ab45',
    stock: 75,
}
let producto4 = {
    title: 'producto cuatro',
    description:'esto es el producto cuatro',
    price: 785,
    thumbnail: 'sin imagen4',
    code: 'camicaze',
    stock: 10,
}



const test = async () => {
 
    console.log('\n---TEST---')
    console.log(await productManager.addProduct(producto1))

    console.log('\n---TEST---')
    console.log(await productManager.addProduct(producto2))

    console.log('\n---TEST---')
    console.log(await productManager.addProduct(producto3))

    console.log('\n---TEST---')
    console.log(await productManager.addProduct(producto4))
}
  


test()


const producto5 = {
    title: 'Nuevo producto 1',
    description: 'Descripción del nuevo producto 1',
    price: 150,
    thumbnail: 'imagen1.jpg',
    code: 'abc456',
    stock: 20,
};

const producto6 = {
    title: 'Nuevo producto 2',
    description: 'Descripción del nuevo producto 2',
    price: 250,
    thumbnail: 'imagen2.jpg',
    code: 'xyz789',
    stock: 15,
};

const addProducts = async () => {
    const addedProduct1 = await productManager.addProduct(producto1);
    console.log('Producto agregado:', addedProduct1);

    const addedProduct2 = await productManager.addProduct(producto2);
    console.log('Producto agregado:', addedProduct2);
};

addProducts();

