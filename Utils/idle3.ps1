Clear-Host
Write-Host "`n`n`n`n`n`n`n`ndun dun dun dun--Staying alive. staying alive"

$wShell = New-Object -com "Wscript.Shell"

while ($true){

[int]$Time = 90
$Length = $Time / 100

  For ($Time; $Time -gt 0; $Time--) {
    $min = [int](([string]($Time/60)).split('
    .')[0])
    $text = " " + $min + " minutes " + ($Time % 60) + " seconds"
  

   Write-Progress -Activity "Running..." -Status $Text -PercentComplete ($Time / $Length)
     Start-Sleep 1
  }
  $WShell.sendkeys("{SCROLLLOCK}")
    Start-Sleep -Milliseconds 200
  $WShell.sendkeys("{SCROLLLOCK}")
    Start-Sleep -Seconds $Time

  }