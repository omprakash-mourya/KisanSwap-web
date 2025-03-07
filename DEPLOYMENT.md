# Deployment Guide for KisanSwap on Google Cloud Compute Engine

This guide will help you deploy the KisanSwap website on Google Cloud Platform (GCP) Compute Engine.

## Prerequisites

1. A Google Cloud Platform account
2. Google Cloud SDK installed on your local machine
3. Node.js and npm installed on your local machine
4. Git installed on your local machine
5. A domain name (if you want to use a custom domain)

## Step 1: Initial Setup

### Create a GCP Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com)
2. Click on "New Project"
3. Enter a project name (e.g., "kisanswap")
4. Click "Create"

### Enable Required APIs

1. In the Cloud Console, go to "APIs & Services > Library"
2. Search for and enable:
   - Compute Engine API
   - Cloud Build API

## Step 2: Create a Compute Engine Instance

1. Go to "Compute Engine > VM Instances"
2. Click "Create Instance"
3. Configure your instance:
   ```
   Name: kisanswap-production
   Region: Choose nearest to your target audience
   Machine type: e2-small (2 vCPU, 2 GB memory)
   Boot disk: Ubuntu 20.04 LTS
   Allow HTTP traffic: Yes
   Allow HTTPS traffic: Yes
   ```
4. Click "Create"

## Step 3: Connect to Your Instance

1. In the VM instances list, click the "SSH" button next to your instance
2. This will open a browser-based SSH terminal

## Step 4: Install Dependencies

Run these commands in the SSH terminal:

```bash
# Update package list
sudo apt-get update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt-get install -y git

# Verify installations
node --version
npm --version
git --version
```

## Step 5: Clone and Setup the Project

```bash
# Create a directory for the application
mkdir -p /home/your-username/apps
cd /home/your-username/apps

# Clone your repository
git clone https://github.com/your-username/kisanswap.git
cd kisanswap

# Install dependencies
npm install

# Build the project
npm run build
```

## Step 6: Install and Configure Nginx

```bash
# Install Nginx
sudo apt-get install -y nginx

# Remove default Nginx configuration
sudo rm /etc/nginx/sites-enabled/default

# Create new Nginx configuration directory if it doesn't exist
sudo mkdir -p /etc/nginx/sites-available
```

### Create Nginx Configuration File
Create this file **before** cloning the repository:

```bash
# Create the configuration file
sudo nano /etc/nginx/sites-available/kisanswap
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain

    root /home/your-username/apps/kisanswap/dist/public;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Additional security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
```

Enable the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/kisanswap /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 7: Setup Process Manager (PM2)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start dist/index.js --name kisanswap

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

## Step 8: Custom Domain Setup

### A. Configure DNS Records
Before setting up SSL, configure your domain's DNS records:

1. Go to your domain registrar's DNS settings
2. Add these records:
   ```
   Type: A
   Name: @
   Value: [Your VM's IP address]
   TTL: 3600

   Type: A
   Name: www
   Value: [Your VM's IP address]
   TTL: 3600
   ```

### B. Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Choose option 2 to redirect all HTTP traffic to HTTPS
```

## Step 9: Verify Deployment

1. Visit your domain in a browser
2. Check that all pages load correctly
3. Verify that HTTPS is working
4. Test all features (navigation, forms, etc.)

## Maintenance and Updates

To update the application:

```bash
# Go to your application directory
cd /home/your-username/apps/kisanswap

# Pull latest changes
git pull

# Install any new dependencies
npm install

# Rebuild the application
npm run build

# Restart the application
pm2 restart kisanswap

# If you made Nginx configuration changes
sudo nginx -t
sudo systemctl restart nginx
```

## Monitoring

1. Monitor your application:
   ```bash
   pm2 monit
   ```

2. View logs:
   ```bash
   pm2 logs kisanswap
   ```

3. Check Nginx logs:
   ```bash
   sudo tail -f /var/log/nginx/access.log
   sudo tail -f /var/log/nginx/error.log
   ```

## Troubleshooting

1. If the site isn't accessible:
   - Check if Nginx is running: `sudo systemctl status nginx`
   - Check if PM2 process is running: `pm2 status`
   - Check firewall settings in GCP Console
   - Verify domain DNS propagation: `dig your-domain.com`

2. If SSL certificate isn't working:
   - Check certbot logs: `sudo certbot certificates`
   - Renew certificate: `sudo certbot renew`
   - Verify Nginx configuration: `sudo nginx -t`

3. For application errors:
   - Check PM2 logs: `pm2 logs kisanswap`
   - Check Nginx error logs
   - Verify file permissions in your application directory

4. Common DNS issues:
   - Allow 24-48 hours for DNS changes to propagate
   - Verify A records are correct: `dig your-domain.com`
   - Check SSL certificate domains: `sudo certbot certificates`