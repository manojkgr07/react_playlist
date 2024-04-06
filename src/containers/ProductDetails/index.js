import React from "react";
import ProductDetailsScreen from "./screen";
import { connect } from "react-redux";


class ProductDetails extends React.Component{

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

    searchHandler = value =>{
        this.setState({
            searchText:value
        });
    }


    render(){
        return(
            <ProductDetailsScreen 
           
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



export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);