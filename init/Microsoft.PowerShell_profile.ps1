#iwr https://gist.github.com/zoubenjia/96bd7e4b84fc6b22f994b34843908bf2/raw/2a809bcd60769912ae29979df82817a2031481a9/gistfile1.txt -OutFile $profile
#github action test
Set-PSReadLineOption -EditMode vi -BellStyle None
switch -Regex ($env:PROCESSOR_ARCHITECTURE) {
    '64' { $OsArc = 'x64'; Break }
    '32' { $OsArc = 'x32'; Break }
    '86' { $OsArc = 'x86'; Break }
    Default { $OsArc = 'x64' }
}
#Write-Host "OS arch is: "$OsArc
$Global:OsArc = $OsArc
$Global:Downloads = "$($HOME)\Downloads"
Class GitItem {
    [string]$User
    [string]$Repo    
    [string]$DlPattern
    [string]GetPackURL() {
        Write-Host "https://api.github.com/repos/$($this.User)/$($this.Repo)/releases/latest"      
        $ApiLatest = Invoke-RestMethod "https://api.github.com/repos/$($this.User)/$($this.Repo)/releases/latest"
        Write-Host $ApiLatest
        $URLmatches = Select-String -Pattern $this.DlPattern -InputObject $ApiLatest
        write-debug $this.DlPattern
        return $URLmatches.Matches.Groups[1].Value
    }
    GitItem($u, $r, $p) {
        $this.User = $u
        $this.Repo = $r
        $this.DlPattern = $p
    }
    GitItem([GitItem]$g) {
        $this.User = $g.User
        $this.Repo = $g.Repo
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
    [bool]GetPackage() {
        Set-Location $Global:Downloads
        if (($this.FullPath -eq "") -or -not (Test-Path $this.FullPath)) {
		write-host "$($this.DLURL)"
            if ($this.DLURL -match "7z") {
                $LocalExe = "$($env:TEMP)\$($this.Name).exe"
                Write-Host "Downloading $LocalExe"
                if (-not (test-path $LocalExe)) {
                    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
                    Invoke-WebRequest $this.DLURL -OutFile $LocalExe
                }
                $Global:7zcmd = "& `"$($LocalExe)`" /S /D=`"$($Global:Downloads)\$($this.Name)\`""
                #$7zcmd = & "$($LocalExe)" /S /D="$($Global:Downloads)\$($this.Name)\"
                #Invoke-Expression $7zcmd 
            }
            else{#([System.IO.Path]::GetExtension($this.DLURL) -eq "zip") {
        Write-Host "dlurl:$($this.DLURL)"
                $LocalZip = "$($env:TEMP)\$($this.Name).zip"
                if (-not (test-path $LocalZip)) {
                    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
                    Invoke-WebRequest $this.DLURL -OutFile $LocalZip
                }
                write-host "extracting $($this.Name).zip"
                Expand-Archive $LocalZip
                
            }
        }
            return $true
    }
        [bool]SetFullPath() {
            #Write-Host "Get-ChildItem $($Global:Downloads) -recurse -filter $($this.BinName)"
            $Path = Get-ChildItem "$($Global:Downloads)\$($this.Name)" -recurse -filter $this.BinName
            if ($Path) {
                $this.FullPath = $Path.FullName
            }
            else {
                $this.FullPath = ""
            }
            return $true
        }
        Tool(
            [string]$n,
            [string]$bn,
            [string]$a,  
            [GitItem]$g,
            [string]$u    
        ) {
            $this.Name = $n
            $this.BinName = $bn
            $this.Alias = $a
            $this.DLURL = $u
            $this.GitProp = $g
            $this.SetFullPath()
        }
        [bool]Remove() {
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
        [bool]Setup() {
            try {
                if (($this.FullPath -eq "") -or -not(Test-Path $this.FullPath)) {
                    Write-Host $this.DLURL
                    if ($this.DLURL -eq "") {
                        $this.DLURL = $this.GitProp.GetPackURL()
                        write-host "getting pack url"
                    }
                    if ($this.DLURL -eq "") {
                        throw "No download URL detected!"
                    }
                    Write-Host "Getting $($this.Name) Package."
                    $this.GetPackage()
                    $this.SetFullPath()
                    return $true                    
                }
                else {
                
                    #Write-Host "$($this.Name) is already setup."
                    return $false
                    
                }
        
            }
            catch {
                Write-Host "ERROR during setup!"            
                Write-Host $_
                return $false            
            }
            return $true
        }
    }
    [Tool]$7ZTool = [Tool]::new("7z", "7z.exe", "7z",$null, "https://www.7-zip.org/a/7z2107-x64.exe")

    [GitItem]$VIMGit = [GitItem]::new("vim", "vim-win32-installer", "(https://github.*?_$($Global:OsArc).zip)")
    [GitItem]$RCGit = [GitItem]::new("zoubenjia", "PortableConfig", "(https://api.github.com/repos/zoubenjia/PortableConfig/zipball/latest)")
    [Tool]$VSCodeTool = [Tool]::new("code", "code.cmd", "code", $null, "https://code.visualstudio.com/sha/download?build=stable&os=win32-$Global:OsArc-archive")
    [Tool]$VIMTool = [Tool]::new("vim", "vim.exe", "vi", $VIMGit, "")
    [Tool]$RCTool = [Tool]::new("rc", "ISCLogin.ps1", "ISCVPN", $RCGit, "https://github.com/zoubenjia/PortableConfig/archive/refs/tags/latest.zip")
    [Tool]$OCTool = [Tool]::new("oc", "openconnect.exe", "openconnect", $null, "https://gitlab.com/gereedschap/openconnect-windows/-/package_files/17964980/download")
    [Tool]$PyTool = [Tool]::new("py", "python.exe", "py", $null, "https://www.python.org/ftp/python/3.10.1/python-3.10.1-embed-amd64.zip")
    [Tool]$GitTool = [Tool]::new("git", "git.exe", "git", $null, "https://github.com/git-for-windows/git/releases/download/v2.34.1.windows.1/PortableGit-2.34.1-64-bit.7z.exe")

    $Candidates = $VSCodeTool, $OCTool, $RCTool, $PyTool, $GitTool
    #$Candidates = $7zTool, $VIMTool, $VSCodeTool, $OCTool, $RCTool, $PyTool, $GitTool
    function init {
        #Invoke-Expression $Global:7zcmd 
        foreach ($item in $Candidates) {
            $sc = $item.Setup() 
            if (Test-Path $item.FullPath)
            {
                set-Alias -Name "$($item.Alias)" -Value "$($item.FullPath)"
                Write-Output "Setting up $($item.Name). FullPath:$($item.FullPath) $sc"
            }
        }

        if (-not (Test-Path "$($HOME)\_vimrc")) {
            copy-item -force "$($Global:Downloads)\rc\*\_vimrc" -Destination "$($HOME)\_vimrc"
        }
        if (-not (Test-Path "$($Global:Downloads)\VPN")) {
            copy-item -Force "$($Global:Downloads)\rc\*\VPN" -Recurse -Destination "$($Global:Downloads)\VPN"
        }
        set-alias -Name ISCVPN -Value "$($Global:Downloads)\VPN\ISCLogin.ps1"
        set-alias -Name BHVPN -Value "$($Global:Downloads)\VPN\BHLogin.ps1"
        set-alias -name vpncli -value "C:\Program Files (x86)\Cisco\Cisco AnyConnect Secure Mobility Client\vpncli.exe"
	write-output "done"
    }
    function reset {
        foreach ($item in $Candidates) {
            $sc = $item.Remove() 
            Remove-Alias $item.Alias   
        }
        Write-Output $sc
        Remove-Alias ISCVPN   
        Remove-Alias AUHOSTVPN
    }
    reset
    init
    #& $env:TEMP\7z.exe /S /D=$Global:Downloads/7z/

