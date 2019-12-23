import React, { useState } from "react"

const Contact = props => {
    const [Data, setData] = useState({
        fname: ""
    })


    return  (
        <div>
            First Name: {Data.fname}
        </div>
    )
}

export default Contact


