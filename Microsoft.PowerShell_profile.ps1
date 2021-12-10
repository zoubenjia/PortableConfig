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
    [string]$FullPath
    [bool]GetPackage()
    {
            $LocalZip = "$($env:TEMP)\$($this.Name).zip"
            Write-Host $LocalZip
            if (-not (test-path $LocalZip))
            {
                [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
                Invoke-WebRequest $this.DLURL -OutFile $LocalZip
                Set-Location $Global:Downloads
            }
            #Write-Host $this.FullPath
            if (($this.FullPath -eq "") -or -not (Test-Path $this.FullPath))
            {
                write-host "extracting $($this.Name).zip"
                Expand-Archive $LocalZip
            }
        return $true
    }
    [bool]SetFullPath()
    {
        Write-Host "Get-ChildItem $($Global:Downloads) -recurse -filter $($this.BinName)"
        $Path = Get-ChildItem $Global:Downloads -recurse -filter $this.BinName
        if ($Path)
        {
            $this.FullPath=$Path.FullName
        }
        else {
            $this.FullPath=""
        }
        return $true
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
        $this.GitProp=$g
        $this.SetFullPath()
    }
    [bool]Remove()
    {
        try {
            Write-Host "Removing $($this.Name)."
            Remove-Item "$($Global:Downloads)\$($this.Name)" -Recurse -Force
            Remove-Item "$($env:TEMP)\$($this.Name).zip" -Force

            return $true
        }
        catch {
            Write-Host $_
            return $false            
        }
    }
    [bool]Setup()
    {
        try {
            if (($this.FullPath -eq "") -or -not(Test-Path $this.FullPath))
            {
                Write-Host $this.DLURL
                if ($this.DLURL -eq "")
                {
                    $this.DLURL = $this.GitProp.GetPackURL()
                    write-host "getting pack url"
                }
                if ($this.DLURL -eq "")
                {
                    throw "No download URL detected!"
                }
                Write-Host "Getting $($this.Name) Package."
                $this.GetPackage()
                $this.SetFullPath()
                return $true                    
            }
            else
            {
                
                Write-Host "$($this.Name) is already setup."
                return $false
                    
            }
        
        }
        catch {
            Write-Host "ERROR during setup!"            
            Write-Host $_
            return $false            
        }
    }
}
[GitItem]$VIMGit = [GitItem]::new("vim","vim-win32-installer","(https://github.*?_$($Global:OsArc).zip)")
[Tool]$VSCodeTool=[Tool]::new("code","code.cmd","code",$null,"https://code.visualstudio.com/sha/download?build=stable&os=win32-$Global:OsArc-archive")
[Tool]$VIMTool=[Tool]::new("vim","vim.exe","vi",$VIMGit,"")
[GitItem]$RCGit = [GitItem]::new("zoubenjia","PortableConfig","(https://api.github.com/repos/zoubenjia/PortableConfig/zipball/usable)")
[Tool]$RCTool=[Tool]::new("rc","ISCLogin.cmd","ISCVPN",$RCGit,"https://api.github.com/repos/zoubenjia/PortableConfig/zipball/usable")
[Tool]$OCTool=[Tool]::new("oc","openconnect.exe","openconnect",$null,"https://gitlab.com/gereedschap/openconnect-windows/-/package_files/17964980/download")
function init {
    $VIMTool.Setup()
    $VSCodeTool.Setup()
    $OCTool.Setup()
    $RCTool.Setup()
    if (-not (Test-Path "$($HOME)\_vimrc"))
    {
        copy-item -force "$($Global:Downloads)\rc\*\_vimrc" -Destination "$($HOME)\_vimrc"
    }
    if (-not (Test-Path "$($HOME)\VPN"))
    {
        copy-item -Force "$($Global:Downloads)\rc\*\VPN" -Destination "$($HOME)\VPN"
    }
}
function reset {
    $VIMTool.Remove()
    $VSCodeTool.Remove()
    $OCTool.Remove()
    $RCTool.Remove()
    Remove-Alias $VSCodeTool.Alias   
    Remove-Alias $VIMTool.Alias   
    Remove-Alias $OCTool.Alias
    Remove-Alias ISCVPN   
    Remove-Alias AUHOSTVPN
}
#reset
init
set-Alias -Name $VSCodeTool.Alias -Value $VSCodeTool.FullPath
set-Alias -Name $VIMTool.Alias -Value $VIMTool.FullPath
set-Alias -Name $OCTool.Alias -Value $OCTool.FullPath
set-alias -Name ISCVPN -Value "$($Global:Downloads)\VPN\ISCLogin.cmd"
set-alias -Name AUHOSTVPN -Value "$($Global:Downloads)\VPN\Login.ps1"
