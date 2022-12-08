// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Book from './pages/Book/Book'
import Buy from './pages/Buy/Buy'
import Dancer from './pages/Dancer/Dancer'
// import Header from './components/Header/Header';
// import Schedule from './components/Schedule/Schedule';
// import TeacherInfo from './components/TeacherInfo/TeacherInfo'
// import UserUpcomingClass from './components/UserUpcomingClass/UserUpcomingClass';
// import BuyPasses from './components/BuyPasses/BuyPasses';

import { BrowserRouter, Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/dancer' element={<Dancer />}/>
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Schedule />
      <TeacherInfo />
      <UserUpcomingClass />
      <BuyPasses /> */}
    </div>
  );
}


