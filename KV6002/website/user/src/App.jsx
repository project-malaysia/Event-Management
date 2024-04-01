import { Routes, Route, Link } from "react-router-dom";

{/* Petros Tamboutsiaris */ }
import Menu from './components/Menu';
import AboutPage from './pages/AboutPage';
import Calendar from './pages/Calendar';
import NotFoundPage from './pages/NotFoundPage';
import UpdateAboutPage from './components/UpdateAboutPage';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import DeleteEvent from './components/DeleteEvent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UpdatePrivacyPolicy from './components/UpdatePrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import UpdateTermsOfService from './components/UpdateTermsOfService';

{/* Shuhan Wali */ }
import Signin from './pages/Signin'
import SignUp from './components/SignUp'

{/* John W Ridley */ }
import Forum from './pages/Forum';
import DisplayThreadReplies from './components/displayThreadReply';

{/* Nabil Rahman */ }
import AddEvent1 from './components/AddEvent1';
import DeleteEvent1 from './components/DeleteEvent1';
import UpdateEvent from './components/UpdateEvent';
import Administrator from './components/Administrator';

{/* Rhys Roberts */ }
import EventRegistration from './components/EventRegistration';

/**
* App component.
*
* This component represents the rooter of the application.
*
* @author Petros Tamboutsiaris W21004471
*/

function App() {

  return (
    <div className="App">
      <Menu />
      <Routes>
        {/* Petros Tamboutsiaris */}
        <Route path="/" element={<Calendar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar-events/" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/homepage/update-homepage/" element={<UpdateAboutPage />} />
        <Route path="/privacy-policy/update-privacy-policy/" element={<UpdatePrivacyPolicy />} />
        <Route path="/terms-of-service/update-terms-of-service/" element={<UpdateTermsOfService />} />
        <Route path="/events/add-event/" element={<AddEvent />} />
        <Route path="/events/delete-event/:event_id" element={<DeleteEvent />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Shuhan Wali */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* John W Ridley */}
        <Route path="/forum" Component={Forum} />
        <Route path="displayTHreadReply/:thread_id" Component={DisplayThreadReplies} />

        {/* Nabil Rahman */}
        <Route path="/AddEvent" element={<AddEvent1 />} />
        <Route path="/DeleteEvent" element={<DeleteEvent1 />} />
        <Route path="/UpdateEvent" element={<UpdateEvent />} />
        <Route path="/Administrator" element={<Administrator />} />

        {/* Rhys Roberts */}
        <Route path="/attendance" element={<EventRegistration />} />
      </Routes>
    </div>
  );
}

export default App;