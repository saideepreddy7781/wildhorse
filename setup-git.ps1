# Quick Git Setup Script
# Run this after forking the repository on GitHub

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Git Setup for Pull Request" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Get current configuration
Write-Host "Current Configuration:" -ForegroundColor Yellow
Write-Host "Git User: $(git config user.name) ($(git config user.email))" -ForegroundColor White
Write-Host ""

# Show remotes
Write-Host "Current Remotes:" -ForegroundColor Yellow
git remote -v
Write-Host ""

# Ask for GitHub username
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Setup Steps:" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. First, fork the repository on GitHub:" -ForegroundColor Yellow
Write-Host "   Go to: https://github.com/saideepreddy7781/wildhorse" -ForegroundColor White
Write-Host "   Click the 'Fork' button" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Have you forked the repository? (y/n)"

if ($continue -ne 'y') {
    Write-Host ""
    Write-Host "Please fork the repository first, then run this script again." -ForegroundColor Yellow
    Write-Host "Visit: https://github.com/saideepreddy7781/wildhorse" -ForegroundColor Cyan
    exit
}

Write-Host ""
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Username cannot be empty" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Setting up remotes..." -ForegroundColor Cyan

# Remove old origin
Write-Host "Removing old origin..." -ForegroundColor Gray
git remote remove origin 2>$null

# Add new origin (your fork)
Write-Host "Adding your fork as origin..." -ForegroundColor Gray
git remote add origin "https://github.com/$username/wildhorse.git"

# Add upstream (original repo)
Write-Host "Adding original repo as upstream..." -ForegroundColor Gray
git remote remove upstream 2>$null
git remote add upstream "https://github.com/saideepreddy7781/wildhorse.git"

Write-Host ""
Write-Host "New Remotes Configuration:" -ForegroundColor Green
git remote -v

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Ready to Push!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

$push = Read-Host "Push changes now? (y/n)"

if ($push -eq 'y') {
    Write-Host ""
    Write-Host "Pushing to your fork..." -ForegroundColor Cyan
    git push -u origin performance-optimization
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "================================" -ForegroundColor Green
        Write-Host "Success! Changes pushed!" -ForegroundColor Green
        Write-Host "================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next Steps:" -ForegroundColor Cyan
        Write-Host "1. Go to: https://github.com/$username/wildhorse" -ForegroundColor White
        Write-Host "2. Click 'Compare & pull request' button" -ForegroundColor White
        Write-Host "3. Fill in the PR details" -ForegroundColor White
        Write-Host "4. Click 'Create pull request'" -ForegroundColor White
        Write-Host ""
        Write-Host "PR Template saved in: GIT-SETUP-GUIDE.md" -ForegroundColor Yellow
    } else {
        Write-Host ""
        Write-Host "Push failed. You may need to authenticate." -ForegroundColor Red
        Write-Host ""
        Write-Host "Try:" -ForegroundColor Yellow
        Write-Host "1. GitHub CLI: gh auth login" -ForegroundColor White
        Write-Host "2. Or create Personal Access Token" -ForegroundColor White
        Write-Host "   Visit: https://github.com/settings/tokens" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "To push later, run:" -ForegroundColor Yellow
    Write-Host "git push -u origin performance-optimization" -ForegroundColor White
}

Write-Host ""
