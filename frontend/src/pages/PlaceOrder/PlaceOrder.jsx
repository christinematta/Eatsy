import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const { cartTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate;
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Last name" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
          <button onClick={() => navigate("/order")}>PROCEED TO PAYMANT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
