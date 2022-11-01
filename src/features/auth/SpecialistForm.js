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
  thunkCreateSpecialistExpertises,
  thunkRegisterSpecialists,
} from '../../reduxStore/SpecialistSlice';
import * as expertiseService from '../../api/expertiseApi';

function SpecialistForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expertiseData, setExpertiseData] = useState([]);
  // const [selectedExpertises, setSelectedExpertises] = useState([]);
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
      // setSelectedExpertises(e.target.value);
      dispatch(setExData(e.target.value));
    }
    if (!e.target.checked) {
      // setSelectedExpertises(e.target.value);
      dispatch(removeExData(e.target.value));
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
    dispatch(thunkCreateSpecialistExpertises({ expertiseIds: state }));
    dispatch(showModalSpecialistForm(false));
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-2">
          <label htmlFor="area" className="font-medium mr-3">
            Area of Expertise
          </label>
          {/* ENUM('Nutritionist', 'Physiotherapist', 'Personal Trainer') */}
          <select
            id="area"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Area Of Expertise"
            name="area"
            onChange={changeInput}
          >
            {/* value={dataRegister?.area} */}
            <option value="">Choose your area of expertise here</option>
            <option value="Nutritionist">Nutritionist</option>
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Personal Trainer">Personal Trainer</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="years_of_experience" className="font-medium mr-3">
            Year(s) of Experience
          </label>
          <input
            id="years_of_experience"
            // หลังบ้านเก็บเป็น datetime ? ที่จริงเก็บเป็น integer แล้วหน้าบ้านเก็บเป็น type="number" น่าจะดีกว่า เพราะ user คงจำวันที่เรื่มทำไม่ได้
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Years of experience (Ex: 3 years)"
            name="years_of_experience"
            value={dataRegister?.years_of_experience}
            onChange={changeInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-medium mr-3">
            Description
          </label>
          <textarea
            id="description"
            className="rounded-xl w-full h-[15vh] border-gray-400 resize-none"
            placeholder="Description"
            name="description"
            value={dataRegister?.description}
            onChange={changeInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expertises" className="font-medium mr-3">
            Expertises
          </label>
          <div>
            {expertiseData.map((item) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    id={item.name}
                    onChange={expertisesInput}
                    value={item.id}
                    className="rounded-md mr-3"
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </div>
              );
            })}
          </div>
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
