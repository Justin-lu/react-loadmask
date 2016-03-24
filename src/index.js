import './style.css';
import React from 'react';

class LoadMask extends React.Component {
  render() {
    const { dataLength, isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="loading-center" >
          <div id="circularG">
            <div id="circularG_1" className="circularG"></div>
            <div id="circularG_2" className="circularG"></div>
            <div id="circularG_3" className="circularG"></div>
            <div id="circularG_4" className="circularG"></div>
            <div id="circularG_5" className="circularG"></div>
            <div id="circularG_6" className="circularG"></div>
            <div id="circularG_7" className="circularG"></div>
            <div id="circularG_8" className="circularG"></div>
          </div>
        </div>
      );
    }

    if (dataLength === 0) {
      return (
        <div className="loading-center" >
          <span>暂无数据</span>
        </div>
      );
    }

    return this.props.children;
  }
}

LoadMask.propTypes = {
  dataLength: React.PropTypes.number.isRequired,
  isLoading: React.PropTypes.bool,
  children: React.PropTypes.element.isRequired,
};

export default LoadMask;
