import React from 'react'
import { GlobalStyle } from './GlobalStyle';
import background from './image/image_backgroud.jpg'
import Router from './router/Router';

function App() {

  return (

  <body className='backImg' style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Router />
        <GlobalStyle />
      </div>
    </body>

  );
}

export default App;