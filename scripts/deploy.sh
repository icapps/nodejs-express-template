#!/bin/bash
#
# This script builds the application image through docker and deploys it to your Heroku instance.
#
# You can pass 1 parameter to the script in order to be able to deploy
# the application to multiple environments.
#
# ex.
# ./scripts/deploy.sh staging
#
# Possible environments are:
#  - develop
#  - staging
#  - production
#
# Now let's deploy like a baws. 🤓
#

# Log the shell command in the console and run it afterwards.
function run {
  echo $1
  $1
}

function deployHeroku {
  # Setup it the git remote exists. If not create the remote for the
  # correct environment.
  echo "Checking if remote exists..."
  if ! git ls-remote heroku; then
    echo "Adding heroku..."
    run "git remote add heroku git@heroku.com:$heroku_project.git"
  fi

  # Keep track of the previous Heroku build number.
  previous_heroku_build_version=`/usr/local/bin/heroku releases | sed -n 2p | awk '{print $1}'`

  # Build the image using docker and push it to heroku
  echo "Deploying with docker"
  run "heroku container:push web"

  # Fetch the new build version number.
  heroku_build_version=`/usr/local/bin/heroku releases | sed -n 2p | awk '{print $1}'`

  # Only tag the current commit when the build version is different from the previous one.
  if [[ "$previous_heroku_build_version" != $heroku_build_version  ]]
  then
    # Tag the current commit with the Heroku deploy version.
    echo "Tagging the current commit..."
    run "git tag -a $deploy_environment/$heroku_build_version -m Build"
    run "git push -f origin $deploy_environment/$heroku_build_version"
  fi
}

# exit 1 on errors
set -e

# Set the following variables for deployment:
#  - heroku project
#  - deployment branch
deploy_environment=$1
tag="${deploy_environment}-${BUILD_NUMBER}"

if [[ "$deploy_environment" == "develop"  ]]
then
  echo "Deploying to develop"
  heroku_project='icapps-project-name-api-dev'
  deployHeroku

elif [[ "$deploy_environment" == "staging"  ]]
then
  echo "Deploying to staging"
  heroku_project='icapps-project-name-api-sta'
  deployHeroku

elif [[ "$deploy_environment" == "production"  ]]
then
  echo "Deploying to production"
  heroku_project='icapps-project-name-api'
  deployHeroku

else
  exit "You passed the incorrect environment argument. One of theses (staging) should be given."
fi
