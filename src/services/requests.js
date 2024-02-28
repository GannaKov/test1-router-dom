import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com";
const instance = axios.create({ baseURL: BASEURL });

//https://jsonplaceholder.typicode.com/users
export async function getAllUsers() {
  const { data } = await instance.get("/users");

  return data;
}

//https://jsonplaceholder.typicode.com/users/1
export async function getUserById(id) {
  const { data } = await instance.get(`/users/${id}`);
  console.log("data in requests", data);
  return data;
}
