import axios from "axios";

const apiUrl = "http://localhost:4000/api";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = async (email, password) => {
  const loginApiUrl = apiUrl + "/user/login";
  try {
    const data = await axios.post(loginApiUrl, {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllItems = async (projection) => {
  const getAllItemapiUrl = apiUrl + "/item/getAllItems";
  try {
    const data = await axios.get(getAllItemapiUrl);
    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const getAllMenuItems = async () => {
  const getAllMenuItemapiUrl = apiUrl + "/menu/getAllMenuItems";
  try {
    const data = await axios.get(getAllMenuItemapiUrl);
    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const addItem = async (data) => {
  const addItemUrl = apiUrl + "/item/addItem";
  try {
    const res = await axios.post(addItemUrl, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const addMenuItem = async (data) => {
  const addMenuItemUrl = apiUrl + "/menu/addMenuItem";
  try {
    console.log("+++++++++++++++++++++++++++++", data);
    const res = await axios.post(addMenuItemUrl, data);
    return res;
  } catch (error) {
    return error;
  }
};
