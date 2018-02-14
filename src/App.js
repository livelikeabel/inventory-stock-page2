import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentWillMount() {
    const nowDate = this._getDate();
    console.log(nowDate)
    this._getRawData(nowDate)
  }

  _getDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    today = yyyy+'-'+mm+'-'+dd;
    return today;
  }

  _getServiceTypeDatas(serviceType) {
    //console.log(this.state.rawData)
    const serviceTypeData = this.state.rawData.filter(object => {
      return object.serviceType === serviceType;
    });
    return serviceTypeData;
  }

  // 아래의 function들은 api 불러오는 함수이다.
  _getRawData = async(nowDate) => {
    const rawData = await this._callApi(nowDate)
    this.setState({
      rawData
    })
  }

  _callApi = (nowDate) => {
    return fetch(`https://apiv2.plating.co.kr/menu/daily?date=${nowDate}`)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  _renderComponents = () => {
    const rawData = this.state.rawData;
    //console.log(rawData)
    return (
      <div className="template">
          <Menu rawData={ rawData }/>
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
