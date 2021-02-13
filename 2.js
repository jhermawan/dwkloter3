let params = [0,1,2,4,6,5,3];
let sort = params.sort();


function cekMedian(angka)
{ 
    let index = Math.floor(angka.length/2);
    //jumlah angka ganjil
    if(angka.length % 2 != 0)
    {
        let hasil = angka[index];
        return hasil;
    }else
    {
        let hasil = (angka[index-1] + angka[index]) /2;
        return hasil;
    }
    
}
console.log("cekMedian(["+sort+"])");
console.log("Result: Median dari array tersebut adakah " +cekMedian(sort));


