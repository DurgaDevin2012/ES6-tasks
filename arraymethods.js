//arraymethods

//map() method.

let array=[{name:"elephant"},{name:"rat"},{name:"buffalo"}]
			let z=array.map((val,index)=>
			{
			return {... val,color:"Black",category:"animal"}
			});
			console.log(z);


//filter() method

let arr1=[{name:" Durga",position:"fresher"},{name:" Devi",position:"fresher"},
			{name:" ashwinth",position:"junior"},{name:" kalai",position:"midlevel"},{name:" Durga",position:"senior"}]
			let o=arr1.filter((value,index)=>
			{
			return value.position==="fresher";
			});
			console.log(o);


//find() method

let arr3=[{name:"durga",age:14},{name:"kuttymani",age:3},{name:"naveen",age:23},{name:"tamilarasi",age:21}]
				let f=arr3.find((val,index)=>
				{
				return val.age<10;
				});
				console.log(f);


//reduce() method


let a=[1,2,3]
let b=a.reduce((a,b)=>
{
    return a-b;
})
console.log(b)

//every() method

let arr4=[{name:"durga",age:14},{name:"kuttymani",age:3},
				{name:"naveen",age:23},{name:"tamilarasi",age:21}]
				let q=arr4.every((val,index)=>
				{
				return val.age>10;
				});
				console.log(q);

//some() method

let arrays=[{name:" yugeshwaran",position:"fresher"}
			,{name:" DurgaDevi",position:"fresher"},
			{name:" ashwinth",position:"junior"},{name:" kalai",position:"midlevel"},
			{name:" Durga",position:"senior"}]
			let n=arrays.some((val,index)=>
			{
			return val.name.length<10;
			});
			console.log(n);

//sort() method

	
let g=[11,2,33,4,50];
let k=g.sort((a,b)=>
{
    return b-a;
})
console.log(k);