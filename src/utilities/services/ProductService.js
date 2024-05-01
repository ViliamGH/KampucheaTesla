import api from "../api";

export const Get_All_Product = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const Create_Product = async (product) => {
  const res = await api.post("/products", product);
  return res.data;
};

export const Get_Product_By_ID = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const Update_Product = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

export const Delete_Product = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};
