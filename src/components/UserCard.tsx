import { TwitterLogo, MapPin, Buildings, Link } from "phosphor-react";
import { userData } from "../pages/Home";
interface cardProps {
  user: userData | null;
}
export const UserCard = ({ user }: cardProps) => {
  return (
    <div className="flex justify-center py-10 w-full">
      <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-xl">
        <div className="flex items-center justify-center p-5">
          <div>
            <div className="flex ">
              <div>
                <img
                  className="w-32 h-32 rounded-lg mb-3 shadow-lg bg-red-300"
                  src={user?.avatar_url}
                />
              </div>
              <div className="mb-2 mx-4">
                <h1 className=" text-2xl font-semibold MainColor ">
                  {user?.name}
                </h1>
                <h5 className="mb-1 text-sm  text-gray-500 ">{`@${user?.login}`}</h5>
              </div>
            </div>
            <h5 className="my-2 max-w-[40rem] text-md MainColor capitalize">
              {user?.bio}
            </h5>
            <div className="my-4 bg-[#F6F8FF] py-2 px-6 h-[90px] flex justify-between rounded-lg">
              <div>
                <span className="MainColor text-md">Repos</span>
                <h5 className="text-2xl font-semibold MainColor">
                  {user?.public_repos}
                </h5>
              </div>
              <div>
                <span className="MainColor text-md">followers</span>
                <h5 className="text-2xl font-semibold MainColor">
                  {user?.followers}
                </h5>
              </div>
              <div>
                <span className="MainColor text-md">following</span>
                <h5 className="text-2xl font-semibold MainColor">
                  {user?.following}
                </h5>
              </div>
            </div>

            <div className="flex my-2">
              {user?.location ? (
                <div className="py-2 px-4 MainColor w-[250px]">
                  <a
                    href={`https://www.google.com/maps/place/${user.location}`}
                    className=" flex items-center"
                    target="_blank"
                  >
                    <span>
                      <MapPin />
                    </span>
                    <h5 className="ml-2">{user.location} </h5>
                  </a>
                </div>
              ) : (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <span>
                    <MapPin />
                  </span>
                  <span className="ml-2">not found</span>
                </div>
              )}
              {user?.twitter_username ? (
                <div className="py-2 px-4  MainColor w-[250px]">
                  <a
                    href={`https://www.x.com/${user.twitter_username}`}
                    className=" flex items-center"
                    target="_blank"
                  >
                    <span>
                      <TwitterLogo />
                    </span>
                    <h5 className="ml-2">{user.twitter_username} </h5>
                  </a>
                </div>
              ) : (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <span>
                    <TwitterLogo />
                  </span>
                  <span className="ml-2">not found</span>
                </div>
              )}
            </div>
            <div className="flex">
              {user?.blog ? (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <a
                    href={`${user.blog}`}
                    className=" flex items-center"
                    target="_blank"
                  >
                    <span>
                      <Link />
                    </span>
                    <h5 className="ml-2">{user.blog} </h5>
                  </a>
                </div>
              ) : (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <span>
                    <Link />
                  </span>
                  <span className="ml-2">not found</span>
                </div>
              )}
              {user?.company ? (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <span>
                    <Buildings />
                  </span>
                  <h5 className="ml-2">{user.company} </h5>
                </div>
              ) : (
                <div className="py-2 px-4 flex items-center MainColor w-[250px]">
                  <span>
                    <Buildings />
                  </span>
                  <span className="ml-2">not found</span>
                </div>
              )}
            </div>
            <div className="flex  mt-4 md:mt-6 ">
              <a
                href="#"
                className="inline-flex items-center px-10 py-3 text-sm font-medium text-center text-white bg-[#232122] rounded-md"
              >
                follow
              </a>

              <a
                href={`https://github.com/${user?.login}?tab=repositories`}
                target="_blank"
                className=" px-8 py-3 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-[#232122] cursor-pointer"
              >
                support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
