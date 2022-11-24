import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkUpdateUser } from '../../reduxStore/AuthSlice';
import toastDisplayFailed from '../../Toast/toastDisplayFailed';

function PersonalInformationForm({ onModalClose }) {
  const dispatch = useDispatch();

  const initial = {};
  const [personalInfo, setPersonalInfo] = useState(initial);

  console.log(personalInfo);

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
      onModalClose();
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <div className="flex items-center">
          <label htmlFor="gender" className="font-medium mr-[1.8vw]">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            onChange={changeInput}
            className="rounded-xl border-gray-400 w-full h-[6.2vh]"
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="birthDate" className="font-medium mr-3">
            Birthdate
          </label>
          <input
            id="birthDate"
            type="date"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="BirthDate"
            name="birthDate"
            onChange={changeInput}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="height" className="font-medium mr-[2.2vw]">
            Height
          </label>
          <input
            id="height"
            type="number"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Height"
            name="height"
            onChange={changeInput}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="weight" className="font-medium mr-[2vw]">
            Weight
          </label>
          <input
            id="weight"
            type="number"
            className="rounded-xl w-full h-[6.2vh] border-gray-400"
            placeholder="Weight"
            name="weight"
            onChange={changeInput}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="goals" className="font-medium mr-[3.2vw]">
            Goal
          </label>
          <select
            id="goals"
            name="goals"
            onChange={changeInput}
            className="rounded-xl w-full border-gray-400 h-[6.2vh]"
          >
            <option value="">Select your goal here</option>
            <option value="Back Pain">Back Pain</option>
            <option value="Headache">Headache</option>
            <option value="Neck and Shoulder Ache">
              Neck and Shoulder Ache
            </option>
            <option value="Lowerbody Pain">Lowerbody Pain</option>
            <option value="Ready to Play">Recover - Ready to Play</option>
            <option value="After Surgery Recovery">
              Recover - After Surgery
            </option>
            <option value="Slimming">Slimming</option>
            <option value="Burn Fat">Burn Fat</option>
            <option value="Building Muscle">Build Muscle - All Body</option>
            <option value="Just for Fun">Just for Fun</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalInformationForm;
