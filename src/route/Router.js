import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HeaderLayout from '../layouts/header/HeaderLayout';
import LandingPage from '../pages/LandingPage';
import QuestionOne from '../pages/userPersonalInformation/QuestionOne';
import QuestionThree from '../pages/userPersonalInformation/QuestionThree';
import QuestionTwo from '../pages/userPersonalInformation/QuestionTwo';
import QuestionFour from '../pages/userPersonalInformation/QuestionFour';
import SurveyLayout from '../layouts/surveyHeader/SurveyLayout';
import HomePage from '../pages/HomePage';

function Router() {
  let user = 1;
  let userPI = 0; // validate if have user && all/some personal information is still null

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}

      {!userPI ? (
        <Route path="/" element={<SurveyLayout />}>
          <Route path="/:id/question-1" element={<QuestionOne />} />
          <Route path="/:id/question-2" element={<QuestionTwo />} />
          <Route path="/:id/question-3" element={<QuestionThree />} />
          <Route path="/:id/question-4" element={<QuestionFour />} />
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
