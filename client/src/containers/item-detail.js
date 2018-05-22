import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ItemDetail extends  React.Component {
  render() {
    if (!this.props.item){
      return(<div> select user </div>);
    }
    return (
      <div>
        {this.props.item}
      </div>
    );

  }
};
function mapStateToProps(state) {
  return {
    item: state.activeItem,
  };
}

export default connect(mapStateToProps)(ItemDetail);
