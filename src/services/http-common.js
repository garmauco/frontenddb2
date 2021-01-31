import axios from "axios";

//creamos la ruta base de nuestro api que conectara con el backend
export default axios.create({
  baseURL: "http://localhost:3002/api",
  headers: {
    "Content-type": "application/json"
  }
});