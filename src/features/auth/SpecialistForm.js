import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GoogleLogo } from '../../components/icons';
import {
  showModalSpecialistForm,
  thunkGooglelogin,
  thunkSignup,
} from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';
import { validateRegister } from '../../validations/userValidation';
import {
  showModalRegister,
  showModalPersonalInformation,
} from '../../reduxStore/AuthSlice';
import { useNavigate } from 'react-router-dom';
import {
  removeExData,
  setExData,
  thunkRegisterSpecialists,
} from '../../reduxStore/SpecialistSlice';
import * as expertiseService from '../../api/expertiseApi';

function SpecialistForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expertiseData, setExpertiseData] = useState([]);
  const [selectedExpertises, setSelectedExpertises] = useState([]);
  const state = useSelector((state) => state.specialist.exData);

  console.log(state);

  useEffect(() => {
    const fetchExpertiseData = async () => {
      const res = await expertiseService.getAllExpertises();
      setExpertiseData(res.data.allExpertise);
    };
    fetchExpertiseData();
  }, []);

  const initial = {
    area: '',
    years_of_experience: '',
    description: '',
    role: 'Specialist',
  };
  const [dataRegister, setDataRegister] = useState(initial);

  const expertisesInput = (e) => {
    if (e.target.checked) {
      setSelectedExpertises(e.target.value);
      dispatch(setExData(e.target.value));
    }
    if (!e.target.checked) {
      setSelectedExpertises(e.target.value);
      dispatch(removeExData(e.target.value));
      console.log(state);
    }
  };

  const changeInput = (e) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    dispatch(
      thunkRegisterSpecialists(dataRegister, () => setDataRegister(initial))
    );
    dispatch(showModalSpecialistForm(false));
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div>
          <input
            id="area"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Area Of Expertise"
            name="area"
            value={dataRegister?.area}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="years_of_experience"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Years of experience (Ex: 3 years)"
            name="years_of_experience"
            value={dataRegister?.years_of_experience}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="description"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Description"
            name="description"
            value={dataRegister?.description}
            onChange={changeInput}
          />
        </div>
        <div>
          {expertiseData.map((item) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={item.name}
                  onChange={expertisesInput}
                  value={item.id}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        </div>
        <button
          className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
          // onClick={() => navigate('/specialist-view')}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default SpecialistForm;
