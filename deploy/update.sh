#!/usr/bin/env bash
# Pull the latest site from GitHub. Run on the droplet:  bash /var/www/veritium/deploy/update.sh
set -euo pipefail
cd /var/www/veritium && git pull --ff-only && echo "Updated."
