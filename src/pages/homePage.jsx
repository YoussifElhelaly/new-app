import { useEffect, useState } from "react";
import ProductBox from "../components/productBox";

export default function HomePage(props) {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className="container">
            <div className="row">

                {
                    data.map((product) => {
                        return (
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <ProductBox product={product} setCart={props.setCart} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}