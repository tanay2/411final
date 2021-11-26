const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fs = require('fs')

function getNextUserID() {
    var content  = fs.readFileSync("data/nextFreeUser", "utf-8");
    console.log(content)
    i = parseInt(content) + 1
    fs.writeFileSync("data/nextFreeUser", i.toString())
    return "U" + content;
}

function getNextCongressmenID() {
    var content  = fs.readFileSync("data/nextFreeCong", "utf-8");
    console.log(content)
    i = parseInt(content) + 1
    fs.writeFileSync("data/nextFreeCong", i.toString())
    return "C" + content;
}

var db = mysql.createConnection({
    host:'34.134.22.38',
    user: 'root',
    password:'bob12',
    database:'data',
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/', (require, response) => {
// const sqlInsert = "INSERT INTO `movie_reviews` (`movieName`,`movieReview`) VALUES ('testMovie', 'cool movie!');";
// db.query(sqlInsert, (err, result) => {
// response.send("Hello world??");
// })
// })
app.post("/api/insertUser", (require, response) => {
    console.log(response)
    const name = require.body.name;
    const email = require.body.email;
    const password = require.body.password;
    const userID = getNextUserID();
    console.log('UserID: %s', userID);
    const sqlInsert = "INSERT INTO User (UserID, Name,Password,Email,NumberFollowing,Community) VALUES (?,?,?,?,0,'Com1');";
    db.query(sqlInsert, [userID, name, email, password, ], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(userID)
    })
    const sqlUpdate = "UPDATE Community SET MemberCount = MemberCount + 1 WHERE CommunityID = 'Com1';"
    db.query(sqlUpdate, [], (err, result) => {
        if (err) throw err; 
    })
}); 
app.post("/api/insertCman", (require, response) => {
    const name = require.body.cname;
    const state = require.body.state;
    const party = require.body.party;
    const CongressmenID = getNextCongressmenID();
    console.log('CongressmanID: %s',CongressmenID);
    const sqlInsert = "INSERT INTO Congressmen (CongressmenID,Name,State,Party,MonthlyTrades) VALUES (?,?,?,?,0);";
    db.query(sqlInsert, [CongressmenID, name, state, party], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(CongressmenID)
    })
});  
 
app.post("/api/insertStock", (require, response) => {
    const StockID = require.body.stockID;
    const curprice = require.body.curprice;
    const Industry = require.body.Industry;
    const sma = require.body.sma;
    const ema= require.body.ema;
    const rsi= require.body.rsi;
    const low= require.body.low;
    const high= require.body.high; 
    const dchange= require.body.dchange;
    const drange= require.body.drange; 
    const sector= require.body.sector;
    
    const sqlInsert = "INSERT INTO Stock (StockID,CurrentPrice,Industry,SMA,EMA, RSI, Low, High, DailyChange, DailyRange, SectorID) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
    db.query(sqlInsert, [StockID, curprice, Industry, sma,ema, rsi, low, high, dchange,drange, sector], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send("");
    })
}); 

app.post("/api/deleteCman", (require, response) =>{
    const cid = require.body.cid; 
    const sqlSelect = "SELECT * FROM Congressmen WHERE CongressmenID = ?"
    db.query(sqlSelect, [cid], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
    const sqlDelete = "DELETE FROM Congressmen WHERE CongressmenID = ?" 
    db.query(sqlDelete, [cid], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })
});
 
app.post("/api/deleteStock", (require, response) =>{
    const stockID = require.body.stockID; 
    const sqlSelect = "SELECT * FROM Stock WHERE StockID = ?"
    db.query(sqlSelect, [stockID], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
    const sqlDelete = "DELETE FROM Stock WHERE StockID = ?" 
    db.query(sqlDelete, [stockID], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })
});  

app.post("/api/deleteUser", (require, response) =>{
    const user_id = require.body.user_id; 
    const sqlSelect = "SELECT * FROM User WHERE UserID = ?"
    db.query(sqlSelect, [user_id], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
    const sqlDelete = "DELETE FROM User WHERE UserID = ?" 
    db.query(sqlDelete, [user_id], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })
});  

app.post("/api/incrementUser", (require, response) =>{
    const user = require.body.user;
    
    const incrment = require.body.incrment;
    const sqlUpdate = "Update User SET NumberFollowing = NumberFollowing+? WHERE UserID = ?" 
    db.query(sqlUpdate, [incrment, user], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })

    const sqlSelect = "SELECT * FROM User WHERE UserID = ?"
    db.query(sqlSelect, [user], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/updateStockPrice", (require, response) =>{
    const stockID = require.body.stockID;  
    const newprice = require.body.newprice;
    
    const sqlUpdate = "Update Stock SET CurrentPrice = ? WHERE StockID = ?" 
    db.query(sqlUpdate, [newprice, stockID], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })

    const sqlSelect = "SELECT * FROM Stock WHERE StockID = ?"
    db.query(sqlSelect, [stockID], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
});  

app.post("/api/updatePassword", (require, response) =>{
    const user = require.body.user;  
    const newpassword = require.body.newpassword;
    
    const sqlUpdate = "Update User SET Password = ? WHERE UserID = ?" 
    db.query(sqlUpdate, [newpassword, user], (err, result) => {
        if (err) throw err; 
        console.log(result);
    })

    const sqlSelect = "SELECT * FROM User WHERE UserID = ?"
    db.query(sqlSelect, [user], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
});

app.post("/api/advancedQuery_1", (require, response) =>{ 
    const sqlSelect = "SELECT stk.stockId, AVG(CurrentPrice) as avg_cp FROM Stock stk JOIN Sector sec ON stk.SectorId = sec.SectorId WHERE sec.MarketCap >= 30000000000  GROUP BY stk.stockId ORDER BY avg_cp DESC LIMIT 15;"
    db.query(sqlSelect, [], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/advancedQuery_2", (require, response) =>{ 
    const sqlSelect = "SELECT sec.SectorId, COUNT(CommunityID) as CommunityCount FROM Stock stk JOIN Sector sec ON (stk.SectorId = sec.SectorId) JOIN Community  c ON (stk.StockId = c.MostCommonStock) GROUP BY sec.SectorID ORDER BY CommunityCount DESC LIMIT 15;"
    db.query(sqlSelect, [], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
});

app.post("/api/sendKeywordCOMID", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Community WHERE CommunityID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordUID", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM User WHERE UserID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordUNAME", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM User WHERE Name = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordCID", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Congressmen WHERE CongressmenID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordCNAME", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Congressmen WHERE Name = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordSECID", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Sector WHERE SectorID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordSTOCKID", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Stock WHERE StockID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordWSTOCK", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Watchlist WHERE StockID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordWUSER", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Watchlist WHERE UserID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordRSTOCK", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Recommendation WHERE StockID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.post("/api/sendKeywordRUSER", (require, response) =>{ 
    const keyword = require.body.keyword;
    const select = "SELECT * FROM Recommendation WHERE CongressmenID = ? LIMIT 5;";
    db.query(select, [keyword], (err, result) => {
        if (err) throw err; 
        console.log(result);
        response.send(result)
    })
}); 

app.listen(3002, () => {
    console.log("running on port 3002");
})