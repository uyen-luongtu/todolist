import styled from "styled-components";
import bgImg from '../../../assets/img/bg.png'
export const Container = styled.div`
background-color: ${props => props.theme.bgColor};
color:  ${props => props.theme.color};
border: 5px solid  ${props => props.theme.color};
width: 30%;
height: 100vh;
overflow-y: scroll;
margin: 0 auto;
`

export const Header = styled.div`
background-image: url(${bgImg});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
height: 215px;
`
export const Body = styled.div`
padding: 15px;
`
export const Dropdown = styled.select`
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    border-radius:3px ;
    background-color: ${props => props.theme.bgColor};
    border: 2px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    padding: 0 10px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Adding transition effect */
    transition: all 0.3s;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props => props.theme.hoverBgColor};
        border-bottom-color: #DCDCDC;
    }
`
export const Title = styled.h3`
    font-size:1.5rem;
    font-weight:bold;
    color: ${props => props.theme.color};
`
export const AddTask = styled.div`
position: relative;
display: flex;
`
export const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    height:39px;
    font-size:17px;
    width:100%;
    padding: 0 15px;
    border-radius: 3px 25px 25px 3px;

`
export const AddTaskButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: 3px solid #343a40;
    transition: all .5s;
    font-size:18px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -1px;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color:${props => props.theme.hoverBgColor};
    };
`
export const List = styled.ul`
margin-top: 30px;
list-style: none;
padding: 0;
position: relative;
&#done{
    margin-top: 50px;
&::before{
    content: '';
    width: 80%;
    height: 1px;
    background: ${props => props.theme.color};
    opacity: 0.5;
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
}
}

li{
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 3px;
padding-left: 10px;
margin-bottom: 10px;
color: ${props => props.theme.color};
background-color: ${props => props.theme.bgColor};
border: ${props => props.theme.borderButton};
box-shadow: 0px 0px 2px rgb(44 62 80 / 30%);
button{
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
    padding: 8px 5px 8px 0;
    cursor: pointer;
    color: ${props => props.theme.color};
    font-size:18px;
    &:hover{
        color: ${props => props.hoverTextColor};
    }
}
}
`

export const Table = styled.table`
    color: ${props => props.theme.color};
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  
    border-spacing: 2px;
    border-color: ${props => props.theme.color};
  
`
export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border:1px solid ${props => props.theme.color};

`

export const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`
export const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border:1px solid ${props => props.theme.color};
    


`
export const Td = styled.td`
    padding: .75rem;
    vertical-align: top;
    border: 1px solid ${props => props.theme.color};
`


export const Th = styled.th`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    vertical-align: bottom;
    text-align: inherit;
    border-top: 1px solid ${props => props.theme.color};
    padding: .75rem;
    vertical-align: top;
    border-bottom: 1px solid ${props => props.theme.color};
`
