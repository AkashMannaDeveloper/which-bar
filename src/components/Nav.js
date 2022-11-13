import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

    const auth = localStorage.getItem('user');
    let user = JSON.parse(auth);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };
    return (
        <div>
            <img className="logo" width="100" src="https://w7.pngwing.com/pngs/728/562/png-transparent-demos-restaurant-take-out-food-delivery-wax-printing-food-text-logo.png" alt="logo" />
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/">Logout ({user.full_name})</Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sign-up" >Sign-Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;