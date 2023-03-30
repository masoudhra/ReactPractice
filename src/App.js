import React, { Component } from 'react';
import { Route } from "react-router-dom";

import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">HomePage</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/aboutus">About Us</a></li>
            
                </ul>
                <div>
                    <Route path="/" component={HomePage} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/products" component={Products} />
                    <Route path="/aboutus" component={AboutUs} />
                </div>
                
            </div>
        );
    }
}

export default App;