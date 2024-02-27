const isAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.send("please login");
  }
};

module.exports = { isAuthenticated };
