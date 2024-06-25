import express from 'express'
import productsRouter from './routes/product.routes.js';

const app = express();


app.use("/products",productsRouter)
app.use(express.json())
app.listen(3005, () => {
    console.log("Server is running on port 3005");
});