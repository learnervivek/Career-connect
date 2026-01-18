#!/usr/bin/env bash
set -e

echo "Installing frontend dependencies..."
cd frontend
npm install --legacy-peer-deps

echo "Installing build tools..."
npm install --save-dev terser

echo "Building frontend..."
npx vite build

echo "Moving build output to root..."
cd ..
rm -rf dist
cp -r frontend/dist ./dist

echo "Build complete!"
ls -la dist/
