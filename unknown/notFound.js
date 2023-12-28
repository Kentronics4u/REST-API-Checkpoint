const notFound = (req, res) =>
  res.status(404).json({
    message: `Sorry, "${req.url}" does not exist.  Please, ensure that the address is correct and try again`
  });

module.exports = notFound;
