import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem 0;

`
export const Actions = styled.nav`
display: flex;
align-items: center;
gap: 0.75rem;

img{
    width: 1.375rem;
}

a{
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 0.5rem;
    text-decoration: none;
    height: 100%;

    border-radius: 6px;    
}
a:first-child{
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
  
    gap: 0.25rem;
}
a:last-child{
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    position: relative;
    
}

`
export const Counter = styled.span`
    display: flex;
    position: absolute;
    width: 1.25rem;
    height:1.25rem;
    border-radius: 50%;
    background-color: ${props => props.theme['yellow-dark']};
    right: -0.5rem;
    top: -20%;
    color: ${props => props.theme['white']};
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;
`

