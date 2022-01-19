for (let i = 0; i < allArr.length; i++) {
    selectArr.forEach(element => {
        if (element==allArr[i]) {
           Arr3[i] =true
        } else {
           if (Arr3[i]==true) {
               Arr3[i] = true
           } else {
               Arr3[i] = false
           }
        }
    });
    
}
