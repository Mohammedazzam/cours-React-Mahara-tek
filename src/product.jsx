import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        name:"Burger",
        count: 0,
        imgUrl :"logo192.png",
        names:["Ahmed","Osama", "Ali" , "Mohammed", "Azz", "roro"]
    };

    getClasses() {
        return  this.state.count === 0
        ? "btn btn-warning m-2"
        : "btn btn-primary m-2";

    }
    renderName() {
        if(this.state.names.length === 0){
            return <h2>No Names</h2>
        }
        return(
            <ul>
            {this.state.names.map(name => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
    }
    clickHandler = () => {
        this.state.count++
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
                {this.state.names.length === 0 && <h4>No Names</h4>}
                {/* <img src={this.state.imgUrl} alt="" /> */}
                <span style={{color:"red"}}>{this.state.name}</span>
                <span className={this.getClasses()}>{this.state.count}</span>
                <ul>
                    {this.state.names.map(name => (
                    <li key={name}>{name}</li>
                    ))}
                </ul>

                {/* {this.renderName()} */}
                <button onClick={this.clickHandler} className="btn btn-primary btn-sm">+</button>        
            </div>
        )
    }
}

export default Product;