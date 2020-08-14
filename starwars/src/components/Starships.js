import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Starships = (props) => {
    const starship = props
    const getData = props
    const character = props
    const [ss, setss] = useState()
    // const ss = props
    // const setss = props
    // console.log(character)

    useEffect(() => {
        axios.get(starship.starship)
            .then(response =>{
                // console.log(getData)
                setss(getData(response))
            })
            .catch(error =>{

            })
    //     Promise.all([])
    //         .then(response => {
    //             setss(response)
    //             console.log(response)
    //             // debugger
    //         })
    //         .catch(error => {
    //             debugger
    //         })
    },[ss])
    // console.log(ss)
    // useEffect(() => {
    //     if (!ss) return <div><p>hi</p></div>
    //     return (
    //         <div>
    //             <h3>StarShip(s)</h3>
    //             <p>name: {ss.name}  model:{ss.model}</p>
    //         </div>
    //     )
    // },[]) 
    if (!ss) return  (
    <div>
        <h3>StarShip(s)</h3>
        <p>name: Loading...  model: Loading...</p>
        {/* <p>Loading...</p> */}
    </div>
    )
    return (
        <div>
            <h3>StarShip(s)</h3>
            <p>name: {ss.name}  model:{ss.model}</p>
        </div>
    )
}

export default Starships