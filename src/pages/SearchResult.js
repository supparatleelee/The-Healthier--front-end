import { useLocation } from 'react-router-dom';
import SpecialistItem from '../features/recommendedSpecialists/SpecialistItem';

function SearchResult() {
  const { state } = useLocation();

  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <div className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Search Results
      </div>

      <div className="flex flex-wrap justify-start gap-3">
        {state.map((item, index) => (
          <SpecialistItem
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            description={item.description}
            // area={[item.area]}
            area={item.area}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
