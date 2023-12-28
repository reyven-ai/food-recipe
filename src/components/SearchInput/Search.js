import { useSearch } from "../../useHooks/useSearch";
import SearchIcon from "../../assests/search.png";
function Search() {
  const { handleSearch, searchTerm, setSearchTerm } = useSearch();
  return (
    <>
      <div className="flex items-center gap-5">
        <form className="flex items-center" onSubmit={handleSearch}>
          <button
            type="submit"
            className="bg-none border-none cursor-pointer p-1 relative mr-[-2rem]"
            onClick={handleSearch}
          >
            <img className="w-[15px} h-[15px]" src={SearchIcon} alt="" />
          </button>
          <input
            type="text"
            placeholder="What do you want?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-64 border pl-9 focus:outline-none focus:border-green-500 text-black text-base rounded-[20px] placeholder-gray-500 text-[0.9rem] font-light"
          />
        </form>
        {/* <MenuButton /> */}
      </div>
    </>
  );
}

export default Search;
