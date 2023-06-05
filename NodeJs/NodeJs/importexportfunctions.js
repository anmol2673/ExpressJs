exports.mul=function(n1,n2){
    return n1*n2

}
//console.log("multiplication: "+mul(3,4))

exports.devide=function(n1,n2){
    return n1/n2
}

exports.combination=function(n,r){
var ans=(factorial(n)/factorial(n-r))/factorial(r);
return ans;
}

factorial=function(n){
    var f=1;
    for(var i=1;i<=n;i++){
        f=f*i;

    }
    return f;
}
