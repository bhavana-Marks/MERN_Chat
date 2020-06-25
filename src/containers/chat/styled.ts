import Styled from 'styled-components';
import { ListItem,
    ListItemSecondaryAction,
    ListItemText, Paper } from '@material-ui/core';

export const Container = Styled.div`
    clear: both;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 0.3fr 0.7fr;

`
export const navContainer = Styled.div`
    // float: left;
    // width: 30%;
    height: 95vh;
    margin-right:0.4%;
    box-sizing: border-box; 
    box-shadow: 1px 1px 5px 1px rgba(51,44,51,1);
`
export const chatContainer = Styled.div`
    // width: 69%;
    // float: left;
    height: 95vh;
    box-sizing: border-box; 
    box-shadow: 1px 1px 5px 1px rgba(51,44,51,1);

`
export const CustomSecondaryAction = Styled(ListItemSecondaryAction)`
    display: none;
`
export const ListItemContent = Styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    &:hover ${CustomSecondaryAction}{
        display: block;
    }
    box-shadow: 0px 0px 5px 0px rgba(209,205,209,1);
    background-color: rgb(240, 243, 241);
`;
export const ListContainer = Styled.div`
    flex: 1; 
    overflow: auto;
`

export const CustomListItem = Styled(ListItem)`
    && {
        padding: 0;
        margin: 0;
    }
    text-decoration: none;
`;
export const ListText = Styled(ListItemText)`
    
`;
export const NameContainer = Styled.div`
    height: 70px;
    color: blanchedalmond;
    background-color: rgb(171, 202, 180);
    box-shadow: 0px 0px 5px 0px rgba(209,205,209,1);
    font-size: 20px;
    font-weight: 300;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align:center
`
export const ChatField = Styled.div`
    // width: 60%;
    // position:absolute;
    // float: left;
    display:grid;
    justify-content: space-evenly;
    grid-coloumn-gap: 10px;

    grid-template-columns: 0.7fr 0.3fr;
    // bottom: 5%;
    // right: 8%;
`
export const textField = Styled.div`
`
export const Icon = Styled.div`
    box-sizing: border-box;
    :hover {
		color: green;
		cursor: pointer;
	}

`
export const MessageContainer = Styled.div`
    width: 100%;
    flex-direction: coloumn;
    height: 78%;
    overflow-y:auto;
`
export const ReceivedMessagesContainer = Styled.div`
width: 100%;
    float: left;
   // height: 90%;
   // box-sizing: border-box; 
    text-align: center;
    right:0px;
`
export const SentMessagesContainer = Styled.div`
    width: 100%;
    float: right;
   // height: 90%;
   // box-sizing: border-box; 
    text-align: center;
    left:0px;
`

export const sentMessage = Styled.div`
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    border-color: #ccc;
    background-color:#afa6a6;
    max-width:98%;
    display: inline-block;
    word-wrap: break-word;
    float: right;
    right:0px;
    margin-left:30px;
    
`
export const recivedMessage = Styled.div`
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    max-width: 98%;
    display: inline-block;
    word-wrap: break-word;
    float: left;
    left:0px;
    margin-right:30px;
`