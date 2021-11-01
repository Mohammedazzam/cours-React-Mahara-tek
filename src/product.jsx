import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        name:"Burger",
        count: 0,
        imgUrl :"logo192.png",
        names:["Ahmed","Osama", "Ali" , "Mohammed"]
    };

    getClasses() {
        return  this.state.count === 0
        ? "btn btn-warning m-2"
        : "btn btn-primary m-2";

    }


    render() {
        // let classes;
        //     if(this.state.count === 0 ) {
        //         classes = 'btn btn-warning m-2'
        //     }else{
        //         classes = "btn btn-primary m-2"
        //     }

            // const classes = this.state.count === 0
            // ? "btn btn-warning m-2"
            // : "btn btn-primary m-2";


        return (
            <div>
                {/* <img src={this.state.imgUrl} alt="" /> */}
                <span style={{color:"red"}}>{this.state.name}</span>
                <span className={this.getClasses()}>{this.state.count}</span>
                <ul>
                    {this.state.names.map(name => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Product;