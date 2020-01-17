import React, {useEffect, useState} from 'react';
import axios from "axios"



const Wallet = () => {
    const [recipient, setRecipient] = useState("")



    useEffect(() => {
        axios.get('http://127.0.0.1:5000/chain')
            .then(res => {
                console.log("data", res.data)
                setRecipient(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



    return (
    <div>
        hi
    </div>
    )
}

export default Wallet