//Mock users
const USERS_DB = {
  ADMIN_USER_TOKEN: { name: 'John Admin', email: 'john@example.com', type: 'admin' },
  USER_TOKEN: { name: 'Joe User', email: 'joe@example.com', type: 'user' },
};

const authenticate = async (req, res, next) => {
  if (req.headers.authorization) {
    const auth = req.headers.authorization;
    const split = auth.split(' ');
    if (split.length === 2 && split[0].toLowerCase() === 'bearer') {
      const authId = split[1];

      const user = USERS_DB[authId];

      if (user) {
        req.app.set('user', user);
        return next();
      }
    }

    return res.status(403).json({ code: 'unauthorized' });
  }
};

export default authenticate;
