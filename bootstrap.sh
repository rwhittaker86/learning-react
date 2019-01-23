#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
apt-get install curl
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install nodejs
npm install react-tools -g
npm install -g httpster
