import React from 'react';
import {IconContainer, InputContainer, InputText} from "./styles";

const Input = ({leftIcon, name, ...props}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...props}/>
        </InputContainer>
    )
}

export { Input };