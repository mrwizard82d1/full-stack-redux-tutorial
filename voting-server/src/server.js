/**
 * Created by larryjones on 6/17/17.
 */

import Server from 'socket.io';

export default function startServer() {
  // The server listens on port 8090
  const io = new Server().attach(8090);
}
