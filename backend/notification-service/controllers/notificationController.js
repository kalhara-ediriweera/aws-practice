// notification service controller

exports.getAll = (req, res) => {
  res.json({ message: 'notification-service getAll' });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `notification-service getById ${id}` });
};

exports.create = (req, res) => {
  res.json({ message: 'notification-service create', data: req.body });
};
