import React, { Component } from 'react';
import './Menu.css';
import AreaAndStock from './AreaAndStock';

class Menu extends Component {
  // 런치 데이터를 가지고 지역을 뽑아야 하나...? 새벽을 제외하고 점심 저녁은 같으니까 점심데이터 가져다 쓸까..?
  _getAreaList = (rawData) => {
    const arr = [];
    for(let object of rawData) {
      arr.push(object.area)
    }
    return this._getUniq(arr);
  }

  _getServiceTypeDatas = (serviceType, rawData) => {
    const serviceTypeData = rawData.filter(object => {
      return object.serviceType === serviceType;
    });
    return serviceTypeData;
  }

  _getArrayOfMenus = (data) => {
    const arr = [];
    for(let object of data) {
      arr.push(object.menuInformation.name.short)
      }
    return this._getUniq(arr);
  }

  _getUniq = (arr) => {
      var seen = {};
      return arr.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }

  _makeDivtagList = (arr) => {
      const results = arr.map((element) => {
        return <div className="menu"> { element } </div>
      })
    return results
  }

//현재 순회하고 있는 지역데이터도 넘겨주어야 한다
  _makeDivtagAreaAndStocks = (arr,serviceTypeData,serviceTypeMenus) => {
    const reaults = arr.map((element) => {
      return <AreaAndStock area={element} data={ serviceTypeData } menus={serviceTypeMenus}/>
    })
    return reaults
  }

  render(){
    const { rawData } = this.props
    const lunchType = "LUNCH";
    const dinnerType = "DINNER";
    const lunchTypeData = this._getServiceTypeDatas(lunchType, rawData);
    const dinnerTypeData = this._getServiceTypeDatas(dinnerType, rawData);
    const removedDuplicateLunchMenus = this._getArrayOfMenus(lunchTypeData);
    const removedDuplicateDinnerMenus = this._getArrayOfMenus(dinnerTypeData);
    const areaList = this._getAreaList(rawData);

    // console.log(removedDuplicateLunchMenus)
    // console.log(removedDuplicateDinnerMenus)
    return(
      <div>
          <h2>lunch</h2>
          <div className="lunch">
              <div className="menuList">
                  <div className="menuTitle">
                    menu
                  </div>
                  { this._makeDivtagList(removedDuplicateLunchMenus)}
              </div>

              <div className="areaAndStockList">
                  { this._makeDivtagAreaAndStocks(areaList, lunchTypeData,removedDuplicateLunchMenus)}
              </div>
          </div>

          <h2>dinner</h2>
          <div className="dinner">
              <div className="menuList">
                  <div className="menuTitle">
                    menu
                  </div>
                  { this._makeDivtagList(removedDuplicateDinnerMenus)}
              </div>

              <div className="areaAndStockList">
                  { this._makeDivtagAreaAndStocks(areaList, dinnerTypeData, removedDuplicateDinnerMenus)}
              </div>
          </div>
      </div>
    )
  }
}

export default Menu;
