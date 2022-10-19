import { Outlet } from 'react-router-dom';
import SurveyHeader from './SurveyHeader';
import SurveyContainer from '../surveyContainer/SurveyContainer';
import SurveyFooter from '../surveyFooter/SurveyFooter';

function SurveyLayout() {
  return (
    <div>
      <SurveyHeader />
      <SurveyContainer>
        <Outlet />
      </SurveyContainer>
      <SurveyFooter />
    </div>
  );
}

export default SurveyLayout;
