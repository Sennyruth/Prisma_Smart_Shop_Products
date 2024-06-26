import express from 'express'
import productsRouter from './routes/product.routes.js';
import {config} from 'dotenv'


config();

const app = express();


app.use(express.json())
app.use("/products",productsRouter)



app.listen(3005, () => {
    console.log("Server is running on port 3005");
});