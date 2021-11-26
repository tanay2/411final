import React, { useState } from "react";
import Axios from 'axios';

const page_style = {
    height: "100%",
    backgroundColor: "#99ffff",
}

const button_style = {
    fontSize: 20,
    marginLeft: "20px"
}

function Main(props) {

    const [ret, setRet] = useState('');
    const [dat, setDat] = useState('');

    const runQuery1 = () => {
        Axios.post('http://localhost:3002/api/advancedQuery_1', {
        }).then((response) => {
            setDat(response.data)
            console.log(response.data)
            setRet("q1")
            alert('Success Advanced Query 1')
        })
    };

    const runQuery2 = () => {
        Axios.post('http://localhost:3002/api/advancedQuery_2', {
        }).then((response) => {
            setDat(response.data)
            setRet("q2")
            alert('Success Advanced Query 2')
        })
    };

    let atr = ""
    let desc = ""
    if (ret === "q1") {
        atr = "StockID | AverageCurrentPrice"
        desc = "This query returns the StockID and average price of the stocks which are in sectors that have a market cap over $30,000,000,000"
    } else if (ret === "q2") {
        atr = "SectorID | CommunityCount"
        desc = "For each sector, this query returns the number of communities whose most popular stock is in that sector"
    }

    let adat = []
    for (let i = 0; i < Object.keys(dat).length; i++) {
        adat.push(dat[i])
    }

    return (<div style = {page_style}>
        <p style = {{fontSize: "20px"}}>Main page</p>
        <div>
            <button style = {button_style} name="Insert" onClick = {(e) => {props.screenChange(e.target.name)}}> Insert </button>
            <button style = {button_style} name="Delete" onClick = {(e) => {props.screenChange(e.target.name)}}> Delete </button>
            <button style = {button_style} name="Update" onClick = {(e) => {props.screenChange(e.target.name)}}> Update</button>
            <button style = {button_style} name="Search" onClick = {(e) => {props.screenChange(e.target.name)}}>Search</button>
        </div>
        <div style = {{marginTop: '30px'}}>
            <button style = {button_style} name="Query1" onClick = {runQuery1}>Advanced Query 1</button>
            <button style = {button_style} name="Query2" onClick = {runQuery2}>Advanced Query 2</button>
        </div>
        <div style = {ret === "" ? {visibility: "hidden"} : {color: "#000000"}}>
            <p>{desc}</p>
            <p>{atr}</p>
            <hr style = {{borderColor: "#000000"}}></hr>
            {adat.map((entry, i) => { 
                let data = ""
                if (ret === "q1") {
                    data = entry.stockId + " | " + entry.avg_cp
                } else if (ret === "q2") {
                    data = entry.SectorId + " | " + entry.CommunityCount
                }
                return (<p key = {i}>{data}</p>)
            })}
        </div>

    </div>) 
}
export default Main