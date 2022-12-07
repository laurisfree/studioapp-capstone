// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import TeacherInfo from './components/TeacherInfo/TeacherInfo'
import UserUpcomingClass from './components/UserUpcomingClass/UserUpcomingClass';
import Buy from './components/Buy/Buy';


export default function App() {
  return (
    <div className="App">

      <Header />
      <Schedule />
      <TeacherInfo />
      <UserUpcomingClass />
      <Buy />
    </div>
  );
}


