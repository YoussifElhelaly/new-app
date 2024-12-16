import { useState } from 'react'
import './box.css'

export default function Box(props) {
    let [counter, setCounter] = useState(0)

    console.log()

    return (
        <div class="card" >
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <h5 class="card-title">{props.title}</h5>
            </div>
        </div>
    )
}