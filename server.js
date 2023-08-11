import express from 'express'
import ProductManager from './src/productManager.js'


const app = express()
const productManager = new ProductManager('./products.json') // se insatncia para poder usarlo con el metodo getProducts


app.get('/', (request, response) => {
    response.send('<h1>Raiz de tienda</h1>')
})

  //lee todos los productos del archivo -----> es async porque mi metodo es async
app.get('/products', async (req, res) => {
    const result =await productManager.getProducts()
    const limit = req.query.limit
    if(typeof result =='string'){
        //const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({error:result.slice(6)})
    }
    res.status(200).json({payload: result.slice(0,limit)})
})


    //lee los archivos por id
app.get('/products/:id', async (req, res) =>{
    const id = parseInt(req.params.id)
    const result = await productManager.getProductById(id)
    if(typeof result == 'string'){
        const error = result.split(' ')
        return res.status(parseInt(error[0].slice(1,4))).json({error: result.slice(6)})
    }
    res.status(200).json({payload: result})

})

app.listen(8080, ()=> console.log('Server up!'))
