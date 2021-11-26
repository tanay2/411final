
import React, { useState } from "react";
import Axios from 'axios';

const button_style = {
    fontSize: 20
}

function Delete(props) {
    const [user_id, setUserID] = useState('');
    const [cid, setCid] = useState('');
    const [stockID, setStockID] = useState('');

    const [dat, setDat] = useState('');

    const [ret, setRet] = useState('');

    const deleteUser = () => {
        console.log(user_id);
        Axios.post('http://localhost:3002/api/deleteUser', {
            user_id: user_id,
        }).then((response) => {
            setDat(response.data)
            setRet("user")
            alert('Success Delete User')
        })
    };

    const deleteCman = () => {
        console.log(cid);
        Axios.post('http://localhost:3002/api/deleteCman', {
            cid: cid
        }).then((response) => {
            setDat(response.data)
            setRet("cman")
            alert('Success Delete Congressmen')
        })
    };

    const deleteStock = () => {
        console.log("sending stock data");
        Axios.post('http://localhost:3002/api/deleteStock', {
            stockID: stockID
        }).then((response) => {
            setDat(response.data)
            setRet("stock")
            alert('success Delete Stock')
        })
    };

    let atr = ""
    let data = ""
    if (ret === "user") {
            atr = "UserID | Name | Password | Email | NumberFollowing | Community"
            data = dat[0].UserID + " | " + dat[0].Name + " | " + dat[0].Password + " | " + dat[0].Email + " | " + dat[0].NumberFollowing + " | " +  dat[0].Community 
    } else if (ret === "cman") {
                atr = "CongressmanID | Name | Party | State | MonthlyTrades"
                data = dat[0].CongressmenID  + " | " + dat[0].Name + " | " + dat[0].Party + " | " + dat[0].State + " | " + dat[0].MonthlyTrades
    } else if (ret == "stock") {
            atr = "StockID | CurrentPrice | Industry | SMA | EMA | RSI | Low | High | DailyChange | DailyRange | Sector"
            data = dat[0].StockID + " | " + dat[0].CurrentPrice + " | " + dat[0].Industry + " | " + dat[0].SMA + " | " + dat[0].EMA + " | " + dat[0].RSI + " | " + dat[0].Low + " | " + dat[0].High + " | " + dat[0].DailyChange + " | " + dat[0].DailyRange + " | " + dat[0].SectorID
    }
    return (<div style = {{backgroundColor: "#888888"}}>
        <p>Delete Page</p>
        <button style={button_style} onClick = {(e) => {props.screenChange("Main")}}> Back</button>
        <div>
            <p> Delete User </p>
            <input placeholder = "UserID" id="user_id" type= "text" onChange = {(e) => setUserID (e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {deleteUser}> Submit</button>
        </div>
        <div>
        <p> Delete Congressman </p>
            <input placeholder = "CongressmanID" id="namein" type= "text" onChange = {(e) => setCid(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {deleteCman}> Submit</button>
        </div>
        <div>
        <p> Delete Stock </p>
            <input placeholder = "StockID" id="stockidin" type= "text" onChange = {(e) => setStockID(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {deleteStock}> Submit</button>
        </div>
        <div style = {ret === "" ? {visibility: "hidden"} : {color: "#ff0000"}}>
            <p>{atr}</p>
            <hr style = {{borderColor: "#ff0000"}}></hr>
            <p>{data}</p>
        </div>
    </div>);
}

export default Delete;