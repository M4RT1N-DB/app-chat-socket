import { ChatServer } from './server';

/* const app=new ChatServer().getApp() */
async function main(){
    const serv = new ChatServer();
    await serv.getApp();
}


main();