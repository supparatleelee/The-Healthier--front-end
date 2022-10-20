import PackageItem from '../components/ui/PackageItem';

function PackagePage() {
  return (
    <div className="mt-10 ml-[86px] mr-[100px]">
      <h1 className="homepage-title  mt-5 mb-2 font-semibold text-[20px]">
        Package
      </h1>

      <p className="text-darkGrey text-[18px] mt-5">
        Lorem ipuse weros khfe iwelrkjs jskdf
      </p>

      <div className="package-container flex gap-3 mt-10 justify-between">
        <PackageItem />
        <PackageItem />
        <PackageItem />
      </div>
    </div>
  );
}

export default PackagePage;
