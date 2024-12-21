import axios from "axios";

// const API_URL = "http://localhost:5000/api/users";
const API_URL = "https://discountsonservices.onrender.com/users";

axios.defaults.baseURL = API_URL;

export const register = async ({ name, email, password }) => {
  try {
    const res = await axios.post("/register", { name, email, password });

    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post("/login", { email, password });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const logout = async ({ id }) => {
  try {
    const res = await axios.post("/logout", { id });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const currentUser = async ({ id }) => {
  try {
    const res = await axios.get("/current", { id });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
