import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const Cards = ({strMeal,strMealThumb}) => {
    let ftitle = strMeal?.length > 11? strMeal?.substring(0, 11) + "..." :strMeal;

    let dispatch = useDispatch()
    
    // add to cart
    let handleAddToCart = (strMeal,strMealThumb) =>{
      dispatch(addToCart({strMeal, strMealThumb}))
    }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{width: "17rem"}}>
              <img src={strMealThumb} className="card-img-top" alt="..." />
              <div className="card-body">
              <h5 className="card-title">{ftitle}</h5>
              </div>
              <button type="button" onClick={()=>handleAddToCart(strMeal,strMealThumb)} className="bg-danger text-white">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
