import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as weatherActions from './actions';

const apiLocation = () => {

	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

}

function *getLocation(action) {

	try {
		const locationRequest = yield call(apiLocation);
		yield put({type: 'UPDATE_LOCATION', payload: locationRequest.coords});
	} catch (error) {
		console.error('damn ... location generator failed');
	}
    
}

function *getWeather(action) {
	const apiKey 	= '64ff39efe3a2475ad28f4b1fa4440287';
	let   latitude  = 51.9;
	let   longitude = 4.5;

	fetch( `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}` )
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				console.error(error)
			})

	try {

		const weatherRequest = yield call(
			fetch,
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`
		);
		const weatherJson = yield weatherRequest.json();
		yield put({type: 'UPDATE_WEATHER', payload: weatherJson});

	} catch (error) {

		console.error('damn ... weather generator failed');

	}

}

function *weatherSaga() {

    yield takeEvery('GET_LOCATION', getLocation);
    yield takeEvery('UPDATE_LOCATION', getWeather);

}

export default weatherSaga;
