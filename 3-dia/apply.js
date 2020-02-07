function sayThis(n1,n2){  
    console.log(this * n1 * n2);
}

sayThis.apply(2, [3, 3]);

sayThis.apply(1, [3, 3]);