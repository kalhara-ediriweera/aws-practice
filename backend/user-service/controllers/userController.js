// user service controller

exports.getAll = (req, res) => {
  res.json({ message: 'user-service getAll' });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `user-service getById ${id}` });
};

exports.create = (req, res) => {
  res.json({ message: 'user-service create', data: req.body });
};
