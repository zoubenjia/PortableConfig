$vim="$HOME\Downloads\vim"
if (-not (test-path $vim)) 
{
    try{
        $vimzip = "$env:TEMP\vim.zip"
        if (-not (test-path $vimzip))
        {   
            $vimlatest = Invoke-RestMethod https://api.github.com/repos/vim/vim-win32-installer/releases/latest
            switch -Regex ($env:PROCESSOR_ARCHITECTURE) {
                '64' { $osarc = 'x64'; Break }
                '32' { $osarc = 'x32'; Break }
                '86' { $osarc = 'x86'; Break }
                Default {$osarc = 'x64'}
            }
            Write-Host "OS arch is: "$osarc
            $dlpattern = "((https://github.*?_$osarc.zip))"
            $URLmatches = Select-String -Pattern $dlpattern -InputObject $vimlatest.body
            $vimURL = $URLmatches.Matches.Value
            if ($vimURL)
            {
                write-host "Find latest vim zip download URL: $vimURL"
            }
            else {
                write-host "empty url!"
            }
            Invoke-WebRequest $vimURL -OutFile $vimzip
        }
        Set-Location "$HOME\Downloads"
        write-host "extracting vim zip"
        Expand-Archive $vimzip 
        $vimbin = "$HOME\Downloads\vim\vim\vim82\vim.exe"
        set-Alias -Name vi -Value $vimbin
        set-Alias -Name vim -Value $vimbin
        }

    catch{
        write-host "Error!"
        Write-Host $_
    }
}
Set-PSReadLineOption -EditMode vi -BellStyle None