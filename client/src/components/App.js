import React from 'react';

import ItemList from '../containers/item-list';
import ItemDetails from '../containers/item-detail';

// Assets
import logo from './logo.svg';
import './App.css';



const App = () => (
  <div>
    <h2>Item List</h2>
    <ItemList />

    <h2>Item Detail</h2>
    <ItemDetails />
  </div>

);

export default App;

// class App extends Component {
//   state = {
//     response: ''
//   };
//
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//
//     if (response.status !== 200) throw Error(body.message);
//
//     return body;
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">{this.state.response}</p>
//       </div>
//     );
//   }
// }
//
// export default App;
