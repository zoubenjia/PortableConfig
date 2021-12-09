$vim="~\Download\vim"
$vimURL = "https://github.com/vim/vim-win32-installer/releases/download/v8.2.3761/gvim_8.2.3761_x64.zip"
$vimzip = $vim+"\zip\latest.zip"
if (-not (test-path $vim)) 
{
    ni -it dir $vim+"\zip"
    iwr $vimURL -OutFile $vimzip
    Expend-Archive $vimzip -force 
}
Set-PSReadLineOption -EditMode vi -BellStyle None
New-Alias -Name vi -Value '~\Downloads\vim\vim.exe'
New-Alias -Name vim -Value '~\Downloads\vim\vim.exe'