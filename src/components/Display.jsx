/* eslint-disable react/prop-types */
import { dateFotmat } from "../../utils";
const Display = ({ user }) => {
  console.log("🚀 ~ file: Display.jsx:3 ~ Display ~ user:", user);
  return (
    <div className="flex items-start justify-center w-full gap-4 p-8 mt-4 bg-white shadow-md rounded-2xl">
      <img
        src={user?.avatar_url}
        alt=""
        className="hidden xl:block w-[160px] h-[160px] bg-light-blue rounded-full"
      />
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-row w-full">
          <div className="xl:hidden">
            <img src="" alt="" className="w-[200px] h-[200px] bg-light-blue " />
          </div>
          <div className="flex flex-col items-start w-full xl:justify-between xl:flex-row">
            <div className="">
              <p className="text-2xl font-bold">{user?.login}</p>
              <a href={user?.html_url} className="text-base text-light-blue">
                @{user?.login}
              </a>
            </div>
            <div className="">
              {user?.created_at && (
                <p className="text-base text-left xl:text-right text-light-teal-blue">
                  {dateFotmat(user.created_at)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="text-base text-light-teal-blue">{user?.bio}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full p-6 rounded-lg bg-light-ghost-white">
          <div>
            <p className="text-sm text-light-teal-blue">Repos</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.public_repos}
            </p>
          </div>
          <div>
            <p className="text-sm text-light-teal-blue">Followers</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.followers}
            </p>
          </div>
          <div>
            <p className="text-sm text-light-teal-blue">Following</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.following}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full text-base text-light-teal-blue md:flex-row">
          <div className="w-full">
            <p>{user?.location}</p>
            <p>{user?.twitter_username}</p>
          </div>
          <div className="w-full">
            <p>{user?.blog}</p>
            <p>{user?.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
