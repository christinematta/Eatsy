import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, deletWholeItem, cartTotalAmount } =
    useContext(StoreContext);
    const navigate = useNavigate();
  const isCartEmpty = !food_list.some((item) => cartItems[item._id] > 0);

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="cart-items-empty">
          <h1>Your shopping cart is still empty</h1>
          <Link to="/" className="cart-items-empty-link">
            <button>Go to menu</button>
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>€{item.price}</p>
                    <div className="cart-item-quantity">
                      <FaMinus
                        onClick={() => removeFromCart(item._id)}
                        className="cart-item-quantity-icon remove-icon"
                      />
                      <p>{cartItems[item._id]}</p>
                      <IoMdAdd
                        onClick={() => addToCart(item._id)}
                        className="cart-item-quantity-icon add-icon"
                      />
                    </div>

                    <p>€{item.price * cartItems[item._id]}</p>
                    <MdDeleteOutline
                      className="cart-remove-item"
                      onClick={() => deletWholeItem(item._id)}
                    />
                  </div>
                  <hr />
                </div>
              );
            }
          })}
            <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>€{cartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery Fee</p>
              <p>€ {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <strong>Total</strong>
              <p>€ {cartTotalAmount() + 2}</p>
            </div>

          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here.</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
        </>
      )}

    </div>
  );
};

export default Cart;
