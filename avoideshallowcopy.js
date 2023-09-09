// speard operator

var x=[1,2,3,4]
var y=[...x]
y.push(5,6,7,8)
console.log( x,y)


//JSON Stringify
let detail={name:"durga",
            age:22,
        place:"kadayanallur"}

let del=JSON.parse(JSON.stringify(detail))
del.bloodgroup="O+";
console.log(detail,del)


//Object assign

let object={name:"kuttymani",
            age:3,
        color:"white"}
let dog=Object.assign({},object);
dog.weight=20;

console.log(object,dog)
