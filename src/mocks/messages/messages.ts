 import { Message } from '../../modals/messages/message';
 import{User_LIST} from '../users/users';

 const userList = User_LIST;

 const messageList: Message[] = [];

userList.forEach((user) =>
    {
        messageList.push({user:user , date : new Date(), lastMessage:'hello ionic ' })
    })

   
export const MESSAGE_LIST = messageList;