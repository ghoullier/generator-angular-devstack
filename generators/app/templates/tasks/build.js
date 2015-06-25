import sequence from 'run-sequence';

export default (callback) => {
  sequence(
    'clean',
    'config',
    'templates',
    ['images', 'styles', 'fonts', 'html', 'lint', 'scripts'],
    callback
  );
};
