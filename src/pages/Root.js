import { Outlet } from "react-router";
import FoodHeaders from "../components/Header/FoodsHeader";

// import SearchBar from "../components/header/MovieHeader";

function RootLayout() {
  return (
    <>
      <FoodHeaders />
      {/* <SearchBar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
