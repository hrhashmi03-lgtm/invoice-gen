#!/bin/bash

# Invoice Generator - GitHub Push Script
# Run this in your terminal to push to GitHub

cd /c/Users/mmm/OneDrive/Desktop/invoice-gen

echo "🚀 Initializing Git..."
git init

echo "📦 Staging all files..."
git add .

echo "💾 Creating initial commit..."
git commit -m "Initial commit: Invoice Generator MVP"

echo "🔗 Adding remote repository..."
git remote add origin https://github.com/hrhashmi03-lgtm/invoice-gen.git

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Your code is now on GitHub"
echo "🎉 Next step: Deploy to Vercel at vercel.com/new"
