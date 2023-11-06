const pool = require("../db");

const getUserByEmail = async (req, res) => {
    const query = "SELECT * FROM todo_listData WHERE user_email = $1";
    const { userEmail } = req.params;
    
    try {
        const data = await pool.query(query, [userEmail]);
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err.message);
        res.status(404).json({
            result: "failed",
            message: "No user found by this email address",
        });
    }
};


module.exports = getUserByEmail;
