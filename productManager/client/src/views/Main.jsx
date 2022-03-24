import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "../components/ProductForm";
import PersonList from "../components/ProductList";

const Main = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ProductForm />
      <hr />
      {<ProductList product={product} />}
    </div>
  );
};

export default Main;
