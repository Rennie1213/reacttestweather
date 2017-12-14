import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './WeatherIndicator.css';


class WeatherIndicator extends Component {
	
	render() {

		if (!this.props.loadingWeather) {

			return (
				<div className="indicator-container">
					<Indicator weatherCondition={this.props.weather.weather[0].main} />
				</div>
			);

		} else {

			return (
				<div className="indicator-container">
					<img src="/img/settings.svg" className="rotate" />
				</div>
			);

		}
	}

}

const Indicator = (props) => {
	// switch(props.weatherCondition) {
 //        case 'Rain':
 //          return <img src="/img/storm.svg" className="float" />
 //        case 'Clear':
          // return <img src="/img/sun.svg" className="rotate" />
        // case 'Clouds':
          return <img src="/img/clouds.svg" className="float" />
    // }
}

const mapStateToProps = (state) => {
    return {
        loadingWeather: state.weather.loadingWeather,
        loadingLocation: state.weather.loadingLocation,
        weather: state.weather.weather
    }
}

export default connect(mapStateToProps)(WeatherIndicator);