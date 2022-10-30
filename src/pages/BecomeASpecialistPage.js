import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpertiseModal from '../components/ui/ExpertiseModal';
import Modal from '../components/ui/Modal';
import SpecialistForm from '../features/auth/SpecialistForm';
import { showModalSpecialistForm } from '../reduxStore/AuthSlice';

function BecomeASpecialistPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const handleClickOpenModal = () => {
    try {
      dispatch(showModalSpecialistForm(true));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[86vh] w-screen bg-[url('/src/assets/images/specialist-landing-page-bg.png')] bg-no-repeat bg-cover">
      <div className="mt-32 inline-block w-[40%] ml-[86px]">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-[50px] text-primary">
            BECOME OUR SPECIALIST AND TEACH WITH US
          </h1>
          <p className="font-['lato'] font-medium text-[18px]">
            Become a specialist and change lives — including your own
          </p>

          <div>
            <button
              className="bg-primary text-white pl-[40px] pr-[40px] pt-3 pb-3 rounded-lg hover:bg-secondary"
              onClick={handleClickOpenModal}
            >
              Get Started
            </button>
          </div>
          <ExpertiseModal
            title="Specialist Information"
            modalOpen={state.isSpecialistFormModalOpen}
            onModalClose={() => dispatch(showModalSpecialistForm(false))}
          >
            <SpecialistForm />
          </ExpertiseModal>
        </div>
      </div>
    </div>
  );
}

export default BecomeASpecialistPage;
