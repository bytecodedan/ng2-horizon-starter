import rethinkdbdash from 'rethinkdbdash';
import config from '../../config';

export const r = rethinkdbdash(config.horizon);

var config_internal = Object.assign({}, config.horizon);
config_internal.db = config.horizon.db + '_internal';
export const r_internal = rethinkdbdash(config_internal);
