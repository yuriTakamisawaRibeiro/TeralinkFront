import { Header } from "../../components/Header"
import { Container, Background1, Content1, BannerArea, HomeImage1, BannerText, ButtonArea, Content2, BlobArea, Blob, HomeImage2  } from "./styles"
import background1 from "../../assets/background1.svg"
import homeimage1 from "../../assets/homeimage1.svg"
import homeimage2 from "../../assets/homeimage2.svg"
import blob from "../../assets/blob.svg"
import { BannerButton } from "../../components/BannerButton"

export const Home = () => {


    return (
        <Container>

            <Content1>
                <Background1 background={background1} />
                <Header />

                <BannerArea>
                    <HomeImage1 src={homeimage1} alt="imagem de calendario" />
                    <BannerText>
                        <h1>Uma vida organizada <br /> é terapia.</h1>
                        <ButtonArea>
                            <h2>Agende sua sessão</h2>
                            <BannerButton title="Agendar"/>
                        </ButtonArea>
                    </BannerText>

                </BannerArea>

            </Content1>

            <Content2>
                <BlobArea>
                    <Blob src={blob} />
                </BlobArea>

                <HomeImage2 src={homeimage2} />
            </Content2>

        </Container>
    )
}