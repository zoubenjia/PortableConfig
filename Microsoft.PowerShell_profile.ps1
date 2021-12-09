$vim="~\Download\vim"
$vimURL = "https://github.com/vim/vim-win32-installer/releases/download/v8.2.3761/gvim_8.2.3761_x64.zip"
$vimzip = $env:TEMP+"\vim.zip"
$vimbin = $HOME+"\Download\vim\vim\vim82\vim.exe"
if (-not (test-path $vim)) 
{
    #New-Item -it dir $vim"\zip"
    Invoke-WebRequest $vimURL -OutFile $vimzip
    Set-Location "~\Download"
    Expand-Archive $vimzip -force 
}
remove-Alias -Name vi 
remove-Alias -Name vim
New-Alias -Name vi -Value $vimbin
New-Alias -Name vim -Value $vimbin
Set-PSReadLineOption -EditMode vi -BellStyle None