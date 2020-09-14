import axios from "axios";

export default{
    getSaved:() => axios.get("/api/books"),
    saveBook:(data) => axios.post("/api/books", data),
    deleteBook: (id) => axios.delete("/api/books/"+id),
    googleBooks: (queryString) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${queryString}`)
}