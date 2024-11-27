import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/CartSlice";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // remove item by id
  let handleRemoveItem = (idMeal)=>{
    dispatch(removeFromCart({idMeal}))
  }

  return (
    <div>
      <div className="container">
        <div className="row text-center my-5">
          <div className="col-12">
            <h2>My Cart...</h2>
          </div>
        </div>
        <div className="row justify-content-center">
            {cartItems.map((item, index) => (
              <div key={index} className="col-md-8 col-12">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src={item.strMealThumb}
                        width={150}
                        className="img-fluid rounded-start"
                        alt={item.strMeal}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.strMeal}</h5>
                      </div>
                      <button
                        className="bg-dark text-white ms-3"
                        onClick={()=> handleRemoveItem(item.idMeal)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
