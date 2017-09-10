const compiler = ($compileProvider) => {
  $compileProvider.debugInfoEnabled(false);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
};

compiler.$inject = ['$compileProvider'];

export default compiler;
