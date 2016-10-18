import later from 'later';
import { r } from '../db';

/**
 * Delete all chat messages every 15 minutes.
 */

const every10minutes = later.parse.text('every 15 minutes');

const deleteMessages = () => {
  r.table('chat').delete().run();
};

later.setInterval(deleteMessages, every10minutes);