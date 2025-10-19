# Image Size Checker
# Run this in PowerShell to see all image sizes

Write-Host "Checking image sizes in src/assets..." -ForegroundColor Cyan
Write-Host ""

$totalSize = 0
$imageCount = 0

Get-ChildItem -Path "src/assets" -Include *.jpg,*.jpeg,*.png,*.avif -Recurse | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1KB, 2)
    $totalSize += $sizeKB
    $imageCount++
    
    $color = "Green"
    if ($sizeKB -gt 500) { $color = "Red" }
    elseif ($sizeKB -gt 200) { $color = "Yellow" }
    
    Write-Host "$($_.Name): " -NoNewline
    Write-Host "$sizeKB KB" -ForegroundColor $color
}

Write-Host ""
Write-Host "Total Images: $imageCount" -ForegroundColor Cyan
Write-Host "Total Size: $([math]::Round($totalSize / 1024, 2)) MB" -ForegroundColor Cyan
Write-Host ""

if ($totalSize -gt 5120) {
    Write-Host "WARNING: Total image size is large!" -ForegroundColor Red
    Write-Host "Recommendation: Optimize images to reduce load times" -ForegroundColor Yellow
} else {
    Write-Host "Image sizes look reasonable" -ForegroundColor Green
}
