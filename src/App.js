import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ItemManagement from "./components/ItemManagement";
import MenuManagement from "./components/MenuManagement";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/join" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/itemManagement" component={ItemManagement} />
        <Route path="/menuManagement" component={MenuManagement} />
      </Switch>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};
export default App;
