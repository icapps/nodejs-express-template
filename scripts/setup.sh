# Variables
PROJECT_NAME="boilerplate"

# Functions
print() {
  echo "👉  $1"
}

run() {
  print " Install node_modules through 'yarn'"
  yarn

  print "Spin up services"
  docker-compose up -d

  print "Create database ${PROJECT_NAME}_development'"
  docker-compose exec postgres psql -U postgres -c "CREATE DATABASE ${PROJECT_NAME}_development;"

  print "Run migrations"
  ./node_modules/.bin/sequelize db:migrate

  print "😎  Ready to go!"
}

run
