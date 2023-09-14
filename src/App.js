import RedContainer from './RightPanel/RightPanel';
import './App.css';
import CalendarComponent from './CalendarComponent/CalendarComponent';
import NotificationCenter from './NotificationCenter/NotificationCenter';
import NotificationCard from './NotificationCards/NotificationCards';
import ButtonNav from './ButtonNav/ButtonNav.jsx';
import SlideBar from './SlideBar/SlideBar.jsx';
import NavbarStudent from './NavbarStudents/NavbarDashboardStudents.jsx';
const notification = [
  'Notificación 1',
  'Notificación 2',
  'Notificación 3',


];


function App() {
  return (

   
        <div class="row ">
          <div class="col-2">
            <SlideBar/>
         </div>
          <div class="col-10">
            <NavbarStudent/>
          </div>
          
        </div>
    
    // <div className="MainPanel">

    //   <div className="right-panel">
    //     <RedContainer />


    //     <div className="calendar-and-notifications">
    //       <div className="calendar">
    //         <CalendarComponent />
    //       </div>
    //       <div className="notifications">
    //         <NotificationCenter />
    //       </div>

    //       <div className="NotificationCard">
    //       <NotificationCard notifications={notification} />
    //       </div>
    //     </div>

    //   </div>

    // </div>

  );
}

export default App;

