/**
 * Created by larryjones on 6/17/17.
 */

import Server from 'socket.io';
import { toJS } from 'immutable';

export default function startServer(store) {
  // The server listens on port 8090
  const io = new Server().attach(8090);
  
  // Subscribe to store changes and broadcast the updated store state (as a JSON object)
  store.subscribe(() => {
    io.emit('state', store.getState().toJS())
  });
  
  io.on('connection', (socket) => {
    // Tell connected clients the current state when
    // they connect
    socket.emit('state', store.getState().toJS());
    
    // When actions occur on the client, we apply them to the *server* store.
    socket.on('action', store.dispatch.bind(store));
  
    /**
     * This behavior, applying client events on the server store is *not* standard redux behavior.
     * However, because the state is just a Javascript object and because actions are just
     * Javascript objects, it is relatively easy to implement this variant.
     *
     * Finally, notice that the technique we use is *incredibly* insecure. We have *not*
     * authenticated clients and we simply execute the action sent by the client.
     */
  });
}
