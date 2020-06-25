import baseStore from './base.store';
import { observable } from 'mobx';
import axios from 'axios';

export default class chatStore extends baseStore {
    @observable activeFriend:any = {}
    @observable message: String = '';
    @observable senderMessage: String = '';
    @observable senderMessageArr:any = [];
    @observable conversation: any = [];

    getUserDetails = async(user:any) => {
        this.activeFriend = user;
        let msgs = await axios.post("http://localhost:4000/conversation/getConversation", this.activeFriend);
        this.conversation = msgs.data.conversations;
    }
    sendMessage = async () => {
        // this.senderMessage = this.message;
        
        this.senderMessageArr.push({'message': this.message})

        let obj = {
            chatNode: this.activeFriend.chatNode,
            senderId: this.rootStore.homeStore.user._id,
            receipentId: this.activeFriend._id,
            message: this.message,
            dateTime: new Date()
        }
        this.message= '';    
        let user = await axios.post("http://localhost:4000/conversation/send", obj);
        console.log(user);
        this.getUserDetails(this.activeFriend);
        // this.conversation.push(obj)
        // this.rootStore.socket.on('messageStored',function(item: any){    
           
        //     console.log('=========================================')   
        //   })
    }
}