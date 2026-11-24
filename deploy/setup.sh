#!/usr/bin/env bash
# Run ONCE on a fresh Ubuntu droplet as root:  bash setup.sh
set -euo pipefail
REPO_URL="${1:?Usage: bash setup.sh https://github.com/<you>/veritium-website.git}"

apt-get update
apt-get install -y nginx git certbot python3-certbot-nginx ufw

ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

rm -rf /var/www/veritium
git clone "$REPO_URL" /var/www/veritium

cp /var/www/veritium/deploy/nginx.conf /etc/nginx/sites-available/veritium
ln -sf /etc/nginx/sites-available/veritium /etc/nginx/sites-enabled/veritium
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "Site is live on http://$(curl -s ifconfig.me)"
echo "Once DNS points here, run:  certbot --nginx -d veritium.com.au -d www.veritium.com.au"
