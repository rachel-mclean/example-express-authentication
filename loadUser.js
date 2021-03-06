let User = require('./models/User');

async function loadUser(req, res, next) {
  let userId = req.session.userId;

  if (userId) {
    req.user = await User.query().findById(userId);
  }

  next();
}

module.exports = loadUser;
