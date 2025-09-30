async function main()
{
    (document.getElementById('checkCode') as HTMLInputElement).value = (document.getElementById('hiddenCheckCode') as HTMLInputElement).value;
}

main();