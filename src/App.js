import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    this._getRawData()
  }

  _getServiceTypeDatas(serviceType) {
    //console.log(this.state.rawData)
    const serviceTypeData = this.state.rawData.filter(object => {
      return object.serviceType === serviceType;
    });
    return serviceTypeData;
  }

  // 아래의 function들은 api 불러오는 함수이다.
  _getRawData = async() => {
    const rawData = await this._callApi()
    this.setState({
      rawData
    })
  }

  _callApi = () => {
    return fetch("https://apiv2.plating.co.kr/menu/daily?date=2018-02-14")
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  _renderComponents = () => {
    const rawData = this.state.rawData;
    //console.log(rawData)
    return (
      <div className="template">
        <div className="lunch">
          <Menu rawData={ rawData }/>
        </div>
      </div>
    )
  }

  render() {
    const { rawData } = this.state;
    return (
      <div className="App">
        { rawData ? this._renderComponents() : "Loading"}
      </div>
    );
  }
}

export default App;
