import React from "react"

export default function Main(props) {
    return (
        <main>
            <div className="box">
                <img src={props.img}className="pic" width="200px"/>
                <h1>{props.name}</h1>
                <h3>{props.phone}</h3>
                <h4>{props.email}</h4>
            </div>
        </main>
    )
}