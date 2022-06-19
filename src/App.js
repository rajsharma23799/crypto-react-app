import React from 'react';

import Card from './Card/Card';
import axios from 'axios';
function App() {
  const [state, setstate] = React.useState();
  React.useEffect(() => {
    axios.get('https://api.nomics.com/v1/currencies/ticker?key=1df81bf714bda84c6156c89f04e64bc9c8cb5644',{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
      }
    })
  .then(res=> setstate(res.data))

  }, [state]);
  return (
    <div className="App">
      <nav className="navbar bg-dark navbar-dark fixed-top">
        <div className="container-fluid text-center">
          <h1 className="navbar-brand mb-0 h1 ms-3"><i className="fa-solid fa-coins pe-1 text-info"></i>  Crypto Status</h1>
        </div>
      </nav>
    <div className="container-fluid bg-light mt-5">
       <div className="row">
          <ul className="list-group pe-0 ps-2">
            {
              state !== undefined ? state.map(item => <Card key={item.name} name={item.name} price={item.price} cap={item.market_cap_dominance} symbol={item.symbol} img={item.logo_url} high={item.high} date = {item.price_timestamp}/>):""
            }
          </ul>
       </div>
    </div>  
    </div>
  );
}

export default App;
