/* eslint-disable react/prop-types */
import LinkIcon from "./svgComponents/LinkIcon";
import CompanyIcon from "./svgComponents/CompanyIcon";
import NavigateIcon from "./svgComponents/NavigateIcon";
import TwitterIcon from "./svgComponents/TwitterIcon";
import { dateFotmat } from "../../utils";

const Display = ({ user }) => {
  console.log("🚀 ~ file: Display.jsx:3 ~ Display ~ user:", user);
  return (
    <div className="flex items-start justify-center w-full gap-4 p-8 mt-4 bg-white shadow-md dark:bg-dark-zodiac-blue rounded-2xl dark:text-white">
      <img
        src={user?.avatar_url}
        alt=""
        className="hidden xl:block w-[160px] h-[160px] rounded-full"
      />
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-row items-center justify-center w-full">
          {/* <div className="flex items-center justify-center p-5 xl:hidden"> */}
          <img
            src={user?.avatar_url}
            alt=""
            className="w-[120px] h-[120px] xl:hidden rounded-full mr-4"
          />
          {/* </div> */}
          <div className="flex flex-col items-start w-full xl:justify-between xl:flex-row">
            <div className="">
              <p className="text-2xl font-bold">{user?.login}</p>
              <a href={user?.html_url} className="text-base text-light-blue">
                @{user?.login}
              </a>
            </div>
            <div className="">
              {user?.created_at && (
                <p className="text-base text-left xl:text-right text-light-teal-blue dark:text-white">
                  {dateFotmat(user.created_at)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="text-base text-light-teal-blue dark:text-white">
            {user?.bio}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-full p-6 text-sm rounded-lg bg-light-ghost-white dark:bg-dark-mirage">
          <div className="[&>*]:dark:text-white">
            <p className="text-sm text-light-teal-blue">Repos</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.public_repos}
            </p>
          </div>
          <div className="[&>*]:dark:text-white">
            <p className="text-sm text-light-teal-blue">Followers</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.followers}
            </p>
          </div>
          <div className="[&>*]:dark:text-white">
            <p className="text-sm text-light-teal-blue">Following</p>
            <p className="text-2xl font-bold text-light-charcoal">
              {user?.following}
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 text-base md:grid-cols-2 text-light-teal-blue dark:text-white">
          <div className="flex flex-row items-center">
            <div className="w-[20px] mr-2">
              <NavigateIcon />
            </div>
            <p>{user?.location}</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[20px] mr-2">
              <LinkIcon />
            </div>
            <p>{user?.blog}</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[20px] mr-2">
              <TwitterIcon />
            </div>
            <a href={`https://github.com/${user?.twitter_username}`}>
              {user?.twitter_username || "unavailable"}
            </a>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[20px] mr-2">
              <CompanyIcon />
            </div>
            <p>{user?.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
