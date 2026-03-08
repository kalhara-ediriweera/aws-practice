// product service controller

exports.getAll = (req, res) => {
  res.json({ message: 'product-service getAll' });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `product-service getById ${id}` });
};

exports.create = (req, res) => {
  res.json({ message: 'product-service create', data: req.body });
};
