import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './LocationPanel.css'


class LocationPanel extends Component {

	render() {
		let loading = (this.props.loadingLocation || this.props.loadingWeather) ? true : false;

		if (!loading) {
			return (
				<div className="location-container">
					<h3 className="location-name">{this.props.weather.name}</h3>
					<p className="location-date">December 14th</p>
				</div>
			);
		} else {
			return (
				<div className="location-container">
					
				</div>
			);
		}
	}

}

const mapStateToProps = (state) => {
    return {
        loadingWeather: state.weather.loadingWeather,
        loadingLocation: state.weather.loadingLocation,
        weather: state.weather.weather,
    }
}

export default connect(mapStateToProps)(LocationPanel);