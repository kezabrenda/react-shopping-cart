import { Link } from "react-router-dom";
import { FaLessThan, FaOpencart, FaGreaterThan, FaHome, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const HeaderNav = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="bg-pink-400 w-64 h-screen">
            <div className = "text-xl flex flex-row font-black border-b-2 border-purple-900 p-4 text-purple-900">
                <div className = "flex flex-row"><FaLessThan /><FaOpencart /><FaGreaterThan /></div>
                <Link to="/" ><div className = "ml-2">Shopping Cart</div></Link>
            </div>
            <div className="text-2xl p-8 text-center">
                <Link to="/" ><div className="flex flex-row pb-24 pt-8"><span className="pr-4"><FaHome /></span>Home</div></Link>
                <Link to="/cart" ><div className="flex flex-row"><span className="pr-4"><FaShoppingCart /></span>Cart  ({cart.length})</div></Link>
            </div>
        </div>
    )
}

export default HeaderNav
