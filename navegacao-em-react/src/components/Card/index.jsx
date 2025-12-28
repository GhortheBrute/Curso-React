import React from 'react';
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from "./styles";
import {FiThumbsUp} from "react-icons/fi";
import banner from '../../assets/data-science.jpg';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={banner}/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                    <div>
                        <h4>Jesus Wildes</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp dio do Global Avanade...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript #React</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };