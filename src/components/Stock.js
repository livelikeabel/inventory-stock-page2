import React, { Component } from 'react';
import './Stock.css';

class Stock extends Component {

  _filteringMenu = (menuName, menuData) => {
    const filteredData = menuData.filter(object => {
      return object.menuInformation.name.short === menuName
    })
    return filteredData;
  }

  _getStock = (data) => {
    if(data === undefined) return null
    return data.remain
  }

  render(){
    // console.log(this.props)
    const menuName = this.props.menuName;
    const menuData = this.props.menuData;

    const filteredMenuData = this._filteringMenu(menuName, menuData)[0]
    const stock = this._getStock(filteredMenuData)


    return(
      <div className={ stock === 0 ? "emptyStock" : "stock"}>
          { stock }
      </div>
    )
  }
}

export default Stock;
