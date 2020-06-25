import * as React from 'react';
import * as Styled from './styled';
import { RootStore } from 'store/root.store';
import { observer, inject } from 'mobx-react';
import { Tooltip, TextField, List } from '@material-ui/core';
import { Send } from '@material-ui/icons';
// import Picker from 'emoji-picker-react';

class ListItemLink extends React.Component<{
    primary: string,
    onClick?: () => void,
    selected?: boolean,
    onDelete?: () => void,
}> {
   
    render() {
        const { primary } = this.props;
        return (
            <Styled.CustomListItem
                button={true}
                onClick={this.props.onClick}
                selected={this.props.selected}
            >
                <Styled.ListItemContent>
                    <Styled.ListText
                        primary={primary}
                        primaryTypographyProps={{
                            style: {
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: 'calc(100% - 40px)'
                            }
                        }}
                    />
                    <Styled.CustomSecondaryAction>
                        {/* <Tooltip title="Delete">
                        <IconButton onClick={this.props.onDelete}>
                            <Delete />
                        </IconButton>
                        </Tooltip> */}
                    </Styled.CustomSecondaryAction>
                </Styled.ListItemContent>
            </Styled.CustomListItem>
        );
    }
}


interface Props {
    rootStore: RootStore
}
@inject((allStores: { rootStore: RootStore }) => {
    let rootStore = allStores.rootStore;
    return {
        rootStore
    };
})

@observer
export default class Chat extends React.Component<Props> {
    setMessage = (evt: any) => {
        this.props.rootStore.chatStore.message = evt.target.value;
    }
    onEmojiClick = (event:any, emojiObject:any) => {
        console.log(emojiObject)
    }
    
    render() {
        let { friendsList, user } = this.props.rootStore.homeStore;
        let { activeFriend, message, sendMessage, senderMessage, senderMessageArr,
            conversation } = this.props.rootStore.chatStore;
        return (
            <Styled.Container>
                <Styled.navContainer>
                    <Styled.NameContainer>
                        {user.userName}
                    </Styled.NameContainer>

                    <Styled.ListContainer>
                        <List>
                            {
                                friendsList.map((f) => {
                                    return (
                                        <ListItemLink
                                            key={f.userName}
                                            primary={f.userName}
                                            onClick={() => this.props.rootStore.chatStore.getUserDetails(f)}
                                        />
                                    )
                                })
                            }

                        </List>
                    </Styled.ListContainer>
                </Styled.navContainer>
                <Styled.chatContainer>
                    <Styled.NameContainer>
                        {activeFriend.userName}
                    </Styled.NameContainer>

                    <Styled.MessageContainer>
                        {
                            (conversation) ?
                                conversation.map((msg: any) => {
                                    return (
                                        <div>
                                            {
                                                (user._id === msg.senderId) ?
                                                    <Styled.SentMessagesContainer>
                                                        <Styled.sentMessage>
                                                            {msg.message}
                                                        </Styled.sentMessage>
                                                    </Styled.SentMessagesContainer>
                                                    :<Styled.ReceivedMessagesContainer>
                                                        <Styled.recivedMessage>
                                                            {msg.message}
                                                        </Styled.recivedMessage>
                                                    </Styled.ReceivedMessagesContainer>
                                            }
                                        </div>
                                    )
                                }) : <div>start Conversation</div>
                        }
                    </Styled.MessageContainer>
                    <Styled.ChatField>

                    <Styled.textField>
                    {/* <Picker onEmojiClick={this.onEmojiClick}/> */}
                        <TextField
                            name="message"
                            label="Type a message"
                            multiline
                            variant="outlined"
                            fullWidth
                            value={message}
                            onChange={this.setMessage}
                        />
                    </Styled.textField>
                    <Styled.Icon
                        onClick={sendMessage}
                    >
                        <Send/>
                    </Styled.Icon>
                    </Styled.ChatField>

                </Styled.chatContainer>
            </Styled.Container>
        )
    }
}

