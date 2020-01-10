import React, { useState, useEffect } from "react"
import axios from "axios";
import Info from "./Info"

const Contact = () => {
    const [Data, setData] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.pokemontcg.io/v1/sets")
        .then(response => {
            console.log(response)
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
                        <Info key = {i}
                        img = {data.logoUrl}
                        name = {data.name}
                        lname = {data.lname}
                        email = {data.email}
                        phone = {data.phone}
                        job = {data.job}
                        department = {data.dept}
                        location = {data.loc}
                        code = {data.code}
                        />
                    )
                })}

                
                
            </h1>
            
    )
}

export default Contact


