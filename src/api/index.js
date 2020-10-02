import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {
    let ChangeableUrl = url;
    if (country)
        ChangeableUrl = `${url}/countries/${country}`;
    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(ChangeableUrl);
        //    confirmed:data.confirmed
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log("error fetching countries or global data");
    }
}

export const fetchDailyData = async () => {
    let d = new Date();
    let m = d.getMonth() + 1;
    let daily = d.getDate() + "-" + m + "-" + d.getFullYear();
    console.log(daily);
    try {
        const { data } = await axios.get(`${url}/daily/${daily}`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log("error in fetching daily data");
    }
}

export const countries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return (countries.map((country) => country.name));
    } catch (error) {
        console.log("error in fetching countries");
    }
}