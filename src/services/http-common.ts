import axios from "axios"

export default axios.create({
  //api home endpoint
  baseURL: "http://newsapi.org/v2/everything",
})