import { Carousel, Divider, Layout, Menu } from "antd";
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { FaGithub, FaJava, FaReact } from "react-icons/fa";
import { SiAntdesign, SiHibernate, SiJavascript, SiJunit5, SiPostgresql, SiSpring, SiTypescript, SiVitest } from "react-icons/si";
import { colors } from "../../assets/styles/colors";
import type { PortfolioController } from "./hook/usePortfolio";
import { CarouselCard, Container, HeaderContacts, HelloCard, SkillCard, SkillContainer, StyledButton } from "./styles/PortfolioStyles";
import { GiUsaFlag } from "react-icons/gi";

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

            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
            >
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

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Carousel pauseOnHover={false} pauseOnFocus={false} autoplay style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }} autoplaySpeed={2000}>
                            <CarouselCard style={{ marginTop: '0' }}>
                                <DiJava size={96} />
                            </CarouselCard>
                            <CarouselCard>
                                <SiSpring size={96} />
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
                    </div>
                </Content>
            </motion.div>

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

            <Divider size="large" plain style={{ fontSize: '8px' }}><h1>Skills</h1></Divider>

            <Content
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                id="skills"
            >

                <SkillContainer>
                    <div>
                        <p>Back-end</p>
                        <SkillCard>
                            <p>Java</p>
                            <FaJava size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>Spring</p>
                            <SiSpring size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>Hibernate</p>
                            <SiHibernate size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>PostgreSQL</p>
                            <SiPostgresql size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>JUnit</p>
                            <SiJunit5 size={32} />
                        </SkillCard>
                    </div>

                    <div>
                        <p>Front-end</p>
                        <SkillCard>
                            <p>Typescript</p>
                            <SiTypescript size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>React</p>
                            <FaReact size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>Javascript</p>
                            <SiJavascript size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>Vitest</p>
                            <SiVitest size={32} />
                        </SkillCard>
                        <SkillCard>
                            <p>Ant Design</p>
                            <SiAntdesign size={32} />
                        </SkillCard>
                    </div>

                </SkillContainer>

            </Content>

        </Container>
    )
}