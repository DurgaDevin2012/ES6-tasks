//destructive  in array

const a=[1,2,3,4,5]
			const[c,d,...x]=a
			console.log(c,d,x);

//destructive in object

var obj={e:1,f:2,g:3,h:9,i:5}
			const {e,f,g}=obj;
			console.log(e,f,g);



//template literal

let ani="dog";
console.log(`My Pet is ${ani}`)