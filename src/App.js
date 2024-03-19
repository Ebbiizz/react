import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UC from './pages/UC';
import Skyltar from './pages/Skyltar';
import Fordonsdekor from './pages/Fordonsdekor';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import './App.css'; 


function App() {
  return (
   <div>
	<Router>
		<Header />
		<Nav />
		<Switch>
			<Route exact path="/"><Home /></Route>
			<Route exact path="/about"><About /></Route>
			<Route path="/contact"><Contact /></Route>
			<Route path="/skyltar"><Skyltar /></Route>
			<Route path="/fordonsdekor"><Fordonsdekor /></Route>
			<Route path="/uc"><UC /></Route>
		</Switch>
		<Footer />
	</Router>
   </div>
  );
}

export default App;
