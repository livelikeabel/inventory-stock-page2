import React, { Component } from 'react';
import './Sum.css';

class Sum extends Component{

  _addAllRemainStock = (menus) => {
      var sumRemainStock = 0;
      for (let menu of menus) {
          sumRemainStock += menu.remain;
      }
      return sumRemainStock;
  }

  _getRemainStock = (menu, serviceTypeData) => {
      const sameMenus = serviceTypeData.filter(object => {
        return object.menuInformation.name.short === menu
      })
      return this._addAllRemainStock(sameMenus);
  }

  _makeDivtagList = (arr, serviceTypeData) => {
      const results = arr.map((element) => {
        const remainStock = this._getRemainStock(element, serviceTypeData)
        return <div className="sumStock"> { remainStock } </div>
      })
    return results
  }

    render(){
        const menuList = this.props.menuList;
        const serviceTypeData = this.props.serviceTypeData
        return(
            <div>
                <div className="sumTtile">합계</div>
                { this._makeDivtagList(menuList, serviceTypeData) }
            </div>
        )
    }
}

export default Sum
