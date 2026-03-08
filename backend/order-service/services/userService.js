const axios = require("axios");

exports.getUser = async (userId) => {
  const response = await axios.get(
    `${process.env.USER_SERVICE_URL}/users/${userId}`
  );

  return response.data;
};