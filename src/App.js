import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonials/Testimonial';
import Skill from './components/Skills/Skill'
import Project from './components/Projects/Project'
function App() {
  return (
    
    <div className="App">
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='testimonials' element={<Testimonial/>}/>
        <Route path='skills' element={<Skill/>}/>
        <Route path='projects' element={<Project/>}/>
      </Routes>
      </div>
      <div>
        
      </div>
    </div>
    
  );
}

export default App;
