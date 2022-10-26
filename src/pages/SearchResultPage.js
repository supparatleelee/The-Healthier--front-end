import { useLocation } from 'react-router-dom';
import SpecialistItem from '../features/recommendedSpecialists/SpecialistItem';

function SearchResultPage() {
  const { state } = useLocation();

  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <div className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Search Results
      </div>

      <div className="flex flex-wrap justify-between gap-3">
        {state.map((item, index) => (
          <SpecialistItem
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            description={item.description}
            id={item.id}
            area={item.area}
            profileImage={item.profileImage}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResultPage;
