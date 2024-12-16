import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails() {

    const params = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.idProduct}`)
            .then(res => res.json())
            .then(json => setData(json))

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={data.image} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p>{data.title}</p>
                    <p>{data.category}</p>
                    <p>{data.description}</p>
                    <p>{data.price}</p>

                </div>
            </div>
        </div>
    )
}