const axios = require("axios");

exports.sendNotification = async (data) => {
  await axios.post(
    `${process.env.NOTIFICATION_SERVICE_URL}/notify`,
    data
  );
};