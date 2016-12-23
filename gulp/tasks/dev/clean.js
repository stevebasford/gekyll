import gulp   from 'gulp';
import del    from 'del';
import config from '../../config';

export function clean_dev(done) {
  del.sync(config.delete.dev)
  done();
}

export function clean_prod(done) {
  del.sync(config.delete.prod)
  done();
}
