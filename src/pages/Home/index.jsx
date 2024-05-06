import { Header } from "../../components/Header"
import { Container, Background1, Content1, BannerArea, HomeImage1, BannerText, ButtonArea, Content2, BlobArea, Blob, HomeImage2,SH1,ST1, Content3, T2} from "./styles"
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
                    <SH1>Conheça nossos profissionais licenciados</SH1>
                    <ST1>Profissionais de psicologia graduados e registrados no Conselho Regional de Psicologia, com cadastro específico – e-Psi – para atendimento por chamadas de vídeo, passam por um processo seguro de verificação e credenciamento, além de aderirem a rigorosos códigos de ética e sigilo.</ST1>
                    
                </BlobArea>
                

                <HomeImage2 src={homeimage2} />
            </Content2>
            <Content3>
                <T2>Como funciona a teraLink</T2>
            </Content3>
            

        </Container>
    )
}