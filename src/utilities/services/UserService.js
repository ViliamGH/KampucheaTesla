import api from "../api";

export const Get_All_User = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const Get_All_User_By_Id = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const Create_New_User = async (user) => {
  const res = await api.post("/users", user);
  return res.data;
};

export const Update_User = async (id, user) => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
};

export const Delete_User = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};