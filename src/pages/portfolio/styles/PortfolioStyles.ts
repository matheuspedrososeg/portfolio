import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    color: black;

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