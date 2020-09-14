import React from 'react';

import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import image from './image/image.png';
import { fetchdata } from './api';

class App extends React.Component{
    constructor()
    {
        super()
        this.state = {
            data:{},
            country:"",
        }        
    }

    async componentDidMount(){
        const fetchedData = await fetchdata();
        this.setState({data:fetchedData});
    }
    
    HandleCountryChange = async(country) => {
        const fetchedData = await fetchdata(country);
        this.setState({data:fetchedData,country:country});
    }
    render(){
        const {data,country} = this.state;
        return(
            <div className = {styles.container}>
                <img className = {styles.img} src = {image} alt = "COVID_19"/>
               <Cards data= {this.state.data}/>
               <CountryPicker HandleCountryChange = {this.HandleCountryChange} />
               <Chart data = {data} country = {country}/>
            </div>
         )       
    }
      
}
export default App;