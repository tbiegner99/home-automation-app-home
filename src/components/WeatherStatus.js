import React from 'react';
import { AmericanUnits, WeatherStatus } from '@tbiegner99/home-automation-components';
import WeatherDatasource from '../datasource/weather/WeatherDatasource';

const mapStateToProps = (currentWeather) => ({
  temperature: currentWeather.temperature,
  windSpeed: currentWeather.windSpeed,
  windDirection: currentWeather.windDirection,
  status: currentWeather.status,
  units: AmericanUnits,
  updateTimeInMinutes: 10
});
class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {}
    };
  }

  componentDidMount() {
    const time = 60 * 1000 * 5; // five min
    this.interval = setInterval(this.updateWeather.bind(this), time);
    this.updateWeather();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async updateWeather() {
    console.log('HERE');
    const currentWeather = await WeatherDatasource.getCurrentWeather();
    this.setState({ currentWeather });
  }

  render() {
    const props = mapStateToProps(this.state.currentWeather);
    return <WeatherStatus {...props} />;
  }
}

export default WeatherDisplay;
