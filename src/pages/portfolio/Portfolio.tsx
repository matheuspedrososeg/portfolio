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
                }}
                >

                <Menu
                    mode="horizontal"
                    style={{ flex: '1', borderBottom: '0' }}
                    items={controller.items}
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
                    alignItems: 'center'
                }}
            >
                <HelloCard>
                    <div>
                        <h1>Hello,</h1>
                        <p>...</p>
                    </div>

                </HelloCard>

            </Content>

            <Divider size="large" plain style={{fontSize: '8px'}}><h1>About me</h1></Divider>

            <Content
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

            </Content>

        </Container>
    )
}