import Styled from 'styled-components';
export const loginContainer = Styled.div`
    padding:10px;
    width:50%;
    display:flex;
    justify-content: space-evenly;
    border-radius: 25px;
    border: 2px rgba(0, 0, 0, 0.23);
`
export const heading = Styled.div`
    width:50%;
    color: blanchedalmond;
    font-size: 20px;
    font-weight: 600;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    text-align:center
`

export const header = Styled.div`
    display: flex;
    // justify-content: space-around;
    width: 100%;
    height: 8%;
    background-color: rgb(171, 202, 180);
    align-items: center;
    justify-content: space-evenly;
`
export const home = Styled.div`
   
`
export const body = Styled.div`
    height: 92%;
    display:flex;
    grid-template-columns: 0.5fr 0.5fr;
    justify-content: space-evenly;
    background-color: rgb(240, 243, 241);
`
export const imageContainer = Styled.div`
    height:100%;
`
export const signupContainer = Styled.div`
    margin-top: 3%;
    height:100%;
    grid-row-gap: 10px;
    grid-template-columns: 1fr;
    border-radious: 15px;
    justify-content: space-evenly;
    display: grid;
`