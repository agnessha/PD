import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Notes from "./components/Notes/Notes";
import Calendar from "./components/Calendar/Calendar";


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className='app-inner'>
        <Navbar />
            <div className="app-inner-content">
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path='/calendars' element={<Calendar />} />
                </Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
