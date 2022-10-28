import { GlobalStyle } from './GlobalStyle';
// import { DetailsPage } from './pages/DetailsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { results }  from './Data/data'

function App() {
  return (
    <div>
      <GlobalStyle />
      <HomePage results={results}/>
      {/* <DetailsPage /> */}
    </div>
  );
}

export default App;