const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "🚫 No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "nebula_secret");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "🚫 Token is not valid" });
  }
}

module.exports = authMiddleware;
