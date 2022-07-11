
import './App.scss';
import Main from './components/Main'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
function App() {
 
  return (
    <div  className="App"> 
      <header className="App-header">
      <Navigation/>

      </header>
      <Main/>

       <Footer/>
      
    </div>
  );
}

export default App;
