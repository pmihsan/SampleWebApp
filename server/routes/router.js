const express = require("express");
const router = express.Router();
const mysql = require("promise-mysql");
var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/json' }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let pool;
const connectDB = async () => {
    pool = await mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "practice_db"
    });
}
connectDB();

router.post("/form", urlencodedParser, async(req, res) => {
    const inputs = req.body;
    // console.log(inputs);
    try{
        const connection = await pool.getConnection();
        if(!connection){
            console.log("Database Connection failed!...");
        }
        const result = await connection.query(`INSERT INTO user values('${inputs.UserName}','${inputs.Password}')`);
        // console.log(result);
        if(!result || result.length == 0){
            connection.release();
            console.log("Insertion Failed");
        }
        else{
            res.status(200).json({msg: "Successful"});
            console.log("Inserted Successfully");
        }
        connection.release();
    }
    catch(err){
        console.log("Error msg: ",err);
    }
});

router.get("/form", async(req, res) => {
    console.log("From Server");
    res.send("hello");
});

module.exports= router;