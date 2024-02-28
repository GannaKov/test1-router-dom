import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com";
const instance = axios.create({ baseURL: BASEURL });

//https://jsonplaceholder.typicode.com/users
export async function getAllUsers() {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

//https://jsonplaceholder.typicode.com/users/1
export async function getUserById(id) {
  try {
    const { data } = await instance.get(`/users/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
