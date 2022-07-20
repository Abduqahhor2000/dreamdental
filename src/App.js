import './App.css';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { addUserData, clearUserData } from './redux-store/slices/userDataSlice'

function App() {
    const userData = useSelector(state => state.userData.value);
    const dispatch = useDispatch()
    return (
        <div className="App">
            <Button onClick={()=>{dispatch(addUserData(1000))}} variant="success">Add</Button>
            <Button onClick={()=>{dispatch(clearUserData())}} variant="danger">Clear</Button>
            {userData}
        </div>
    );
}

export default App;
