import { tsConstructSignatureDeclaration } from "@babel/types";
import CategoryList from "./Cousine";
import Hero from "../components/Hero/Hero";
import Card from "../components/UI/Card";
import Cousine from "./Cousine";

function HomePage() {
  return (
    <Card>
      <>
        <Hero />
        {/* <Cousine /> */}
      </>
    </Card>
  );
}

export default HomePage;
