import Product from "../components/Product";
import { CartContext } from "../context/CartContextProvider";
import { useEffect, useState, useContext } from "react";

const CartPage = () => {
  const [total, setTotal] = useState([]);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((newlyAdded, current) => newlyAdded + Number(current.price), 0));
  }, [cart]);

  return (
    <div className="bg-purple-300 h-screen w-screen overflow-auto p-4 text-3xl">
      <div className="grid grid-cols-3 gap-2 mx-auto">
        {cart.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </div>
      <h1 className="font-black">My cart</h1>
      <h3 className="">Total: {total}</h3>
    </div>
  )
}

export default CartPage;
