import SpecialistItem from '../features/recommendedSpecialists/SpecialistItem';

function SearchResult() {
  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <div className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Search Results
      </div>

      <SpecialistItem />
    </div>
  );
}

export default SearchResult;
