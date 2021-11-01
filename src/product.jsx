import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        name:"Burger",
        count: 3,
        imgUrl :"logo192.png"
    };
    render() { 
        return (
            <div>
                <img src={this.state.imgUrl} alt="" />
                <span>{this.state.name}</span>
                <span className="btn btn-primary m-2">{this.state.count}</span>
            </div>
        )
    }
}

export default Product;