import axios from "axios";
import API_URL from "../Constants";

export async function getBlogs(url) {
  if (!url) {
    url = API_URL + "blogs";
  }
  const { data } = await axios.get(url);
  return data;
}

export async function getEntries(url) {
  if (!url) {
    url = API_URL + "entries";
  }
  const { data } = await axios.get(url);
  return data;
}
