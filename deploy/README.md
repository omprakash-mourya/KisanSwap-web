# Deploying KisanSwap to Google Cloud Compute Engine

## Prerequisites
1. Google Cloud account with billing enabled
2. Google Cloud SDK installed
3. Project created on Google Cloud Console

## Steps to Deploy

### 1. Create a Compute Engine VM Instance
1. Go to Google Cloud Console > Compute Engine > VM Instances
2. Click "Create Instance"
3. Configure your instance:
   - Name: kisanswap-prod
   - Region: Choose nearest to your users
   - Machine type: e2-small (2 vCPU, 2 GB memory)
   - Boot disk: Ubuntu 20.04 LTS
   - Allow HTTP/HTTPS traffic

### 2. Set Up the VM
SSH into your VM instance and run:
```bash
# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt-get install -y git
```

### 3. Clone and Set Up the Application
```bash
# Clone your repository
git clone <your-repo-url>
cd kisanswap

# Install dependencies
npm install

# Create production build
npm run build
```

### 4. Set Up Process Manager
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start dist/index.js --name kisanswap

# Make PM2 start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup ubuntu -u $USER --hp $HOME
pm2 save
```

### 5. Set Up Nginx as Reverse Proxy
```bash
# Install Nginx
sudo apt-get install -y nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/kisanswap
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/kisanswap /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Set Up SSL with Let's Encrypt
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Maintenance

### Updating the Application
```bash
# Pull latest changes
git pull

# Install dependencies and rebuild
npm install
npm run build

# Restart the application
pm2 restart kisanswap
```

### Monitoring
- Check application status: `pm2 status`
- View logs: `pm2 logs kisanswap`
- Monitor resources: `pm2 monit`

## Troubleshooting
1. If the application isn't accessible, check:
   - Application status: `pm2 status`
   - Nginx status: `sudo systemctl status nginx`
   - Firewall rules in GCP Console
2. If you see 502 Bad Gateway:
   - Check if the Node.js application is running: `pm2 status`
   - Check application logs: `pm2 logs kisanswap`
