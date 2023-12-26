const Display = () => {
  return (
    <div className="flex items-start justify-center w-full gap-4 p-8 bg-white">
      <img
        src=""
        alt=""
        className="hidden xl:block w-[200px] h-[200px] bg-light-blue"
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full">
          <div className="xl:hidden">
            <img src="" alt="" className="w-[200px] h-[200px] bg-light-blue " />
          </div>
          <div className="flex flex-col items-start w-full xl:justify-between xl:flex-row">
            <div className="">
              <p>The Octocat</p>
              <p>@octocat</p>
            </div>
            <div className="">
              <p className="text-left xl:text-right">Joined 25 Jan 2011</p>
            </div>
          </div>
        </div>
        <div>
          <p>This profile has no bio</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full p-6">
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>11593</p>
          </div>
          <div>
            <p>Following</p>
            <p>9</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:flex-row">
          <div className="w-full">
            <p>Dhaka, Bangladesh</p>
            <p>thatanjan</p>
          </div>
          <div className="w-full">
            <p>thatankan.com</p>
            <p>Droppe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
