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
    width: 90%;
    max-width: 1000px;
    border-radius: 32px;
    height: 100vh;
    max-height: 600px;
    display: flex;

    h1 {
        font-weight: 600px;
        font-size: 44px;
    }

    p {
        color: ${colors.weakSubtext}
    }
`