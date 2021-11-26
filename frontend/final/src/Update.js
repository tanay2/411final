import React, { useState } from "react";
import Axios from 'axios';

const button_style = {
    fontSize: 20
}


function Update(props) {
    const [user, setUser] = useState('');
    const [incrment, setIncrement] = useState('');

    const [stockID, setStockID] = useState('');
    const [newprice, setNewprice] = useState('');

    const [newpassword, setNewpassword] = useState('');

    const [dat, setDat] = useState('');

    const [ret, setRet] = useState('');

    const incrementUser= () => {
        console.log(user);
        console.log(incrment);
        Axios.post('http://localhost:3002/api/incrementUser', {
            user: user,
            incrment: incrment
        }).then((response) => {
            setDat(response.data)
            setRet("user")
            alert('Success Update User Following')
        })
    };

    const updateStockPrice = () => {
        console.log(stockID);
        console.log(newprice);
        Axios.post('http://localhost:3002/api/updateStockPrice', {
            stockID: stockID,
            newprice: newprice
        }).then((response) => {
            setDat(response.data)
            setRet("stock")
            alert('Success Update Stock Current Price')
        })
    };

    const updatePassword = () => {
        console.log(user);
        console.log(newpassword);
        Axios.post('http://localhost:3002/api/updatePassword', {
            user: user,
            newpassword: newpassword
        }).then((response) => {
            setRet("user")
            setDat(response.data)
            alert('Success Update User Password')
        })
    };

    let atr = ""
    let data = ""
    if (ret === "user") {
        atr = "UserID | Name | Password | Email | NumberFollowing | Community"
        data = dat[0].UserID + " | " + dat[0].Name + " | " + dat[0].Password + " | " + dat[0].Email + " | " + dat[0].NumberFollowing + " | " +  dat[0].Community 
    } else if (ret == "stock") {
        atr = "StockID | CurrentPrice | Industry | SMA | EMA | RSI | Low | High | DailyChange | DailyRange | Sector";
        data = dat[0].StockID + " | " + dat[0].CurrentPrice + " | " + dat[0].Industry + " | " + dat[0].SMA + " | " + dat[0].EMA + " | " + dat[0].RSI + " | " + dat[0].Low + " | " + dat[0].High + " | " + dat[0].DailyChange + " | " + dat[0].DailyRange + " | " + dat[0].SectorID
    }

    return (<div style = {{backgroundColor: "#888888"}}>
        <p>Update Page</p>
        <button style={button_style} onClick = {(e) => {props.screenChange("Main")}}> Back</button>
        <div>
            <p>Increment User Following Count</p>
            <input placeholder = "UserID" id="useridin" type= "text" onChange = {(e) => setUser(e.target.value)}></input>
            <input placeholder = "Amount to Add" id="toaddin" type= "number" onChange = {(e) => setIncrement(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {incrementUser}>Submit</button>
        </div>
        <div>
            <p>Change Stock Price</p>
            <input placeholder = "StockID" id="stockidin" type= "text" onChange = {(e) => setStockID(e.target.value)}></input>
            <input placeholder = "New Price" id="toaddin" type= "text" onChange = {(e) => setNewprice(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {updateStockPrice}>Submit</button>
        </div>
        <div>
            <p>Change Password</p>
            <input placeholder = "UserID" id="useridin" type= "text" onChange = {(e) => setUser(e.target.value)}></input>
            <input placeholder = "Password" id="toaddin" type= "password" onChange = {(e) => setNewpassword(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {updatePassword}>Submit</button>
        </div>
        <div style = {ret === "" ? {visibility: "hidden"} : {color: "#6A0DAD"}}>
            <p>{atr}</p>
            <hr style = {{borderColor: "#6A0DAD"}}></hr>
            <p>{data}</p>
        </div>
    </div>);
}

export default Update;