# Deploy Growth with Aoun Site to GitHub Pages (FREE)

## 1. Change your email for leads
Open `index.html` find line:
action="https://formsubmit.co/growthwithaoun@gmail.com"
Replace growthwithaoun@gmail.com with YOUR Gmail.
First time, FormSubmit will send activation email - click confirm.

## 2. Push to GitHub (2 mins)
On your computer:
```bash
git init
git add .
git commit -m "Launch Growth with Aoun site"
# Create repo on github.com named growth-with-aoun
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/growth-with-aoun.git
git push -u origin main
```

## 3. Enable GitHub Pages
GitHub Repo -> Settings -> Pages -> Source: main / root -> Save
Your site will be live at: https://YOUR_USERNAME.github.io/growth-with-aoun/

## 4. SEO Next Steps
- Go to Google Search Console -> Add property -> Verify
- Submit sitemap: https://yourdomain.com/sitemap.xml
- Change canonical URL in index.html <head> to your real domain
- Update phone number +92300XXXXXXX in 3 places (search in file)
