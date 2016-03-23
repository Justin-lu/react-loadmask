import './style.scss';
import React from 'react';

class LoadMask extends React.Component {
  render() {
    const { dataLength, isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="loading-center" >
          <div className="loader">Loading...</div>
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
