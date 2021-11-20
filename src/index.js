import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css';
import App from "./components/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.render(
		<React.StrictMode>
			<Navbar/>
			<App/>
			<Footer/>
		</React.StrictMode>,
		document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
