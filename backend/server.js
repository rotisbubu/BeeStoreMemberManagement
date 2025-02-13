const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "storemember",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM MemberHeader";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("MySQL Query Error:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Sending Data:", data);
    return res.json(data);
  });
});

// CREATE DATA
app.post("/createMember", (req, res) => {
  const sql =
    "INSERT INTO MemberHeader (`CustomerName`, `CustomerPhone`, `CustomerEmail`) VALUES (?)";
  const values = [req.body.name, req.body.phone, req.body.email];
  db.query(sql, [values], (err, member) => {
    if (err) return res.json("Error");
    return res.json(member);
  });
});

// UPDATE DATA
app.get("/getMember/:id", (req, res) => {
  const sql = "SELECT * FROM MemberHeader WHERE CustomerID = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.status(500).json({ error: "Database error" });
    return res.json(data[0]);
  });
});

app.put("/updateMember/:id", (req, res) => {
  const sql =
    "UPDATE MemberHeader SET CustomerName = ?, CustomerPhone = ?, CustomerEmail = ? WHERE CustomerID = ?";
  const values = [req.body.name, req.body.phone, req.body.email, req.params.id];

  db.query(sql, values, (err, member) => {
    if (err) return res.json("Error");
    return res.json(member);
  });
});

// DELETE DATA
app.delete("/deleteMember/:id", (req, res) => {
  const sql = "DELETE FROM MemberHeader WHERE CustomerID = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error("Delete Error:", err);
      return res.status(500).json({ error: "Database delete error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Member not found" });
    }
    return res.json({ message: "Member deleted successfully" });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
