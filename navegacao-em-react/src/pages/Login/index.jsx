import { MdEmail, MdLock } from 'react-icons/md';

import { Input } from '../../components/Input';
import {Column, Container, CreateText, ForgotText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import {Button} from "../../components/Button";


const Login = () => {
    return (
        <>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail value={{ color: '#E4105D'}}/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock value={{ color: '#E4105D'}}/>}/>
                            <Button title="Entrar" variant="secondary"/>
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText>Criar Conta</CreateText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login };