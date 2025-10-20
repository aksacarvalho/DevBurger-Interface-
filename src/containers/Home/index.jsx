import { OffersCarousel, CategoriesCarousel } from "../../components";
import { useUser } from "../../hooks/UserContext";
import { Banner, Container } from "./style";

export function Home(){
   console.log(useUser());
  return (
    <main>
      <Banner>
        <h1>Bem-vindo!</h1>
      </Banner>

      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
        </Container>
    </main>
    
  );
}