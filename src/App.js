import React from 'react';
import { AppProvider } from './context/AppContext';
import {Route, Redirect} from "react-router-dom";
import Home from "./screens/Home";
import LoginScreen from './screens/LoginScreen';
import Header from './components/Header';
import RegisterUserScreen from './screens/RegisterUserScreen';
import { Container } from 'react-bootstrap';
import "./bootstrap.min.css";

const App = () => {

	let user = JSON.parse(localStorage.getItem("userInfo"))
	
	return (
		
		<AppProvider>
			<Header/>
			<Container>
			<Route path="/" exact>
				{user ? <Redirect to="/home"/>:<Redirect to="/login"/>}
</Route>
			<Route path="/login" component={LoginScreen}/>
            <Route path="/home" component={Home} exact />
			<Route path="/register" component={RegisterUserScreen}/>
			</Container>
		</AppProvider>
	);
};

export default App;
