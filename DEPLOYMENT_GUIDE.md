# Deployment Guide for Test Hubble

This guide will help you deploy your Next.js website to www.testhubble.com using Vercel (recommended) or alternative hosting options.

## Option 1: Deploy to Vercel (Recommended - Easiest for Next.js)

Vercel is made by the Next.js team and offers the easiest deployment experience.

### Step 1: Prepare Your Code

1. **Ensure your code is in a Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub (github.com)
   - Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/testhubble.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free tier available)

2. **Import your project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live at:** `your-project.vercel.app`

### Step 3: Connect Your GoDaddy Domain

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `testhubble.com` and `www.testhubble.com`
   - Vercel will show you DNS records to add

2. **In GoDaddy DNS Settings:**
   - Log in to GoDaddy
   - Go to "My Products" → testhubble.com → "DNS"
   
   **IMPORTANT: If you see "DNSZoneExternalNameserver":**
   - Click on "Nameservers" section
   - Click "Change" → Select "I'll use my own nameservers"
   - Set to: `ns1.godaddy.com` and `ns2.godaddy.com`
   - Click "Save" (wait a few minutes for changes to take effect)
   
   **Then add/Update these DNS records:**

   **For Root Domain (testhubble.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (Vercel's IP - check Vercel dashboard for current IP)
   TTL: 600
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600
   ```

   **OR use Vercel's recommended approach (CNAME flattening):**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   TTL: 600
   ```

3. **Wait for DNS propagation:**
   - DNS changes can take 24-48 hours (usually 1-2 hours)
   - Check status in Vercel dashboard

4. **Enable SSL:**
   - Vercel automatically provides free SSL certificates
   - Your site will be available at `https://www.testhubble.com`

---

## Option 2: Deploy to Netlify

### Step 1: Build Settings
- Build command: `npm run build`
- Publish directory: `.next`

### Step 2: Connect Domain
- Similar process to Vercel
- Add domain in Netlify dashboard
- Update GoDaddy DNS records

---

## Option 3: Deploy to AWS/Other Cloud Providers

### Using AWS Amplify:
1. Connect GitHub repository
2. Auto-detects Next.js
3. Add custom domain in Amplify console
4. Update DNS in GoDaddy

### Using DigitalOcean App Platform:
1. Connect GitHub repository
2. Select Next.js preset
3. Add domain and update DNS

---

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update all `localhost:3000` references to `https://testhubble.com`
- [ ] Set up environment variables in Vercel dashboard (if needed)
- [ ] Update `metadataBase` in `app/layout.js` to `https://testhubble.com`
- [ ] Test the build locally: `npm run build && npm start`
- [ ] Verify all images/assets are loading correctly
- [ ] Check that analytics tracking IDs are set (if using Google Analytics)

---

## Environment Variables (if needed)

If you have any environment variables, add them in:
- **Vercel:** Project Settings → Environment Variables

Common variables you might need:
- `NEXT_PUBLIC_SITE_URL=https://testhubble.com`
- `GA_MEASUREMENT_ID=your-google-analytics-id` (if using)

---

## Post-Deployment Steps

1. **Test your live site:**
   - Visit `https://www.testhubble.com`
   - Test all pages and links
   - Check mobile responsiveness

2. **Set up redirects (if needed):**
   - In Vercel, you can add redirects in `vercel.json`:
   ```json
   {
     "redirects": [
       {
         "source": "/old-page",
         "destination": "/new-page",
         "permanent": true
       }
     ]
   }
   ```

3. **Monitor performance:**
   - Use Vercel Analytics (optional)
   - Check Google Search Console
   - Monitor Core Web Vitals

---

## Troubleshooting

### DNS Issues:
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation
- Ensure DNS records are correct in GoDaddy
- Wait up to 48 hours for full propagation

### Build Errors:
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Test build locally first: `npm run build`

### SSL Certificate:
- Vercel provides free SSL automatically
- If issues occur, check domain verification in Vercel dashboard

---

## Quick Start Commands

```bash
# Test build locally
npm run build
npm start

# Deploy to Vercel (if using Vercel CLI)
npm i -g vercel
vercel login
vercel --prod
```

---

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GoDaddy DNS Help](https://www.godaddy.com/help)

---

**Recommended: Use Vercel for the easiest Next.js deployment experience!**

