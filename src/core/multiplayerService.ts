import { io, type Socket } from "socket.io-client";
import { Choices, MultiplayerEvent } from "../globals/constants";

let socket: Socket;

export const createRoom: Function = (room: string): Socket => {
  if (socket) socket.close();
  socket = io("http://localhost:8080", {
    query: `room=${room}` as any,
  });
  return socket;
};

export const getSocket: Function = (): Socket => socket;

export const watchRoom: Function = (callback: any) => {
  socket.on(MultiplayerEvent.roomChange, callback);
};

export const playTurn: Function = (choice: Choices): void => {
  socket.emit(MultiplayerEvent.play, choice);
};

export const waitTurn: Function = (callback: any) => {
  if (socket) {
    socket.on(MultiplayerEvent.play, callback);
  }
};

export const endMultiplayer: Function = (): void => {
  if (socket) socket.close();
};

export const resolveGame: Function = (callback: any) => {
  if (socket) {
    socket.on(MultiplayerEvent.roundPlayed, callback);
  }
};
