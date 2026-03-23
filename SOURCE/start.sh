#!/bin/bash
set -euo pipefail

ROOT="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

read -r -p "Do you want to use a custom backend? (y/N) " custom_backend
cd "$ROOT/aas-test-backend" 

if [ "$custom_backend" = "y" ]; then
  echo "Using custom configuration..."
  cd "$ROOT/aas-test-backend" 
  docker compose -f docker-compose.custom.yml up -d

  echo "Springing the boot"

  read -r -p "Do you want to rebuild mvn? (y/N) " mvn
  if [ "$mvn" = "y" ]; then
    cd "$ROOT/aas-backend-environment"
    mvn clean install -DskipTests 

    cd "$ROOT/aas-backend-environment/basyx.aasenvironment/basyx.aasenvironment.component"
    mvn clean install -DskipTests 
  fi

  mvn spring-boot:run &

else
  docker compose up -d
fi

cd "$ROOT/aas-web-ui"

read -r -p "Do a clean install? (y/N)" clean_install
if [ "$clean_install" = "y" ] || [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  rm -rf node_modules
  yarn install
fi

echo "Starting frontend..."
yarn dev