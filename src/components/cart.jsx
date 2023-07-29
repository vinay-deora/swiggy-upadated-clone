import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "./Config";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clearAllCart() {
    dispatch(clearCart());
  }

  function handleRemoveItem(itemId) {
    dispatch(removeItem(itemId));
  }

  return cartItems.length===0 ? (
<div className="flex flex-col items-center justify-center min-h-screen ">
  <img  src="https://th.bing.com/th/id/OIP.sjqY-IU0CQhY8aiDyjVbUwAAAA?w=156&h=143&c=7&r=0&o=5&pid=1.7" alt="" />
  <h1 className="text-center text-3xl font-bold text-gray-800 py-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Your Cart is Empty</h1>
</div>
):(
    
    <div className="md:w-3/5 w-[80%]  m-auto py-4 min-h-screen  ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Cart ({cartItems.length})</h1>
        <button
          className="text-xs font-medium bg-red-600 py-1 px-2 hover:bg-red-400 transition-all duration-300 ease-in-out rounded"
          onClick={clearAllCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col">
        {cartItems.map((item) => (
          <CartItem
            key={item?.card?.info?.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

const CartItem = ({ item, handleRemoveItem }) => {
  const { name, imageId, price, description } = item?.card?.info;

  return (
    <div className="my-2 border-b py-2 md:flex-row flex flex-col text-sm  gap-8">
      <img
        src={
          imageId
            ? IMG_CDN_URL + imageId
            : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
        }
        alt=""
        className="w-32 h-20 rounded object-cover"
      />
      <div className="flex flex-col flex-grow">
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">
          &#8377;{!price ? "250" : price / 100}
        </span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
      <button
        className="text-xs font-medium bg-red-300 py-1 px-2 hover:bg-red-400 transition-all duration-300 ease-in-out rounded self-start"
        onClick={() => handleRemoveItem(item?.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Cart;
