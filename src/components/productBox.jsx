import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import CartAtom from "../atoms/cart";

export default function ProductBox(props) {

    const [cart, setCart] = useRecoilState(CartAtom)


    return (
        <div class="card">
            <img src={props.product.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">{props.product.category}</p>
                <h5 class="card-title">{props.product.title}</h5>
                <Link to={`/ProductDetails/${props.product.id}`} class="btn btn-primary">Details</Link>
                <button onClick={() => {
                    setCart((oldData) => {
                        console.log(oldData)
                        return [...oldData , props.product]
                    })
                }} className="btn btn-success">add to Cart</button>
            </div>
        </div>
    )
}