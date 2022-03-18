import './App.css';
import {  ChakraProvider } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import store from './redux/store'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import TodayCon from "./components/Today/Today";
import CalendarCon from "./components/Calendar/Calendar";





const App = () => {
    console.log(store.getState().navbar.navbarActive)
    return (
        <Provider store={store}>
        <ChakraProvider>
            <div className="App">
                <div className='header'>
                    <Header />
                </div>
                <div className='navbar'>
                    <NavbarContainer />
                </div>
                <div className='AppInner'>
                    <Routes>
                        <Route path='/' element={<TodayCon/>}/>
                        <Route path='/calendar' element={<CalendarCon />}/>
                    </Routes>
                </div>
            </div>
        </ChakraProvider>
        </Provider>
    );
}

export default App;
