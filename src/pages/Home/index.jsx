import { Header } from "../../components/Header"
import { Container, Background1, Content1, BannerArea, HomeImage1, BannerText, ButtonArea, Content2, BlobArea, Blob, HomeImage2,SH1,ST1, Content3, Title,C3img1,C3img2,C3img3,FooterFixed,ImgText,ImgText2,ImgText3,FNav,FSup,Flogo,Footer} from "./styles"
import background1 from "../../assets/background1.svg"
import C3_1 from "../../assets/C3_1.svg"
import C3_2 from "../../assets/C3_2.svg"
import C3_3 from "../../assets/C3_3.svg"
import teralinklogo from  "../../assets/teralinklogo.png"
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
                <Title>Como funciona a TeraLink </Title>
                <C3img1 src={C3_1} alt="Imagem de uma mulher analizando perfis com uma lupa"/>
                <ImgText>Procure seu terapeuta</ImgText>
                <C3img2 src={C3_2}alt="Homem segurando lapis em frente a um calendario"/>
                <ImgText2>Encontre o melhor horário</ImgText2>
                <C3img3 src={C3_3} alt="Mulher meditando com ilustração de corações, flores e folhas saindo de sua cabeça"/>
                <ImgText3>Organize sua saúde mental</ImgText3>
            </Content3>
            <FooterFixed>
            © 2024 TeraLink. Todos os direitos reservados.
            </FooterFixed>
            <Footer>
                <Flogo src={teralinklogo}></Flogo>
                <FNav>
                    <h2>Navegação</h2>
                    
                        <ul><a href="/">Home</a></ul>
                        <ul><a href="/">Perfil</a></ul>
                        <ul><a href="/">Agendar</a></ul>
                    
                </FNav>
                <FSup>
                    <h2>Suporte</h2>
                    <ul><a href="/">Sobre nós</a></ul>
                    <ul><a href="/">FAQ</a></ul>
                    <ul><a href="/">Fale conosco</a></ul>
                </FSup>
            </Footer>

            

        </Container>
    )
}