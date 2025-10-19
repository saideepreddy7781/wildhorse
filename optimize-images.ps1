# Automated Image Optimization Script
# This script will compress all images in src/assets

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Image Optimization Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if ImageMagick is installed
$magickPath = (Get-Command magick -ErrorAction SilentlyContinue)
if (-not $magickPath) {
    Write-Host "ERROR: ImageMagick is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install ImageMagick:" -ForegroundColor Yellow
    Write-Host "1. Visit: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    Write-Host "2. Download and install for Windows" -ForegroundColor Yellow
    Write-Host "3. Restart PowerShell and run this script again" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "OR use online tools:" -ForegroundColor Yellow
    Write-Host "- TinyPNG: https://tinypng.com/" -ForegroundColor Yellow
    Write-Host "- Squoosh: https://squoosh.app/" -ForegroundColor Yellow
    exit
}

Write-Host "ImageMagick found! Proceeding with optimization..." -ForegroundColor Green
Write-Host ""

$sourcePath = "src/assets"
$backupPath = "src/assets-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

# Create backup
Write-Host "Creating backup..." -ForegroundColor Cyan
if (-not (Test-Path $sourcePath)) {
    Write-Host "ERROR: src/assets folder not found!" -ForegroundColor Red
    exit
}

Copy-Item $sourcePath $backupPath -Recurse -Force
Write-Host "Backup created: $backupPath" -ForegroundColor Green
Write-Host ""

# Get all images
$images = Get-ChildItem -Path $sourcePath -Include *.jpg,*.jpeg,*.png -Recurse

Write-Host "Found $($images.Count) images to optimize" -ForegroundColor Cyan
Write-Host ""

$totalSizeBefore = 0
$totalSizeAfter = 0
$optimizedCount = 0

foreach ($image in $images) {
    $sizeBefore = $image.Length
    $totalSizeBefore += $sizeBefore
    
    $sizeBeforeKB = [math]::Round($sizeBefore / 1KB, 2)
    
    Write-Host "Optimizing: $($image.Name) ($sizeBeforeKB KB)..." -NoNewline
    
    try {
        # Optimize image
        # - Resize to max 1920px on longest side
        # - Quality 80%
        # - Strip metadata
        # - Convert PNG to JPG if large
        
        $outputFile = $image.FullName
        
        if ($image.Extension -eq ".png" -and $sizeBefore -gt 1MB) {
            # Convert large PNGs to JPG
            $outputFile = $image.FullName -replace '\.png$', '.jpg'
            & magick $image.FullName -quality 80 -strip -resize "1920x1920>" $outputFile
            Remove-Item $image.FullName
            Write-Host " Converted to JPG" -ForegroundColor Yellow
        } else {
            & magick $image.FullName -quality 80 -strip -resize "1920x1920>" $outputFile
            Write-Host " Done" -ForegroundColor Green
        }
        
        $imageAfter = Get-Item $outputFile
        $sizeAfter = $imageAfter.Length
        $totalSizeAfter += $sizeAfter
        
        $sizeAfterKB = [math]::Round($sizeAfter / 1KB, 2)
        $savedKB = [math]::Round(($sizeBefore - $sizeAfter) / 1KB, 2)
        $savedPercent = [math]::Round((($sizeBefore - $sizeAfter) / $sizeBefore) * 100, 1)
        
        Write-Host "  Before: $sizeBeforeKB KB | After: $sizeAfterKB KB | Saved: $savedKB KB ($savedPercent%)" -ForegroundColor Gray
        
        $optimizedCount++
    }
    catch {
        Write-Host " FAILED" -ForegroundColor Red
        Write-Host "  Error: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Optimization Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

$totalSizeBeforeMB = [math]::Round($totalSizeBefore / 1MB, 2)
$totalSizeAfterMB = [math]::Round($totalSizeAfter / 1MB, 2)
$totalSavedMB = [math]::Round(($totalSizeBefore - $totalSizeAfter) / 1MB, 2)
$totalSavedPercent = [math]::Round((($totalSizeBefore - $totalSizeAfter) / $totalSizeBefore) * 100, 1)

Write-Host "Images Optimized: $optimizedCount / $($images.Count)" -ForegroundColor Cyan
Write-Host "Total Size Before: $totalSizeBeforeMB MB" -ForegroundColor Yellow
Write-Host "Total Size After: $totalSizeAfterMB MB" -ForegroundColor Green
Write-Host "Total Saved: $totalSavedMB MB ($totalSavedPercent%)" -ForegroundColor Green
Write-Host ""
Write-Host "Backup Location: $backupPath" -ForegroundColor Cyan
Write-Host ""

if ($totalSavedPercent -gt 50) {
    Write-Host "Excellent! Your website will load much faster now!" -ForegroundColor Green
} elseif ($totalSavedPercent -gt 20) {
    Write-Host "Good optimization! Performance should be noticeably better." -ForegroundColor Green
} else {
    Write-Host "Images were already fairly optimized." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Test your website to verify images still look good" -ForegroundColor White
Write-Host "2. Run: .\check-images.ps1 to verify sizes" -ForegroundColor White
Write-Host "3. If happy, you can delete backup folder: $backupPath" -ForegroundColor White
Write-Host ""
