import { tsConstructSignatureDeclaration } from "@babel/types";
import CategoryList from "../components/Cousine";
import Hero from "../components/Hero/Hero";
import Card from "../components/UI/Card";
import Cousine from "../components/Cousine";

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
