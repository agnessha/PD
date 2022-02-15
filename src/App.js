import logo from './logo.svg';
import './App.css';
import { extendTheme , ChakraProvider } from '@chakra-ui/react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import store from './redux/store'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import TodayCon from "./components/Today/Today";





const App = () => {
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
                    <TodayCon />
                </div>
            </div>
        </ChakraProvider>
        </Provider>
    );
}

export default App;
