export const MainSkeleton = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6 max-w-[1600px] mx-auto w-full md:p-8 md:gap-8 lg:p-12 lg:gap-10 lg:items-start xl:gap-12 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px]">
        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-gray-300 shadow-md md:aspect-video md:rounded-3xl lg:aspect-[4/3]" />
      </div>

      {/* Info Section Skeleton */}
      <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px] flex flex-col gap-4">
        {/* ID and Author Card Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded w-8 md:h-5" />
              <div className="h-5 bg-gray-300 rounded w-16 md:h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded w-14 md:h-5" />
              <div className="h-5 bg-gray-300 rounded w-24 md:h-6" />
            </div>
          </div>
        </div>

        {/* Width and Height Card Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded w-12 md:h-5" />
              <div className="h-5 bg-gray-300 rounded w-20 md:h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded w-14 md:h-5" />
              <div className="h-5 bg-gray-300 rounded w-20 md:h-6" />
            </div>
          </div>
        </div>

        {/* URLs Card Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 mb-4">
              <div className="h-4 bg-gray-200 rounded w-10 md:h-5" />
              <div className="h-4 bg-gray-300 rounded w-full md:h-5" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="h-4 bg-gray-200 rounded w-28 md:h-5" />
              <div className="h-4 bg-gray-300 rounded w-full md:h-5" />
            </div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="w-full flex justify-center items-center px-6 pb-8 md:px-8 md:pb-10 lg:px-16 lg:pb-12">
          <div className="bg-gray-300 rounded-xl w-full max-w-[320px] h-[50px] md:max-w-[400px] md:h-[58px] lg:max-w-[450px] lg:h-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default MainSkeleton;
