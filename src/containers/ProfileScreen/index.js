import React from "react";
import ProfileScreen from "./screen";
import { connect } from "react-redux";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            profileDet:this.props.route.params.profileDet,
            userDetails:this.props.route.params.userDetails,
        }
    }

    componentDidMount(){
        console.log(this.props.route.params.profileDet)
    }

    componentDidUpdate = prevProps =>{
        console.log(this.state.profileDet)
    }

    backHandler = () =>{
        this.props.navigation.navigate('ProductList',{
            userDetails:this.state.userDetails
        });
    }

    logoutHandler = () =>{
        this.props.navigation.navigate('Login');
    }

    render(){
        return(
            <ProfileScreen backHandler={this.backHandler} logoutHandler={this.logoutHandler} profileDet={this.state.profileDet}/>
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



export default connect(mapStateToProps,mapDispatchToProps)(Profile);