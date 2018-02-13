import React, { Component } from 'react';
import './AreaAndStock.css';

class AreaAndStock extends Component {
//api의 지역정보에 한글이 없어서.... ㅠㅠㅠ
_changeHangle = (area) => {
  if(area === 'seoul-1') return '강남';
  if(area === 'seoul-2') return '송파';
  if(area === 'sungnam-1') return '분당';
  if(area === 'SE-SP-MJ-1') return '문정';
  if(area === 'SE-MP-SS-1') return '신수';
  if(area === 'SE-YS-ITW-1') return '이태원';
  if(area === 'SE-J-EJR3-1') return '을지로';
  if(area === 'SE-SC-SC-1') return '서초';
  if(area === 'SE-GN-YS-1') return '역삼';
  //현재 안쓰는 지역
  if(area === 'SE-MP-SA-1') return '상암';
  //새벽
  if(area === 'kurly') return '새벽';
}

  render(){
    console.log(this.props)
    console.log(this.props.area)
      return(
        <div>
            <div className="areaTitle">
                <div>
                  {this._changeHangle(this.props.area)}
                </div>
            </div>

        </div>
      )
  }
}

export default AreaAndStock;
