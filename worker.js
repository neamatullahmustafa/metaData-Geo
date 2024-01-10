self.onmessage = function(){
    let s = 0;
    for(let i=0;i<1000000000;i++){
        s+= i;
    }
    alert(s);
    self.postMessage(s);
}