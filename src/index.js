import React from "react";
import ReactDom from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Error from "./Error";

class App extends React.Component {
    state = {lat: null, errorMessage:""};
    

    render = () => {

   if(this.state.lat && !this.state.errorMessage) {
    return <SeasonDisplay lat={this.state.lat}/>
   }
   if(!this.state.lat && this.state.errorMessage) {
    return  <Error />    
   }
   return <Loader />
}
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
                error => {this.setState({errorMessage: error.message});
        }
            );
    }
    };

    
    
        

ReactDom.createRoot(document.querySelector("#root")).render(<App/>);
