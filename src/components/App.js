import React, { Component } from 'react'
import PanelManager from './PanelManager'

    export default class App extends Component {

      state = {
          items: [],
          isLoaded: false,
      }
    
      componentDidMount() {
        fetch('https://n08kagpdqh.execute-api.us-east-2.amazonaws.com/dev/database_get/facebook.com')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
              isLoaded: true,
              items: data,
         })
        })
        .catch(console.log)
      }

      render() {

        var {isLoaded, items} = this.state;
        
        if(!isLoaded){
            return <div>Loading...</div>;
        } 
        else{
            return(items.Market_Sector);
        }
        
      }
      
    }