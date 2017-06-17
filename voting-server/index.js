/**
 * Created by larryjones on 6/17/17.
 */

import makeStore from './src/store';
import startServer from './src/server';

// Make the store available to consumers of this module
export const store = makeStore();

// Start the server for clients passing the store so it can
// inform interested parties of store changes
startServer(store);
