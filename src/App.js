import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import './style.scss'
import Provider from "./utils/Provider";
import 'flickity/dist/flickity.min.css'

function App() {
  return (
    <Provider>
        <BrowserRouter>
          <Routes>
             <Route path="/" exact element={<Home />}/>
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
