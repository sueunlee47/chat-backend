import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  afterInit(server: Server) {
    console.log('웹소켓 서버 초기화 완료');
  }
  // 클라이언트 웹소켓 서버에 연결했을때 (소켓 연결 시점)
  handleConnection(client: Socket) {
    console.log('클라이언트 연결: ', client.id);
  }

  // 클라이언트 웹소켓 서버에 연결 종료했을때 (소켓 연결 시점)
  handleDisconnect(client: Socket) {
    console.log('클라이언트 연결 종료: ', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return 'Hello world!';
  }
}
