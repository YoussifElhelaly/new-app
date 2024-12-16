import { useRecoilState } from 'recoil'
import CartAtom from '../atoms/cart'
import './cart.css'

export default function Cart(props) {
    const [cart, setCart] = useRecoilState(CartAtom)

    return (
        <section className="cart">
            <div className="container">
                <table class="table table-striped-columns">
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>product Name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((product) => {
                                return (
                                    <tr>
                                        <td><img src={product.image} alt="" /></td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>

    )
}