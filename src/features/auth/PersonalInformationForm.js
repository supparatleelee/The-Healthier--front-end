import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkUpdateUser } from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';

// import toastDisplayFailed from '../../Toast/toastDisplayFailed';
// import { validateRegister } from '../../validations/userValidation';

function PersonalInformationForm() {
  const dispatch = useDispatch();

  const initial = {};
  const [personalInfo, setPersonalInfo] = useState(initial);

  const changeInput = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    console.log(personalInfo);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!personalInfo.gender) {
      toastDisplayFailed('Please Select A Gender');
    }

    if (personalInfo.gender) {
      await dispatch(
        thunkUpdateUser(personalInfo, () => setPersonalInfo(initial))
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" onChange={changeInput}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <input
            id="birthDate"
            type="date"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="BirthDate"
            name="birthDate"
            // value={dataRegister?.firstName}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="height"
            type="number"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Height"
            name="height"
            // value={dataRegister?.lastName}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="weight"
            type="number"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Weight"
            name="weight"
            // value={dataRegister?.email}
            onChange={changeInput}
          />
        </div>
        <div>
          <input
            id="goal"
            type="text"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Goal"
            name="goal"
            // value={dataRegister?.password}
            onChange={changeInput}
          />
        </div>
        <button className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalInformationForm;
