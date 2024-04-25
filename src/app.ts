import express, {Application, json} from "express";
import { getProduct, postProduct } from "./logics";

const app: Application = express();
app.use(json());

app.get("/products", getProduct);
app.post("/products", postProduct);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})