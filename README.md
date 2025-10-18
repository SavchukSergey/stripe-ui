# Publish

```
git worktree add ../stripe-ui-docs github-pages
rm -rf ../stripe-ui-docs/assets
rm -rf ../stripe-ui-docs/*.svg
rm -rf ../stripe-ui-docs/*.html
npm run build -- --base=/stripe-ui --outDir ../stripe-ui-docs
git -C ../stripe-ui-docs add -A
git -C ../stripe-ui-docs commit -m "Update"
git -C ../stripe-ui-docs push
git worktree remove ../stripe-ui-docs
```