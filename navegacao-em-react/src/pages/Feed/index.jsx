import {Column, Container, Title, TitleHighlight} from "./styles";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";
import {Header} from "../../components/Header";

const Feed = () => {
    return (
        <>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={35} name="Jesus Wildes" image="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    <UserInfo percentual={85} name="Jesus Wildes" image="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    <UserInfo percentual={92} name="Jesus Wildes" image="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    <UserInfo percentual={14} name="Jesus Wildes" image="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    <UserInfo percentual={48} name="Jesus Wildes" image="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed };