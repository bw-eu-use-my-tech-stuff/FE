import React from "react";
import "../styles/Home.css";
import SearchForm from './SearchForm';
import ItemsForRent from './ListOfRentItems';

function Home() {
  return (
    <div>

<header className="sans-serif">
  <div className="cover bg-left bg-center-l">
    <div className="bg-black-80 pb5 pb6-m pb7-l">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/login" >Rent your Equiptment</a> 
        </div>
      </nav> 
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Rent Tech Equiptment You Need</h1>
        <h2 className="fw1 f3 white-80 mt3 mb4">Let your tech equiptment make money for you.</h2>
        <SearchForm/>
      </div>
    </div>
  </div> 
</header>
<ItemsForRent/>
    </div>
  );
}

export default Home;
