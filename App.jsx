import React, { Component } from "react";


import Headers from './src/components/Header.jsx'
import Sidebar from './src/components/Sidebar.jsx'
import {MainFeed} from './src/container';



class App extends Component {
	constructor(props){
		super(props);

	};

  render() {
    return (
      <div>
       <Headers/>
        <main className="container">
          <Sidebar />
          <MainFeed />
        </main>
      </div>
    );
  }
}

export default App;