$SourceDir = "c:\Users\HARMONY\Desktop\portfolioarchi-main\src\assets"
Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param([string]$PathToImg)
    
    try {
        $img = [System.Drawing.Image]::FromFile($PathToImg)
        $maxWidth = 1600
        $maxHeight = 1600
        
        if ($img.Width -gt $maxWidth -or $img.Height -gt $maxHeight) {
            $ratioX = $maxWidth / $img.Width
            $ratioY = $maxHeight / $img.Height
            $ratio = [Math]::Min($ratioX, $ratioY)
            
            $newWidth = [int]($img.Width * $ratio)
            $newHeight = [int]($img.Height * $ratio)
            
            $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($newImg)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            $img.Dispose()
            
            $tmp = $PathToImg + ".tmp.jpg"
            
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 80)
            
            $newImg.Save($tmp, $codec, $params)
            $newImg.Dispose()
            $graphics.Dispose()
            
            Remove-Item -LiteralPath $PathToImg -Force
            Move-Item -LiteralPath $tmp -Destination $PathToImg -Force
            Write-Host "Optimized: $PathToImg"
        } else {
            $img.Dispose()
        }
    } catch {
        Write-Warning "Failed to process ${PathToImg}: $_"
    }
}

Get-ChildItem -Path "$SourceDir" -Include *.jpg,*.png,*.jpeg -Recurse | ForEach-Object {
    Optimize-Image -PathToImg $_.FullName
}


