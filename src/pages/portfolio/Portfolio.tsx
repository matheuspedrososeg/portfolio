import { Carousel, Divider, Layout, Menu } from "antd";
import { DiJava } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiJunit5, SiPostgresql, SiSpring, SiTypescript } from "react-icons/si";
import { colors } from "../../assets/styles/colors";
import type { PortfolioController } from "./hook/usePortfolio";
import { CarouselCard, Container, HeaderContacts, HelloCard, StyledButton } from "./styles/PortfolioStyles";

interface PortfolioProps {
    controller: PortfolioController
}

export default function Portfolio({ controller }: PortfolioProps) {

    const { Header, Content } = Layout;

    return (
        <Container>
            <Header
                style={{
                    borderBottom: `1px solid ${colors.borderColor}`,
                    backgroundColor: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px',
                    position: 'fixed',
                    width: '100%',
                    zIndex: '1000',
                }}
                >

                <Menu
                    mode="horizontal"
                    style={{ flex: '1', borderBottom: '0' }}
                    items={controller.items}
                    selectedKeys={[controller.current]}
                    onClick={controller.handleNavBarClick}
                />

                <HeaderContacts>
                    <StyledButton
                        icon={<FaGithub size={24} />}
                        onClick={() => { controller.githubOnClick() }}
                    >
                    </StyledButton>
                </HeaderContacts>

            </Header>

            <Content
                style={{
                    width: '100%',
                    height: 'calc(100vh - 64px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '64px'
                }}
                id="home"
            >
                <HelloCard>
                    <div>
                        <h1>Matheus Pedroso</h1>
                        <p style={{ fontFamily: 'Instrument', fontStyle: 'italic', textAlign: 'center' }}>Full Stack Software Developer </p>
                    </div>
                </HelloCard>

                <Carousel autoplay style={{ width: '100%', textAlign: 'center' }} autoplaySpeed={2000}>
                    <CarouselCard style={{marginTop: '0'}}>
                        <DiJava size={96} />
                    </CarouselCard>
                    <CarouselCard>
                        <SiSpring size={96}/>
                    </CarouselCard>
                    <CarouselCard>
                        <FaReact size={96} />
                    </CarouselCard>
                    <CarouselCard>
                        <SiTypescript size={96} />
                    </CarouselCard>
                    <CarouselCard>
                        <SiPostgresql size={96} />
                    </CarouselCard>
                </Carousel>
            </Content>

            <Content
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                id="about-me"
            >

                <Divider size="large" plain style={{ fontSize: '8px' }}><h1>About me</h1></Divider>

                <div style={{ marginBlock: '2vh', display: 'flex', width: '100%', justifyContent: 'center', textAlign: 'left' }}>
                    <div style={{ maxWidth: '800px', width: '80%' }}>
                        <p>I'm a Full Stack Software Developer, I build and mantain applications using mainly React and Typescript for front-end, with Java and Springboot for back-end development.</p>
                        <p>I have 1 year worth of experience in building applications with practices such as TDD, Design patterns, SOLID principles and MVVM Architecture. </p>
                        <p>I'm 17 years old and currently in high school, when i'm not working or studying, I like to develop side projects, and learn new skills.</p>
                    </div>
                </div>

            </Content>

        </Container>
    )
}