import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8001",
});

export async function getProducts() {
  const { data } = await client("/product");
  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await client(`/product/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "post",
    url: "/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
