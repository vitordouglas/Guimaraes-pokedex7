import styled from "styled-components"
import fundoHome from "../../assets/img/pokemon2.jpg"
 
export const StyledHome = styled.div`
background-image: linear-gradient(0deg, rgb(249, 66, 6),rgb(250, 134, 22),rgb(251, 202, 37));
display:grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 1fr);
align-items: center;
height: 88vh;
overflow: scroll;
background-image: url(${fundoHome});
padding-left: 2rem;
padding-right: 2rem;

h1{
    color: #fff;
    background-color: blue;
    display: flex;
    width: 50vw;
    border-radius: 30px;
    padding: 10px;
    padding-left: 50px;
}
`

