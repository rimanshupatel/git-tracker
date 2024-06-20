import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { MagnifyingGlass } from "phosphor-react";
interface searchProps {
  setUserName: Dispatch<SetStateAction<string>>;
  userName: string;
  handleSubmit: () => void;
}
export const SearchBar = ({
  userName,
  setUserName,
  handleSubmit,
}: searchProps) => {
  return (
    <form
      onSubmit={(e: FormEvent) => e.preventDefault()}
      className="pt-2 w-full"
    >
      <div>
        <div className=" py-5 ">
          <h2 className="text-3xl font-bold">
            git <span className="text-green-500">Tracker</span>
          </h2>
        </div>
        <div className="flex justify-between  h-[70px] w-full gap-3 MainShadow p-1">
          <div className="flex items-center ml-4">
            <span className="text-xl">
              <MagnifyingGlass />
            </span>
            <input
              type="text"
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
              placeholder="Enter your Github Username"
              className="p-3 w-96 text-lg bg-transparent outline-none transition delay-150"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className=" py-1 px-5 m-1 tracking-[.05em] rounded-lg bg-indigo-950 text-white font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
