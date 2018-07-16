import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  renderWeathersList = () => {
    return this.props.weather.map(({ city, list }) => {

      const temps = list.map(({ main }) => main.temp);
      const pressures = list.map(({ main }) => main.pressure);
      const humidities = list.map(({ main }) => main.humidity);
      const { lat, lon } = city.coord;

      return (
        <tr key={city.id}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
          </td>
          <td>
            <Chart data={temps} color="blue" />
          </td>
          <td>
            <Chart data={pressures} color="red" />
          </td>
          <td>
            <Chart data={humidities} color="black" />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K) </th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeathersList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  }
}

export default connect(mapStateToProps)(WeatherList);
