import { Button } from "antd";
import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    color: black;
    overflow-x: hidden;

    background-color: white;
`

export const HeaderContacts = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`

export const StyledButton = styled(Button)`
    border: none;
    box-shadow: none;
`

export const HelloCard = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

    h1 {
        font-size: 44px;
    }

    p {
        color: ${colors.weakSubtext}
    }
`

export const CarouselCard = styled.div`
  height: 200px;
  margin-top: 16px;
`

export const SkillCard = styled.div`
    width: 100%;
    border: 1px solid ${colors.borderColor};
    padding: 12px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    transition: 0.3s ease background-color, color;
`

export const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column; 
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        width: 90%;
        gap: 8px;
    }
     
    & > div > p {
        color: ${colors.weakSubtext};
        font-family: 'Instrument';
        font-style: italic;
        font-size: 20px;
        width: 100%;
        max-width: 600px;
    }
`