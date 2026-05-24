
# Data Bundle Shop Website

This is a simple Netlify/GitHub-ready website for selling data bundles and receiving payments using Paystack.

## Features
- Responsive design
- Paystack payment integration
- Simple bundle selection
- Easy deployment to Netlify or GitHub Pages

## Files
- index.html
- style.css
- script.js

## Deployment on Netlify
1. Upload all files to a GitHub repository OR drag-and-drop the folder to Netlify.
2. Your site will go live instantly.

## GitHub Pages Deployment
1. Upload the files to a GitHub repository.
2. Go to:
   Settings → Pages
3. Select:
   Deploy from branch → main → root
4. Save.

## Important
This setup uses your Paystack LIVE public key directly in the frontend.

For automatic data delivery after payment, you can later connect:
- MTN API
- AirtelTigo API
- Telecel API
- A custom backend with Paystack webhooks

## Your Paystack Public Key
Already added in script.js
