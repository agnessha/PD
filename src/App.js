import '../src/App.css';
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
import Basic from "./components/Calendar/Calendar2";
import DemoApp from "./components/Calendar/Calendar2";





const App = () => {
    return (
        <Provider store={store}>
        <ChakraProvider>
            <div className="App">
                <div>
                    <Header />
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
