function palindrome (a)
{
    let sum=0
    while(a!=0)
    {
        let rem =a%10;
        a=(a-rem)/10;
        sum=(sum*10)+rem;
    }
    return sum;
}
function check(a)
{
    let d=palindrome(a)
    if(d==a)
    {
        console.log("Palindrome")
    }
    else
    {
        console.log("Not palindrome")
    }
}
check(121)