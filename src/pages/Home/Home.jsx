import './Home.scss'
import Header from '../../components/Header/Header';
import UserUpcomingClass from '../../components/UserUpcomingClass/UserUpcomingClass'
import UserProfile from '../../components/UserProfile/UserProfile';

export default function Home (){
    return (
        <>
        
        <Header />
        <UserProfile />
        <UserUpcomingClass />
        
        
        </>
    )
}