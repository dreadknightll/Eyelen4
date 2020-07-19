
interface IWithMsgHandling {
    sendMsg(msgType:string , msgObj:any):any; //多用于插件往场景投递消息。返回一个retObj。

}
