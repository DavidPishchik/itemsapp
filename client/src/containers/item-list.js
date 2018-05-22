import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectedItem } from '../actions/index';

class ItemList extends Component {
  renderList() {
        return this.props.items.map((item) => {
            return (
                <li key={item.id}
                    onClick={() => this.props.selectedItem(item)}
                >
                    {item.first} {item.last}
                </li>
            );
        });
    }


   render() {
     console.log("render", this.props.items);
     return (
       <ul>

         {this.renderList()}
       </ul>
     );
   }
}
function mapStateToProps(state) {
  return {
    items: state.items,
  };

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectedItem: selectedItem }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
