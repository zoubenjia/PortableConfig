#Set-PSReadLineOption -EditMode vi -BellStyle None
switch -Regex ($env:PROCESSOR_ARCHITECTURE) {
    '64' { $OsArc = 'x64'; Break }
    '32' { $OsArc = 'x32'; Break }
    '86' { $OsArc = 'x86'; Break }
    Default {$OsArc = 'x64'}
}
Write-Host "OS arch is: "$OsArc
$Global:OsArc=$OsArc
$Global:Downloads="$($HOME)\Downloads"
Class GitItem {
    [string]$User
    [string]$Repo    
    [string]$DlPattern
    [string]GetPackURL()
    {
        Write-Host "https://api.github.com/repos/$($this.User)/$($this.Repo)/releases/latest"      
        $ApiLatest = Invoke-RestMethod "https://api.github.com/repos/$($this.User)/$($this.Repo)/releases/latest"
        #Write-Host $ApiLatest
        $URLmatches = Select-String -Pattern $this.DlPattern -InputObject $ApiLatest
        write-debug $this.DlPattern
        return $URLmatches.Matches.Groups[1].Value
    }
    GitItem($u,$r,$p)
    {
        $this.User=$u
        $this.Repo=$r
        $this.DlPattern = $p
    }
    GitItem([GitItem]$g)
    {
        $this.User=$g.User
        $this.Repo=$g.Repo
        $this.DlPattern = $g.DlPattern
    }
}

class Tool {
    [string]$Name
    [string]$DLURL
    [GitItem]$GitProp
    [string]$BinName
    [string]$Alias
    [bool]GetPackage()
    {
            $LocalZip = "$($env:TEMP)\$($this.Name).zip"
            Write-Host $LocalZip
            if (-not (test-path $LocalZip))
            {
                Invoke-WebRequest $this.DLURL -OutFile $LocalZip
            }
            Set-Location $Global:Downloads
            write-host "extracting $($this.Name).zip"
            Expand-Archive $LocalZip
            return $true
    }
    [string]GetFullPath()
    {
        $FullPath = Get-ChildItem -recurse -filter $this.BinName
        return $FullPath.FullName
    }
    Tool(
        [string]$n,
        [string]$bn,
        [string]$a,  
        [GitItem]$g,
        [string]$u    
    )
    {
        $this.Name = $n
        $this.BinName = $bn
        $this.Alias = $a
        $this.DLURL = $u
        try {
            $this.GitProp=$g
            Write-Host $this.DLURL
            if ($this.DLURL -eq "")
            {
                $this.DLURL = $this.GitProp.GetPackURL()
            }
            if ($this.DLURL -eq "")
            {
                throw "No download URL detected!"
            }
            $this.GetPackage()
        }
        catch {
            Write-Host "ERROR during setup!"            
            Write-Host $_            
        }
    }
}
[GitItem]$VIMGit = [GitItem]::new("vim","vim-win32-installer","((https://github.*?_$($Global:OsArc).zip))")
[Tool]$VIMTool=[Tool]::new("vim","vim.exe","vi",$VIMGit,"")
[Tool]$VSCodeTool=[Tool]::new("code","code.cmd","code",$null,"https://code.visualstudio.com/sha/download?build=stable&os=win32-$Global:OsArc-archive")
set-Alias -Name $VSCodeTool.Alias -Value $VSCodeTool.GetFullPath()
set-Alias -Name $VIMTool.Alias -Value $VIMTool.GetFullPath()
Invoke-WebRequest 
