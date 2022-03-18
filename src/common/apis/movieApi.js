import axios from "axios";

export default axios.create({
    baseURL:"https://cors-everywhere.herokuapp.com/http://www.omdbapi.com",
})