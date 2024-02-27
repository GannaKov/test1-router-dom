import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com/users";
const instance = axios.create({ baseURL: BASEURL });

//https://jsonplaceholder.typicode.com/users
export async function getAllUsers() {
  const { data } = await instance.get();
  console.log("data in requests", data);
  return data;
}
