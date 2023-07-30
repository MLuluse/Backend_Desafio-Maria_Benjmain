class ProductManager{
 #products
    constructor(){
        this.#products =[];
    }
    
    #generateID(){
        if (this.#products.length === 0) return 1
        return this.#products[this.#products.length-1].id + 1
    }

    addProduct (title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return 'Error: Todos los campos son obligatorios'
          }
          const found = this.#products.find(item => item.code === product.code)

          if (found) {
            return 'Error: Producto con el mismo codigo'  
          }

          const productToAdd = {id: this.#generateID(), title, description, price, thumbnail, code, stock}
          this.#products.push(productToAdd)
          return productToAdd
    }
    getProducts (){
        return this.#products
    }
    getProductsByID(){
        const product = this.#products.find((product)=>product.id ===id)
        if(!product){
            return 'producto no encontrado'
        }
        return product;
    }
}

const pm = new ProductManager()

pm. addProduct('las aguas bajan turbias',  'largometraje', 150, 'url', 111, 25 )

console.log(pm.getProducts())