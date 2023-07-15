import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import data from "./data"
import "./index.css"

export default function App(){
    
const cards= data.map(card=>{
    return(
        <Content
            key={card.title}
            card={card}
         />
    )
})

    return(
        <>
            <Header />
            {cards}
        </>
    )
}
