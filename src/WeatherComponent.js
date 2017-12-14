import React, { Component } from 'react';
import store from './configureStore';
import * as weatherActions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocationPanel from './LocationPanel';
import WeatherPanel from './WeatherPanel';
import WeatherIndicator from './WeatherIndicator';
import './WeatherComponent.css';


class WeatherComponent extends Component {

    componentWillMount() {
        // init app logic
        this.props.weatherActions.getLocation();
    }

    refresh() {
        // refresh data logic
        this.props.weatherActions.getLocation();
    }

    render() {

        return (
            <div className="weather-container">
                <h1>o boy, look at the weather</h1>

                <WeatherIndicator />
                <LocationPanel />
                <WeatherPanel />

                <button onClick={() => { this.refresh() }}>Refresh</button>

            </div>
        );

  }
}


const mapStateToProps = (state) => {
    return {
        loadingWeather: state.weather.loadingWeather,
        loadingLocation: state.weather.loadingLocation,
        location: state.weather.location,
        weather: state.weather.weather,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
