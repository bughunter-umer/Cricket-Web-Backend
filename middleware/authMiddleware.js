import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ error: "Access denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ error: "Invalid token" });
      req.user = decoded; // contains id, email, role
      next();
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Role check middleware
export const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: `Access forbidden: ${role} only` });
    }
    next();
  };
};


