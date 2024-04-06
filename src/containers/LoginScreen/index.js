import React from "react";
import LoginScreen from "./screen";
import { connect } from "react-redux";
import { checkTestVal, checktestval } from "../../store/Actions/TestValue";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            testval:693,
            username:'',
            password:'',
        }
    }

    handleuserText = value =>{
        this.setState({
            username:value,
        })
    }

    handlepassText = value => {
        this.setState({
            password:value,
        })
    }

    loginhandler = () =>{
        console.log("The user name is****************");
        console.log(this.state.username);
        console.log("The password is****************");
        console.log(this.state.password);
        this.props.navigation.navigate('ProductList');
    }

    componentDidMount = () =>{
        this.props.checkval(this.state.testval);
    }

    render(){
        return(
            <LoginScreen 
            checkvalue={this.props.testvalue}
            userHandler = {this.handleuserText}
            passHandler = {this.handlepassText}
            username ={this.state.username}
            password = {this.state.password}
            loginHandler ={this.loginhandler}
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



export default connect(mapStateToProps,mapDispatchToProps)(Login);