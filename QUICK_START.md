# Quick Start Guide

## 🚀 Get Running in 30 Seconds

### Local Development
```bash
cd /c/Users/mmm/OneDrive/Desktop/invoice-gen
npm run dev
```
Open http://localhost:3000

### Deploy to Vercel
```bash
git init
git add .
git commit -m "Invoice Generator MVP"
git remote add origin https://github.com/YOUR_USERNAME/invoice-gen.git
git push -u origin main
```
Then go to vercel.com/new and import your repo.

---

## 📋 Features Checklist

- [x] Customer name input
- [x] Customer email input
- [x] Invoice number (auto-generated)
- [x] Invoice date (editable)
- [x] Add/remove invoice items
- [x] Item name, price, quantity
- [x] Auto-calculated subtotal
- [x] Percentage discount
- [x] Auto-calculated total
- [x] Professional invoice preview
- [x] PDF download
- [x] Dark/Light mode
- [x] Responsive design
- [x] Clear all button
- [x] TypeScript
- [x] Tailwind CSS
- [x] Production build ✓
- [x] Vercel ready ✓

---

## 🎯 How Users Will Use It

1. Enter customer name & email
2. Click "+ Add Item" to add line items
3. Fill in item details (name, price, qty)
4. Set discount % if needed
5. Preview on the right
6. Click "Download PDF"
7. Done!

---

## 📂 Project Structure at a Glance

```
invoice-gen/
├── app/components/        # UI components
├── app/hooks/            # State logic
├── app/utils/            # PDF generation
├── app/page.tsx          # Main page
├── app/layout.tsx        # Root layout
├── app/providers.tsx     # Dark mode
└── .next/               # Build output ✓
```

---

## ✅ Quality Checklist

- [x] Builds without errors
- [x] TypeScript checks pass
- [x] No console warnings
- [x] Responsive on all devices
- [x] Dark mode working
- [x] PDF generation working
- [x] All features implemented
- [x] Code is clean & typed
- [x] Ready for production

---

## 💾 What to Commit to GitHub

```
invoice-gen/
├── app/
├── public/
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── README.md
├── DEPLOYMENT.md
└── PROJECT_SUMMARY.md
```

(Don't commit: node_modules, .next/)

---

## 🌍 After Deployment

Your app will be live at:
- **Default**: https://invoice-gen.vercel.app
- **Custom domain**: https://your-domain.com (add in Vercel settings)

Share the URL with users to start creating invoices!

---

## 📞 Troubleshooting

**PDF not downloading?**
- Check browser allows downloads
- Try different browser
- Check console for errors

**Dark mode not saving?**
- Clear browser cache
- Check localStorage is enabled

**Build fails on Vercel?**
- Check node_modules is not committed
- Verify package.json has all dependencies
- Check .env files if needed

---

## 🎉 You're Done!

The app is complete and ready. Just push to GitHub and deploy to Vercel.

Questions? Check README.md and DEPLOYMENT.md in the project folder.
