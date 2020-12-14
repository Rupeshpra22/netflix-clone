import React from 'react'
import { Container,Input, Button, Text, Break } from './styles/opt-form'

export default function OptForm({  children, ...restprops }) {
    return <Container {...restprops}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButon({ children, ...restprops }) {
    return (<Button {...restprops}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>)
}

OptForm.Text = function OptFormText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({  ...restProps}){
    return <Break {...restProps}/>
}