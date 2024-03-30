import { Routes, Route } from "react-router-dom";
import React from 'react';

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
import SignUp from './pages/SignUp'

{/* John W Ridley */ }
import DisplayThreads from './components/displayThreads';
import DisplayThreadReplies from './components/displayThreadReply';

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />

        {/* John W Ridley */}
        <Route path="/forum" Component={DisplayThreads} />
        <Route path="displayTHreadReply/:thread_id" Component={DisplayThreadReplies} />
      </Routes>
    </div>
  );
}

export default App;
