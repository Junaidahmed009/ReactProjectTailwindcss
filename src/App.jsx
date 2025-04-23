import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Analytics } from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
      </div>
    </>
  );
}

export default App;
//-----------front end
// const [products, setproducts] = useState([]);
// const [name, setname] = useState("");
// const [price, setprice] = useState("");

// const fetchProducts = async () => {
//   try {
//     const result = await fetch("http://localhost:5000/api/products");
//     const data = await result.json();
//     setproducts(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   fetchProducts();
// }, []);

// const handleFormdata = async (e) => {
//   e.preventDefault();

//   const newProduct = {
//     name,
//     price: Number(price),
//   };
//   try {
//     const res = await fetch("http://localhost:5000/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newProduct),
//     });
//     const savedProduct = await res.json();
//     setproducts((prev) => [...prev, savedProduct]);
//     setname("");
//     setprice("");
//   } catch (error) {
//     console.error(error);
//   }
// };

// return
{
  /* <div>
        <h2>Add Products</h2>
        <form onSubmit={handleFormdata}>
          <input
            type="text"
            placeholder="product name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
          />
        </form>

        <h2>Product list</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} - ${p.price}
            </li>
          ))}
        </ul>
      </div> */
}
//--------------------

// //Backend
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Product = require("./models/Product");
// const fs = require("fs");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/Products", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Databasemongo connected"))
//   .catch((err) => console.log("Databasemongo error connection", err));

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     console.error("getting products error from db", error);
//     res.status(500).send("Error fetching products");
//   }
// });

// app.post("/api/products", async (req, res) => {
//   const { name, price } = req.body;
//   const newProduct = new Product({ name, price });

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("error while adding products", error);
//     res.status(500).send("Error adding product");
//   }
// });

// app.listen(PORT, () => console.log(`Server is  port ${PORT}`));
