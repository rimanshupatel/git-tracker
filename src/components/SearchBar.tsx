import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

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
    <form onSubmit={(e: FormEvent) => e.preventDefault()}>
      <div>
        <div className="pt-2">
          <div className="flex justify-center py-5">
            <h2 className="text-3xl font-bold">
              git <span className="text-green-500">Tracker</span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
              placeholder="Enter your Github Username"
              className="p-3 w-1/2 rounded-lg border hover:border hover:border-indigo-950 transition"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="flex py-3 px-6 tracking-wide rounded-lg bg-indigo-950 text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
