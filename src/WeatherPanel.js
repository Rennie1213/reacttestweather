import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './WeatherPanel.css';


class WeatherPanel extends Component {

	render() {

		if (!this.props.loadingWeather) {

            return (
                <div className="temp-container">
                   <div>{this.props.weather.main.temp_max}</div>
                   <div className="main-temp">{this.props.weather.main.temp}</div>
                   <div>{this.props.weather.main.temp_min}</div>
                </div>
            );

        } else {

            return (
                <div className="temp-container">
                    <p>loading ..</p>
                </div>
            );

        }
	}

}


const mapStateToProps = (state) => {
    return {
        loadingWeather: state.weather.loadingWeather,
        weather: state.weather.weather
    }
}

export default connect(mapStateToProps)(WeatherPanel);