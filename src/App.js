import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/SideBar';

function App() {
  return (
    <>
      <Header title="Header" />
      <div
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <Sidebar title="Sidebar"/>
        <Content title="Content"/>
      </div>
      <Footer title="Footer"/>
    </>
  );
}

export default App;
