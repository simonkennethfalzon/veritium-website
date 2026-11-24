# veritium.com.au

Marketing site for Veritium: plain HTML, CSS and JS with no build step.

- `index.html`: page content
- `styles.css`: design system (graphite, bone and chartreuse; Bricolage Grotesque, Geist and Geist Mono)
- `script.js`: scroll reveals
- `assets/`: favicon, founder photo
- `deploy/`: nginx config plus droplet setup and update scripts

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000

Deploy: on the droplet run `bash /var/www/veritium/deploy/update.sh`
