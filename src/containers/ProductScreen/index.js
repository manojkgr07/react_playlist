import React from "react";
import ProductScreen from "./screen";
import { connect } from "react-redux";


class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:'',
            sampjson:[
                {"id":1,
                "title":"iPhone 9",
                "description":"An apple mobile which is nothing like apple",
                "price":549,
                "discountPercentage":12.96,
                "rating":4.69,"stock":94,
                "brand":"Apple",
                "category":"smartphones",
                "thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                "images":[
                    "https://cdn.dummyjson.com/product-images/1/1.jpg",
                    "https://cdn.dummyjson.com/product-images/1/2.jpg",
                    "https://cdn.dummyjson.com/product-images/1/3.jpg",
                    "https://cdn.dummyjson.com/product-images/1/4.jpg",
                    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                ]}
            ]
        }
    }

    componentDidMount(){}

    productsHandler = () =>{
        this.props.navigation.navigate('ProductDetails');
    }

    searchHandler = value =>{
        this.setState({
            searchText:value
        });
    }


    render(){
        return(
            <ProductScreen 
            searchText={this.state.searchText} 
            searchHandler={this.searchHandler}
            testjson={this.state.sampjson}
            productsHandler={this.productsHandler}
            />
        );
    }
}

const mapStateToProps = state =>{
    return{
        testvalue: state.testval.testvalue
       
    };
}

const mapDispatchToProps =dispatch => {
return{
    checkval:data=>dispatch(checkTestVal(data)),
}
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductList);