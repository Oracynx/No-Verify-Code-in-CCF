async () =>
{
    (document.getElementById('hiddenCheckCode') as HTMLInputElement).value = '';
    (document.getElementById('checkCode') as HTMLInputElement).hidden = true;
    (document.getElementById('codeImg') as HTMLInputElement).hidden = true;
}