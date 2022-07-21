import './App.css';
// import { useSelector, useDispatch } from 'react-redux'
// import { addUserData, clearUserData } from './redux-store/slices/userDataSlice'
import Home from "./Containers/html/Home"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    // const userData = useSelector(state => state.userData.value);
    // const dispatch = useDispatch()
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
