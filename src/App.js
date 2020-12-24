import './App.css';

import Header from './components/Header/Header'
import HotelList from './components/HotelList/HotelList'
import LoginForm from './components/auth/LoginForm/LoginForm'
import FilterBar from './components/FilterBar/FilterBar'
import { useDispatch, useSelector  } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { setHotels } from './reducers/hotel/actions'
import API from './utils/API';
import HotelInfo from "./components/HotelInfo/HotelInfo";
import {setCities} from "./reducers/city/actions";

const App = (props) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    API.get('/hotels')
        .then((response) => {
          dispatch(setHotels(response.data))
        });

    API.get('/cities')
        .then((response) => {
            dispatch(setCities(response.data))
        })
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={auth.isLoggedIn}/>
        <FilterBar />
         <Route path='/login' component={LoginForm}/>
         <Route exact path='/' component={() => <HotelList/>} />
         <Route
             path='/hotelinfo'
             render={routerProps => <HotelInfo { ...routerProps }/>} />
       </div>
     </BrowserRouter>
  );
}

export default App;
