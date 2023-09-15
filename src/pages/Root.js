import { Outlet } from "react-router";
import FoodHeaders from "../components/Header/FoodsHeader";
import MenuList from "../components/MenuButton/MenuList";

function RootLayout() {
  return (
    <>
      <FoodHeaders />
      <MenuList />
      {/* <SearchBar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
