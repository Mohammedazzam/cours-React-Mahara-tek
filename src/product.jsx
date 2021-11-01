import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        name:"Burger",
        count: 3
    };
    render() { 
        return (
            <div>
                <span>{this.state.name}</span>
                <span className="btn btn-primary m-2">{this.state.count}</span>
            </div>
        )
    }
}

export default Product;