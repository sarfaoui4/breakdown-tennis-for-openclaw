#!/usr/bin/env bash

# Deploy Tennis Breakdown to Vercel - Clean Deploy
# Usage: ./deploy-clean.sh [branch]
# Example: ./deploy-clean.sh mvp-stable

set -e

BRANCH="${1:-mvp-stable}"
COMMIT_MSG="deploy: $(date '+%Y-%m-%d %H:%M')"

echo "=== Tennis Breakdown Clean Deploy ==="
echo "Branch: $BRANCH"
echo ""

# 1. Ensure we're on the right branch
git checkout $BRANCH

# 2. Pull latest (if remote tracking)
git pull origin $BRANCH 2>/dev/null || echo "Local branch, skipping pull"

# 3. Install dependencies
echo "[1/5] Installing dependencies..."
npm ci --silent

# 4. Build
echo "[2/5] Building..."
npm run build

# 5. Run basic tests (optional)
echo "[3/5] Running basic validation..."
node -e "require('dotenv').config({ path: '.env.local' }); console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'OK' : 'MISSING'); console.log('STRIPE_KEY:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? 'OK' : 'MISSING');"

# 6. Commit any changes (like .env.local if added)
if [ -n "$(git status --porcelain)" ]; then
  echo "[4/5] Committing changes..."
  git add -A
  git commit -m "$COMMIT_MSG" || echo "No changes to commit"
else
  echo "[4/5] No changes to commit"
fi

# 7. Push to trigger Vercel build
echo "[5/5] Pushing to remote..."
git push origin $BRANCH:main

echo ""
echo "✅ Deploy triggered! Check Vercel dashboard for build status."
echo "   Site URL: https://tennis-breakdown-production.vercel.app (or your configured domain)"
