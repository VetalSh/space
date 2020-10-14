import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

import FetchData from './service/FetchData';
 
import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
  };

  componentDidMount() {
    console.log(this.fetchData);
  }
  
  render(){
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket}/>
        <Features />        
        <Footer />        
      </>
    );
  };
}

export default App;
