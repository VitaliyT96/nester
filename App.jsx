import React, { Component } from "react";
import Headers from './src/components/Header.jsx'
import Sidebar from './src/components/Sidebar.jsx'
import Feed from './src/components/Feed.jsx' 




class App extends Component {
  render() {
    return (
      <div>
       <Headers/>
        <main className="container">
          <Sidebar />
          <Feed />
        </main>
      </div>
    );
  }
}

export default App;