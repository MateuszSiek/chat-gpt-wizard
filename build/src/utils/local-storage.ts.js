import { getBucket } from '../../vendor/deps/extend-chrome_storage.js';

const localStorage = getBucket("store");

export { localStorage };
