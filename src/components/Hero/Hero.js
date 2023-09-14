import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const HeroContainer = styled.div`
  color: white;
  gap: 100px;
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    gap: 60px;
  }
`;

const Content = styled.div`
  width: 90%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Contents = styled.div`
  color: black;
  width: 550px;
  text-align: left;

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const HeroH1 = styled.h1`
  font-weight: 700;
  margin-bottom: 0;
  margin: auto;
  line-height: 40px;

  @media (max-width: 576px) {
    font-size: 25px;
    width: 100%;
    line-height: 35px;
  }
`;

// const Heroh2 = styled.h2`
//   text-align: center;
//   padding: 0;
//   color: black;
//   font-size: 26px;

//   @media (max-width: 576px) {
//     font-size: 8px;
//   }
// `;

const HeroP = styled.p`
  font-weight: 500;
  width: 480px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Links = styled.div`
  padding-top: 1rem;
  text-align: left;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  border: 1px solid #00b14f;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: black;
  padding: 0.5rem 1.5rem;
  border-radius: 24px;

  @media (max-width: 576px) {
    padding: 0.4rem 1.5rem;
    font-size: 14px;
    border-radius: 22px;
  }

  &:hover {
    /* Add hover styles here */
  }
`;

const Div = styled.div`
  h2 {
    text-align: center;
    padding: 0;
    color: black;
    font-size: 26px;

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
`;

const CarouselContainer = styled(Carousel)`
  background-color: rgba(0, 0, 0, 0.99);
  border-radius: 15px;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  opacity: 0.7;
  border-radius: 15px;

  @media (max-width: 576px) {
    height: auto;
  }
`;

const Span = styled.span`
  color: #00b14f;
`;

function Hero() {
  return (
    <HeroContainer>
      <Content>
        <Contents>
          <HeroH1>
            Unlock the Art of Cooking with Our Handpicked Selection of Popular
            and Exquisite Recipes from Every Corner of the Globe
          </HeroH1>
          <HeroP>
            Discover Delicious Recipes from Around the World and Master Your
            Culinary Skills Today!
          </HeroP>
        </Contents>
        <Links>
          <StyledLink to="/discover">Discover</StyledLink>
        </Links>
      </Content>
      <Div>
        <h2>
          Popular Meals in the <Span>Philippines</Span>
        </h2>
        <CarouselContainer
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          interval={2000}
        >
          <div>
            <CarouselImg
              src="https://food.grab.com/static/page-home/PH-new-1.jpg"
              alt="1"
            />
          </div>
          <div>
            <CarouselImg
              src="https://food.grab.com/static/page-home/PH-new-3.jpg"
              alt="2"
            />
          </div>
          <div>
            <CarouselImg
              src="https://food.grab.com/static/page-home/PH-new-2.jpg"
              alt="3"
            />
          </div>
          <div>
            <CarouselImg
              src="https://food.grab.com/static/page-home/PH-new-4.jpg"
              alt="4"
            />
          </div>
        </CarouselContainer>
      </Div>
    </HeroContainer>
  );
}

export default Hero;
