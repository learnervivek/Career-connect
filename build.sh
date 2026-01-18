#!/bin/bash
# Vercel build script

echo "Installing frontend dependencies..."
cd frontend
npm install

echo "Building frontend..."
npm run build

echo "Moving build output to root..."
cd ..
rm -rf dist
cp -r frontend/dist ./dist

echo "Build complete!"
