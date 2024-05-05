import api from "../api";

export const Create_Email_and_Password = async () => {
  const res = await api.post("/auth/login");
  return res.data;
};

export const Get_Profile = async () => {
  const res = await api.get("/auth/profile");
  return res.data;
};
