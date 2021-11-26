import React, { useEffect, useState } from "react";
import Axios from 'axios';

const button_style = {
    fontSize: 20
}

function Search(props) {

    const [keyword, setKeyword] = useState(''); 
    const [stockID, setStockID] = useState('');

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [q11, setQ11] = useState('');
    const [ret, setRet] = useState('');

    const sendKeyword= () => {
        setRet([])
        setQ1('')
        setQ2('')
        setQ3('')
        setQ4('')
        setQ5('')
        setQ6('')
        setQ7('')
        setQ8('')
        setQ9('')
        setQ10('')
        setQ11('')
        console.log(keyword);
        Axios.post('http://localhost:3002/api/sendKeywordCOMID', {
            keyword: keyword,
        }).then((response) => {
            // Community
            if (Object.keys(response.data).length !== 0) {
                // do stuff
                setQ1(response.data);
                setRet(oldArray => [...oldArray, "Community"])
               // console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordUID', {
            keyword: keyword,
        }).then((response) => {
            // User
            if (Object.keys(response.data).length !== 0) {
                // do stuff
                setQ2(response.data);
                setRet(oldArray => [...oldArray, "User"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordUNAME', {
            keyword: keyword,
        }).then((response) => {
            // User
            if (Object.keys(response.data).length !== 0) {
                setQ3(response.data);
                setRet(oldArray => [...oldArray, "User"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordCID', {
            keyword: keyword,
        }).then((response) => {
            // Congressmen
            if (Object.keys(response.data).length !== 0) {
                setQ4(response.data);
                setRet(oldArray => [...oldArray, "Congressmen"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordCNAME', {
            keyword: keyword,
        }).then((response) => {
            // Congressmen
            if (Object.keys(response.data).length !== 0) {
                setQ5(response.data);
                setRet(oldArray => [...oldArray, "Congressmen"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordSECID', {
            keyword: keyword,
        }).then((response) => {
            // Sector
            if (Object.keys(response.data).length !== 0) {
                setQ6(response.data);
                setRet(oldArray => [...oldArray, "Sector"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordSTOCKID', {
            keyword: keyword,
        }).then((response) => {
            // Stock
            if (Object.keys(response.data).length !== 0) {
                setQ7(response.data);
               setRet(oldArray => [...oldArray, "Stock"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordWSTOCK', {
            keyword: keyword,
        }).then((response) => {
            // Watchlist
            if (Object.keys(response.data).length !== 0) {
                setQ8(response.data);
               setRet(oldArray => [...oldArray, "Watchlist"])
                //console.log(response.data)
            }
        })


        Axios.post('http://localhost:3002/api/sendKeywordWUSER', {
            keyword: keyword,
        }).then((response) => {
            // Watchlist
            if (Object.keys(response.data).length !== 0) {
                setQ9(response.data);
                setRet(oldArray => [...oldArray, "Watchlist"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordRSTOCK', {
            keyword: keyword,
        }).then((response) => {
            // Recommendation
            if (Object.keys(response.data).length !== 0) {
                setQ10(response.data);
                setRet(oldArray => [...oldArray, "Recommendation"])
                //console.log(response.data)
            }
        })

        Axios.post('http://localhost:3002/api/sendKeywordRUSER', {
            keyword: keyword,
        }).then((response) => {
            // Recommendation
            if (Object.keys(response.data).length != 0) {
                setQ11(response.data);
               setRet(oldArray => [...oldArray, "Recommendation"])
                console.log(response.data)
            }
        })
    }; 
    let ar = []
    if (q1 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q1).length; i++) {
            adat.push(q1[i])
        }
        ar.push(adat)
    }
    if (q2 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q2).length; i++) {
            adat.push(q2[i])
        }
        ar.push(adat)
    }
    if (q3 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q3).length; i++) {
            adat.push(q3[i])
        }
        ar.push(adat)
    }
    if (q4 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q4).length; i++) {
            adat.push(q4[i])
        }
        ar.push(adat)
    }
    if (q5 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q5).length; i++) {
            adat.push(q5[i])
        }
        ar.push(adat)
    }
    if (q6 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q6).length; i++) {
            adat.push(q6[i])
        }
        ar.push(adat)
    }
    if (q7 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q7).length; i++) {
            adat.push(q7[i])
        }
        ar.push(adat)
    }
    if (q8 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q8).length; i++) {
            adat.push(q8[i])
        }
        ar.push(adat)
    }
    if (q9 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q9).length; i++) {
            adat.push(q9[i])
        }
        ar.push(adat)
    }
    if (q10 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q10).length; i++) {
            adat.push(q10[i])
        }
        ar.push(adat)
    }
    if (q11 !== '') {
        let adat = []
        for (let i = 0; i < Object.keys(q11).length; i++) {
            adat.push(q11[i])
        }
        ar.push(adat)
    }


   // ret = ["User", "Recommendation", "Sector"]
   // ar = [1,2,3]
   console.log(ar)
    console.log(ret)
    return (<div style = {{backgroundColor: "#888888"}}>
        <p>Search Page</p>
        <button style={button_style} onClick = {(e) => {props.screenChange("Main")}}> Back</button>
        <div>
            <p>Keyword Search</p>
            <input placeholder = "Keyword" id="keywordin" type= "text" onChange = {(e) => setKeyword(e.target.value)}></input>
            <button style={{fontSize: "15px"}} onClick = {sendKeyword}>Submit</button>
        </div>
        <div style = {ret === "" ? {visibility: "hidden"} : {color: "#000000"}}>
            {ar.map((e, i) => { 
                let data = ""
                let atr = ""
                if (ret[i] === "Sector") {
                    atr = "SectorID | MarketCap | LeadingStock | StockCount | WeeklyChange | IndustryCount"
                } else if (ret[i] === "Community") {
                    atr = "CommunityID | MostCommonStock | MostCommonCongressman | MemberCount"
                } else if (ret[i] === "Stock") {
                    atr = "StockID | CurrentPrice | Industry | SMA | EMA | RSI | Low | High | DailyChange | DailyRange | Sector"
                }else if (ret[i] === "Congressmen") {
                    atr = "CongressmanID | Name | Party | State | MonthlyTrades"
                }else if (ret[i] === "User") {
                    atr = "UserID | Name | Password | Email | NumberFollowing | Community"
                }else if (ret[i] === "Watchlist") {
                    atr = "StockID | UserID | StartDate | Favorite"
                }else if (ret[i] === "Recommendation") {
                    atr = "StockID | CongressmenID | Strength"
                }
                return (<div style = {{color: "#000000"}}>
                    <p key = {i.toString() + "P1"} style = {{marginTop: '100px', fontSize: '20px'}} >{ret[i]}</p>
                    <p key = {i.toString() + "P2"} >{atr}</p>
                    <hr key = {i.toString() + "H"} style={{borderColor: "#000000"}}></hr>
                    {e.map((en, j) => {
                    let data = ""
                    if (ret[i] === "Sector") {
                        data = en.SectorID + " | " + en.MarketCap + " | " + en.LeadingStock + " | " + en.StockCount + " | " + en.WeeklyChange + " | " + en.IndustryCount
                    } else if (ret[i] === "Community") {
                        data = en.CommunityID + " | " + en.MostCommonStock + " | " + en.MostCommonCongressman + " | " + en.MemberCount
                    } else if (ret[i] === "Stock") {
                        data = en.StockID + " | " + en.CurrentPrice + " | " + en.Industry + " | " + en.SMA + " | " + en.EMA + " | " + en.RSI + " | " + en.Low + " | " + en.High + " | " + en.DailyChange + " | " + en.DailyRange + " | " + en.SectorID
                    }else if (ret[i] === "Congressmen") {
                        data = en.CongressmenID  + " | " + en.Name + " | " + en.Party + " | " + en.State + " | " + en.MonthlyTrades
                    }else if (ret[i] === "User") {
                        data = en.UserID + " | " + en.Name + " | " + en.Password + " | " + en.Email + " | " + en.NumberFollowing + " | " +  en.Community
                    }else if (ret[i] === "Watchlist") {
                        data = en.StockID + " | " + en.UserID + " | " + en.StartDate + " | " + en.Favorite
                    }else if (ret[i] === "Recommendation") {
                        data = en.StockID + " | " + en.CongressmenID + " | " + en.Strength
                    }

                       return (<p key = {i.toString() + j.toString() + "D"}>{data}</p>)
                   })}
                    </div>);
            })}
        </div>
    </div>);
}

export default Search;