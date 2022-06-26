import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './Components/Landing.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          {/* <Route path='*' element={<Notfound />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
