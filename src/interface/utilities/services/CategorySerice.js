import api from "../api";

export const Get_All_Category = async () => {
  const res = await api.get("/categories");
  return res.data;
};