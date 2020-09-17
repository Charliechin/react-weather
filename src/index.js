import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
// import faker from 'faker';


class App extends React.Component {

  state = { lat: null, long: null, errMsg: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }

  // componentDidUpdate() {
  //   console.log('My compo was updated');
  // }

  // React says we have to define render!!
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>
    }

    if (!this.state.errorMsg && this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          long={this.state.long}
          err="" />
      )
    }

    return (<div>Loading...</div>);

  }
}

ReactDOM.render(<App />, document.querySelector('#root'))