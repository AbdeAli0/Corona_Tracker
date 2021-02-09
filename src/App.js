import React from 'react';

import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/1.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchdData = await fetchData();

        this.setState({ data: fetchdData })
    }

    handleCountryChange = async(country) => {
        const fetchdData = await fetchData(country);
        this.setState({ data: fetchdData, country: country })
    }

    render() {
        const { data, country } = this.state;

        return ( < div className = { styles.container } >
            <h1>C<img className = "styles.image"  src = { coronaImage } alt = "COVID-19" / >VID-19</h1>
            <Cards data = { data }/> 
            <CountryPicker handleCountryChange = { this.handleCountryChange }/ >
            <Chart data = { data }country = { country }/> 
            </div > );
    }
}

export default App;