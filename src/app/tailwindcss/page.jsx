'use client';

// note
// hidden md:block, this will show when its blocked
// md:hidden - will show and unhide the inline-block

const TailwindHome = () => {
  return (
    <div className="navbar bg-red-400 flex justify-between items-center p-4">
      <div className="flex justify-center items-center md:order-2">
        <div className="relative hamburger inline-block p-4 cursor-pointer md:hidden">
          <div className="line h-0.5 w-6 bg-black my-1"></div>
          <div className="line h-0.5 w-6 bg-black my-1"></div>
          <div className="line h-0.5 w-6 bg-black my-1"></div>
        </div>
        <div className="search bg-blue-700 hidden">search Icon</div>
      </div>
      <div className="logo text-center md:order-1">Microsoft</div>
      <div className="logo text-center  md:order-3 flex">
        <div className="search bg-blue-700 hidden md:block">search Icon</div>
        <div>Cart Account</div>
      </div>
    </div>
  );
};

export default TailwindHome;
