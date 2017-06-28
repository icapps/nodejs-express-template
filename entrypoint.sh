#!/bin/bash
#
# Example of an entrypoint for Node.js apps
#

# Exit immediately if a command exits with a non-zero status.
# http://stackoverflow.com/questions/19622198/what-does-set-e-mean-in-a-bash-script
set -e

# Define help message
show_help() {
  echo """
  Usage: docker run <imagename> COMMAND

  Commands
  --------
  bash      : Start a bash shell
  serve     : Serve app through nodemon
  sequelize : Run sails binary
  help      : Show this message
  """
}

# Run
case "$1" in
  bash)
    /bin/bash "${@:2}"
    ;;
  serve)
    node_modules/.bin/nodemon "${@:2}"
    ;;
  sequelize)
    node_modules/.bin/sequelize "${@:2}"
    ;;
  *)
    show_help
    ;;
esac
