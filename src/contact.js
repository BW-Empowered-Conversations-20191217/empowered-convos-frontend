import React, { useState, useEffect } from "react"
import axios from "axios";
import Props from "./Props"

const Contact = props => {
    const [Data, setData] = useState([]);
    
    useEffect(() => {
        axios.get("API")
        .then(response => {
            console.log(response.data.sets)
            setData(response.data.sets)
        })
        .catch(error => {
            console.log("an Error Occur", error)
        })
    }, [])

    return (
            <h1>
                {Data.map((data, i) => {
                    return (
                        <Props key = {i}
                        fname = {data.fname}
                        lname = {data.lname}
                        email = {data.email}
                        phone = {data.phone}
                        job = {data.job}
                        department = {data.dept}
                        location = {data.loc}

                        />
                    )
                })}
            </h1>
    )
}

export default Contact


