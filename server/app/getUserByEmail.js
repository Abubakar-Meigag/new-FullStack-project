const pool = require("../db");

const getUserByEmail = async (req, res) => {
    const query = "select * from todo_listData WHERE user_email= $1";
    // const user_email = "beko.m@beko.com";
    try {
        const data = await pool.query(query, [user_email]);
        res.status(200).json(data.rows);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            result: "failed",
            message: "No user found by this email address",
        });

        pool.end();
    }
};

module.exports = getUserByEmail;
