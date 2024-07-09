import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/body'
import BodySuits from './components/BodySuits';
import Discover from './components/Discover';
import Robots from './components/Robots';
import Starters from './components/Starters';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    <Body/>
    <BodySuits/>
    <Discover/>
    <Robots/>
    <Starters/>
    <Footer/>
    </>
  );
}

export default App;
