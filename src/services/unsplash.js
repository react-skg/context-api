// Authorization code
// 1acd648dc9eb0892551d8e7b51a36c747cc94cabfc16856fb3271331520710a8

import axios from "axios";

export default async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id:
        "dae9e10650adba332b3b71f9cecb9d4300497410c5365ba4d91f61df139b3f4a",
      query: term,
      count: 50
    }
  });

  return response.data.results;
};
