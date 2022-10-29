import { useSelector } from 'react-redux';
import YourSpecialistItem from '../features/yourSpecialists/YourSpecialistItem';

function YourSpecialistPage() {
  const mySpecialistsData = useSelector((state) => state.session.mySpecialists);

  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <h1 className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Your Specialists
      </h1>
      {mySpecialistsData.map((item, index) => (
        <YourSpecialistItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

export default YourSpecialistPage;
