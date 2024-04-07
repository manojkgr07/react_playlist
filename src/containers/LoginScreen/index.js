import React from "react";
import LoginScreen from "./screen";
import { connect } from "react-redux";
import { checkTestVal, checktestval } from "../../store/Actions/TestValue";
import { getProductList } from "../../store/Actions/ProductList";
import { getProductDetail } from "../../store/Actions/ProductDetails";
import { userlogin } from "../../store/Actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testval: 693,
            username: '',
            userDet:{},
            password: '',
            isVisible:false,
            errormsg:"",
        }
    }

    handleuserText = value => {
        this.setState({
            username: value,
        })
    }

     toggleModal = value => {
        this.setState({
            isVisible:value
        })
      };

    handlepassText = value => {
        this.setState({
            password: value,
        })
    }

    loginhandler = () => {
        console.log("The user name is****************");
        console.log(this.state.username);
        console.log("The password is****************");
        console.log(this.state.password);
        if(this.state.username==''||this.state.password==''){
            this.setState({
                isVisible:true,
                errormsg:"Username or Password should not be Empty"
            })
        }
        else if(this.state.username!="kminchelle"&&this.state.password!="0lelplR"){
            console.log("The value is**********");
            console.log(this.state.username);
            console.log(this.state.password);
            this.setState({
                isVisible:true,
                errormsg:"Invalid Credentials!"
            });
        }
        else{

            const data = {
                "username": this.state.username,
                "password": this.state.password
            }
            this.props.loginuser(data);
        }
       
       
       
    }

    componentDidUpdate = prevProps => {
        if (
            prevProps.userdetailsstatus == false &&
            this.props.userdetailsstatus != prevProps.userdetailsstatus
          ) {
            console.log("Checking value******");
            console.log(this.props.userdetails);
            this.setState({
                userDet:this.props.userdetails
            });
            this.props.getPoducts(null);
            // this.props.navigation.navigate('ProductList');
          }
          if (
            prevProps.productListstatus == false &&
            this.props.productListstatus != prevProps.productListstatus
          ) {
            //this.props.getPoducts(null);
             this.props.navigation.navigate('ProductList',{
                userDetails:this.state.userDet
             });
          }
    }

    componentDidMount = () => {
        this.props.checkval(this.state.testval);

      
    }

    render() {
        return (
            <LoginScreen
                checkvalue={this.props.testvalue}
                userHandler={this.handleuserText}
                passHandler={this.handlepassText}
                username={this.state.username}
                password={this.state.password}
                loginHandler={this.loginhandler}
                errormsg={this.state.errormsg}
                toggleModal={this.toggleModal}
                isVisible={this.state.isVisible}
            />
        );
    }


}

const mapStateToProps = state => {
    return {
        testvalue: state.testval.testvalue,
        productListval: state.productList.productListResponse,
        productListstatus:state.productList.productListStatus,
        productListerror:state.productList.productListError,
        userdetails:state.login.loginResponse,
        userdetailsstatus:state.login.loginStatus,
        userdetailserror:state.login.loginError,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        checkval: data => dispatch(checkTestVal(data)),
        getPoducts: data => dispatch(getProductList(data)),
        loginuser:data => dispatch(userlogin(data))

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);