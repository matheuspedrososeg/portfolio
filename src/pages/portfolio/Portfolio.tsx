import { Divider, Layout, Menu } from "antd";
import { FaGithub } from "react-icons/fa";
import { colors } from "../../assets/styles/colors";
import type { PortfolioController } from "./hook/usePortfolio";
import { Container, HeaderContacts, HelloCard, StyledButton } from "./styles/PortfolioStyles";

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
                    zIndex: '1000'
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
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                id="home"
            >
                <HelloCard>
                    <div>
                        <h1>Hello,</h1>
                        <p>...</p>
                    </div>

                </HelloCard>

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

                <div style={{marginBlock: '2vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '800px'}}>
                    <p>I'm a full stack trainee software developer, i build and mantain applications using mainly React and Typescript for front-end, with Java and Springboot for back-end development.</p>
                    <p>I have 1 year worth of experience in building applications with practices such as TDD, Design patterns, SOLID principles and MVVM Architecture. </p>
                </div>

            </Content>

        </Container>
    )
}