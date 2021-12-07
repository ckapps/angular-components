module.exports = {
  '*.{ts,html,scss}': [
    // Run eslint
    'eslint --fix',
    // Run prettier
    'prettier --write -u',
  ],
};
