// middleware/authMiddleware.js
module.exports = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Brak autoryzacji' });
    }
  
    next();
  };
  