#!/usr/bin/env bash
set -o errexit

apt-get update
apt-get install -y nmap

which nmap
nmap --version

pip install -r requirements.txt