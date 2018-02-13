import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

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
    return this._uniq(arr);
  }

  _uniq = (arr) => {
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

  render(){
    const { rawData } = this.props
    const lunchType = "LUNCH";
    const dinnerType = "DINNER";
    const lunchTypeData = this._getServiceTypeDatas(lunchType, rawData);
    const dinnerTypeData = this._getServiceTypeDatas(dinnerType, rawData);
    const removedDuplicateLunchMenus = this._getArrayOfMenus(lunchTypeData);
    const removedDuplicateDinnerMenus = this._getArrayOfMenus(dinnerTypeData);

    return(
      <div>
        <div>lunch
          <div className="menuTitle">
            menu
          </div>
          { this._makeDivtagList(removedDuplicateLunchMenus)}
        </div>

        <div>dinner
          <div className="menuTitle">
            menu
          </div>
          { this._makeDivtagList(removedDuplicateDinnerMenus)}
        </div>
      </div>
    )
  }
}

export default Menu;
