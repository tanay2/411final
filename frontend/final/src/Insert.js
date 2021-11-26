import React, { useState } from "react";
import Axios from 'axios';


const button_style = {
    fontSize: 20
}

function Insert(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [cname, setCname] = useState('');
    const [state, setState] = useState('');
    const [party, setParty] = useState('');

    const [stockID, setStockID] = useState('');
    const [curprice, setCurprice] = useState('');
    const [Industry, setIndustry] = useState('');
    const [sma, setSma] = useState('');
    const [ema, setEma] = useState('');
    const [rsi, setRsi] = useState('');
    const [low, setLow] = useState('');
    const [high, setHigh] = useState('');
    const [dchange, setDchange] = useState('');
    const [drange, setDrange] = useState('');
    const [sector, setSector] = useState('');


    const [userID, setUserID] = useState('');
    const [congID, setCongID] = useState('');

    const [ret, setRet] = useState('');


    const insertUser = () => {
        console.log(name);
        console.log(email);
        console.log(password);
        Axios.post('http://localhost:3002/api/insertUser', {
            name: name,
            email: email,
            password: password
        }).then((response) => {
            setUserID(response.data);
            setRet("user");
            alert('Success Insert User')
        })
    };

    const insertCman = () => {
        console.log(cname);
        console.log(state);
        console.log(party);
        Axios.post('http://localhost:3002/api/insertCman', {
            cname: cname,
            state: state,
            party: party
        }).then((response) => {
            setCongID(response.data)
            setRet("cman");
            alert('Success Insert Congressmen')
        })
    };

    const insertStock = () => {
        console.log("sending stock data");
        Axios.post('http://localhost:3002/api/insertStock', {
            stockID: stockID,
            curprice: curprice, 
            Industry: Industry,
            sma: sma,
            ema: ema,
            rsi: rsi,
            low: low,
            high: high, 
            dchange: dchange,
            drange: drange, 
            sector: sector
        }).then(() => {
            setRet("stock");
            alert('Success Insert Stock')
        })
    };

    let atr = ""
    let data = ""
    if (ret === "user") {
            atr = "UserID | Name | Password | Email | NumberFollowing | Community"
            data = userID + " | " + name + " | " + password + " | " + email + " | 0 | Com1 " 
    } else if (ret === "cman") {
                atr = "CongressmanID | Name | Party | State | MonthlyTrades"
                data = congID + " | " + cname + " | " + party + " | " + state + " | 0 "
    } else if (ret == "stock") {
            atr = "StockID | CurrentPrice | Industry | SMA | EMA | RSI | Low | High | DailyChange | DailyRange | Sector"
            data = stockID + " | " + curprice + " | " + Industry + " | " + sma + " | " + ema + " | " + rsi + " | " + low + " | " + high + " | " + dchange + " | " + drange + " | " + sector
    }
    return (<div style = {{backgroundColor: "#888888"}}>
        <p>Insert Page</p>
        <button style={button_style} onClick = {(e) => {props.screenChange("Main")}}> Back</button>
        <div>
            <p> Insert New User </p>
            <input placeholder = "Name" id="namein" type= "text" onChange = {(e) => setName(e.target.value)}>
            </input> <input placeholder = "Email"  id="emailin" type= "text" onChange = {(e) => setEmail(e.target.value)}></input>
            <input placeholder = "Password" id="passwordin" type= "password" onChange = {(e) => setPassword(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {insertUser}> Submit</button>
        </div>
        <div>
        <p> Insert New Congressman </p>
            <input placeholder = "Name" id="namein" type= "text" onChange = {(e) => setCname(e.target.value)}>
            </input> <input placeholder = "Party"  id="partyin" type= "text" onChange = {(e) => setParty(e.target.value)}></input>
            <input placeholder = "State" id="statein" type= "text" onChange = {(e) => setState(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {insertCman}> Submit</button>
        </div>
        <div>
        <p> Insert New Stock </p>
            <input placeholder = "StockID" id="stockidin" type= "text" onChange = {(e) => setStockID(e.target.value)}>
            </input> <input placeholder = "Current Price"  id="curpricein" type= "number" onChange = {(e) => setCurprice(e.target.value)}></input>
            <input placeholder = "Industry" id="industryin" type= "text" onChange = {(e) => setIndustry(e.target.value)}></input>
            <input placeholder = "SMA" id="smain" type= "text" onChange = {(e) => setSma(e.target.value)}>
            </input> <input placeholder = "EMA"  id="emain" type= "text" onChange = {(e) => setEma(e.target.value)}></input>
            <input placeholder = "RSI" id="rsiin" type= "text" onChange = {(e) => setRsi(e.target.value)}></input>
            <input placeholder = "Low" id="lowin" type= "text" onChange = {(e) => setLow(e.target.value)}></input>
            <input placeholder = "High"  id="highin" type= "text" onChange = {(e) => setHigh(e.target.value)}></input>
            <input placeholder = "Daily Change" id="dailychangein" type= "text" onChange = {(e) => setDchange(e.target.value)}></input>
            <input placeholder = "Daily Range" id="dailyrangein" type= "text" onChange = {(e) => setDrange(e.target.value)}></input>
            <input placeholder = "Sector" id="sectorid" type= "text" onChange = {(e) => setSector(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {insertStock}> Submit</button>
        </div>
        <div style = {ret === "" ? {visibility: "hidden"} : {color: "#00ff00"}}>
            <p>{atr}</p>
            <hr style = {{borderColor: "#00ff00"}}></hr>
            <p>{data}</p>
        </div>
    </div>);
}

export default Insert;