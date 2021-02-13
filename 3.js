let s = '';
let pola = 6;

function cetakPolaSegitigaPascalCustom(n)
{
    let a =1;
    let i =1;

    while(i<=n)
    {
        a *= i;
        i++;
    }

    return a;
}



for(let i =0; i<pola;i++)
{
    for(let j = pola; j >= i;j--)
    {
        s += ' ';
    }

    for(let j=0;j<=i;j++)
    {
        let kode = cetakPolaSegitigaPascalCustom(i) / (cetakPolaSegitigaPascalCustom(j) * cetakPolaSegitigaPascalCustom(i -j));
        if(kode == 1)
        {
            s+= "x ";
        }else if(kode ==2)
        {
            s+= "y ";
        }else if(kode ==3)
        {
            s+="z ";
        }else if(kode ==4)
        {
            s+="a ";
        }else if(kode ==5)
        {
            s+="b ";
        }else if(kode ==6)
        {
            s+="c ";
        }else if(kode ==10)
        {
            s+="d ";
        }
    }

    s+='\n';
}

console.log(s)


