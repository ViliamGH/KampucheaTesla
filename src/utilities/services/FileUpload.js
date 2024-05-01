import api from "../api";

export const Upload_File = async (file) => {
  const res = await api.post("/files/upload", file, {});
  return res.data;
};
