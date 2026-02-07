# Quick Deploy Steps for Test Hubble

## Step 1: Deploy to Vercel (5 minutes)

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Project:**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find and select: **mturanus/testhubble**
   - Click "Import"

3. **Configure Project (Auto-detected):**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
   - Install Command: `npm install` (auto)
   - **Click "Deploy"**

4. **Wait for Build:**
   - Vercel will build your project (2-3 minutes)
   - You'll see build logs in real-time
   - Once complete, you'll get a URL like: `testhubble.vercel.app`

## Step 2: Connect Your Domain (5 minutes)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in the left sidebar
   - Click "Add Domain"

2. **Add Your Domains:**
   - Enter: `testhubble.com`
   - Click "Add"
   - Enter: `www.testhubble.com`
   - Click "Add"

3. **Vercel will show DNS instructions:**
   - If using GoDaddy DNS, you'll see records to add
   - Usually shows A record and CNAME record

## Step 3: Update GoDaddy DNS (if not done already)

1. **In GoDaddy:**
   - Go to "My Products" → testhubble.com → "DNS"
   - Add/Update these records (Vercel will show exact values):

   **For Root Domain:**
   ```
   Type: A
   Name: @
   Value: [IP from Vercel - usually 76.76.21.21]
   TTL: 600
   ```

   **For www:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600
   ```

2. **Save and Wait:**
   - DNS propagation: 1-24 hours (usually 1-2 hours)
   - Check status in Vercel dashboard

## Step 4: Verify SSL Certificate

- Vercel automatically provisions SSL certificates
- Your site will be available at `https://www.testhubble.com`
- SSL activates automatically after DNS propagates

## Step 5: Test Your Live Site

1. Visit: `https://www.testhubble.com
2. Test all pages and functionality
3. Check mobile responsiveness

## Troubleshooting

- **DNS not working?** Check: https://www.whatsmydns.net
- **Build errors?** Check Vercel build logs
- **Domain not connecting?** Verify DNS records match Vercel's instructions

---

**That's it! Your site will be live once DNS propagates.**

