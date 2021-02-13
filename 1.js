let params = '';

params = prompt("Masukan kata")
//memecah kalimat menjadi kata 
let splitparams = params.split(" ");

function checkKalimat(kalimat)
{
        let firstletter = '';
        let hasil = '';

        for(let i=0;i<kalimat.length;i++)
            {
                //huruf terakhir tidak diberi koma
                if(i == (kalimat.length-1))
                {
                    firstletter = splitparams[i].charAt(0);
                    hasil += firstletter;
                 }else
                 {
                    firstletter = splitparams[i].charAt(0);
                    hasil += firstletter + ","; 
                 }
            }
        return hasil;
}

console.log("Params: " + params);
console.log("Result: " + checkKalimat(splitparams));




 
