import { Component } from "react";
import logo from '../images/icon-blacklist.svg';


class SuperCharge extends Component {
    render(){
       return (
       
       <div>
       <h1>Supercharge your workflow</h1>
       <p>We’ve got the tools to boost your productivity.</p> 
       <img src={logo}  alt="" />
       <h2>Create blacklists</h2>
       <p>Ensure sensitive information never makes its way to your clipboard by excluding certain source</p>

      
       </div>
       
)

       
    }
}

export default SuperCharge;