import React,{useState,useEffect} from 'react';
import  { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api';
const CountryPicker = ({HandleCountryChange}) =>{
    const [FetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchedcountries = async() =>{
            setFetchedCountries(await countries());
        }
        fetchedcountries();
        console.log(FetchedCountries);
    })
    return(
        <FormControl className = {styles.formcontrol} style = {{marginBottom:'20px'}}>
            <NativeSelect defaultValue = "" onChange = {(e) => HandleCountryChange(e.target.value)}>
                <option value = "">Global</option>
                {FetchedCountries.map((country,i)=><option key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;