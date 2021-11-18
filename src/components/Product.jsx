import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider"

const Product = ({ prod }) => {

    const { cart, setCart } = useContext(CartContext);

    return (
        <div className="m-4 object-contain text-center">
            <img className="h-64 w-full rounded-t-xl" src={prod.image} alt={prod.title} />
            <div className="bg-pink-300 mb-6">
              <p className="font-bold text-sm">{prod.title}</p>
              <p></p>
              <p>$ {prod.price}</p>


              {cart.includes(prod) ? (
                <button className="bg-red-400 m-2 w-72" 
                onClick={() => {setCart(cart.filter((cartProd) => cartProd.id !== prod.id))}}>
                  Remove from cart
                </button>) 
                :
              <button className="bg-green-400 m-2 w-72" 
              onClick={() => {setCart([...cart, prod])}}>
                  Add to cart
              </button>
              }
            </div>
        </div>
    )
}

export default Product

