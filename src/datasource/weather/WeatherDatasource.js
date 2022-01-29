import axios from 'axios';
import WeatherSerializer from './WeatherSerializer';

const BASE_URL = 'https://api.weather.gov';
class WeatherDatasource {
  constructor() {
    this._client = axios.create();
  }

  async getCurrentWeather() {
    const url = `${BASE_URL}/stations/KFRG/observations/latest`;
    const results = await this._client.get(url);
    return WeatherSerializer.fromCurrentWeatherResponse(results.data);
  }
}

export default new WeatherDatasource();
