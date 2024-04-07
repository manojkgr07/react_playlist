import React from "react";
import ProductScreen from "./screen";
import { connect } from "react-redux";
import { deleteProduct, getProductDetail, serachProduct } from "../../store/Actions";
import { userProfile } from "../../store/Actions";
import { getProductList } from "../../store/Actions";


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            userdet: this.props.route.params.userDetails,
            sampjson: [
                {
                    "id": 1,
                    "title": "iPhone 9",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69, "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                    "images": [
                        "https://cdn.dummyjson.com/product-images/1/1.jpg",
                        "https://cdn.dummyjson.com/product-images/1/2.jpg",
                        "https://cdn.dummyjson.com/product-images/1/3.jpg",
                        "https://cdn.dummyjson.com/product-images/1/4.jpg",
                        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                    ]
                }
            ],
            prodlist: []
        }
    }

    componentDidMount() {
        this.setState({
            prodlist: this.props.productListval,

        });
        console.log("The product json in product screen is********");
        console.log(this.state.userdetails);
    }

    componentDidUpdate = prevProps => {
        if (
            prevProps.profilestatus == false &&
            this.props.profilestatus != prevProps.profilestatus
          ) {
            this.props.navigation.navigate('Profile',{
                profileDet:this.props.profileval,
                userDetails:this.props.route.params.userDetails,
            });
          }

       
        if (
            prevProps.productListstatus == false &&
            this.props.productListstatus != prevProps.productListstatus
        ) {
            this.setState({
                prodlist: this.props.productListval
            })
        }
       

    }

    productsHandler = (item) => {
        console.log("Check data*******");
        console.log(item.id);
        //    this.props.getDetails(item.id);
        this.props.navigation.navigate('ProductDetails', {
            productItem: item
        });
    }

    profileHandler = () => {
        console.log(this.props.route.params.userDetails.token);
        let token = this.props.route.params.userDetails.token;

        this.props.profile(null, token);


    }

    editHandler = () => {
        console.log("Edit Handler");
    }

    deleteHandler = (item) => {
        console.log("Delete Handler");
        console.log(item.id);
        //this.props.delItem(item.id);
    }

    searchHandler = value => {
        this.setState({
            searchText: value
        });
    }

    onSearchHandler = () => {
        if (this.state.searchText == '') {
            this.props.getPoducts(null);
        }
        else {
            // console.log(this.state.searchText);
            // this.props.searchProducts(this.state.searchText);
        }
    }


    render() {
        return (
            <ProductScreen
                searchText={this.state.searchText}
                searchHandler={this.searchHandler}
                testjson={this.state.prodlist}
                productsHandler={this.productsHandler}
                profileHandler={this.profileHandler}
                editHandler={this.editHandler}
                deleteHandler={this.deleteHandler}
                userDet={this.state.userdet}
                onSearchHandler={this.onSearchHandler}
            />
        );
    }
}

const mapStateToProps = state => {
    return {

        productListval: state.productList.productListResponse,
        profileval: state.profile.profileResponse,
        profilestatus: state.profile.profileStatus,
        productListval: state.productList.productListResponse,
        productListstatus: state.productList.productListStatus,
        productListerror: state.productList.productListError,
        searchListval: state.search.searchResponse,
        searchListstatus: state.search.searchStatus,
        deleteProdval:state.delete.deleteResponse,
        deleProdstatus:state.delete.deleteStatus

    };
}

const mapDispatchToProps = dispatch => {
    return {
        checkval: data => dispatch(checkTestVal(data)),
        getDetails: data => dispatch(getProductDetail(data)),
        profile: (data, token) => dispatch(userProfile(data, token)),
        getPoducts: data => dispatch(getProductList(data)),
        searchProducts: data => dispatch(serachProduct(data)),
        delItem: data => dispatch(deleteProduct(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductList);