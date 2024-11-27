import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {

  let cartItems = useSelector((store) => store.cart.items)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark py-3">
  <div className="container">
    <a className="navbar-brand fw-bolder fs-4 text-light" href="#">STORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-5">
        <Link to="/"><li className="nav-item fw-bolder fs-4 text-light">Home</li></Link>
        <Link to="/cart"><li className="nav-item fw-bolder fs-4 text-light">Cart <span>{cartItems.length}</span></li></Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
