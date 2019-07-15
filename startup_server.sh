if [ ! -L /app/node_modules ]; then
  ln -s /dist/node_modules /app/node_modules
fi
supervisord
