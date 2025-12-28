import React from 'react';
import {HeaderContainer, Input, Menu, Row, SearchInputContainer, UserPicture, Wrapper} from "./styles";
import {Button} from "../Button";
import logo from '../../assets/logo-dio.png';
import {Link} from "react-router-dom";

const Header = ({ authenticated}) => {
    return (
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <Link to={"/"}>
                        <img src={logo} alt="Logo da DIO"/>
                    </Link>
                    {authenticated ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder="Buscar..."/>
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    ) : (
                        <>
                            <Link to={"/login"}>
                                <Button title="Entrar"/>
                            </Link>
                            <Link to={"/feed"}>
                                <Button title="Cadastrar"/>
                            </Link>
                        </>
                    )}

                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export { Header };