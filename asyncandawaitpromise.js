let a=222;
		let b=a;
		let sum=0;
			function pali(){
			return new Promise((c,d)=>
			{
			while(a!=0)
			{
			let rem=a%10;
			a=(a-rem)/10;
			sum=sum*10+rem
			}
			c(sum)
			})
			}
			
			function check(sum){
			console.log(sum);
			return new Promise((c,d)=>
			{
			if(b==sum)
			{
			c("Palindrome")
			}
			else
			{
			d("Not Palindrome")
			}
			})
			}
			
			async function number(){
			try{
				let i=await pali()
				console.log(i)
				let j=await check(i)
				console.log(j)
			}
			catch 
			{
			console.log("error")
			}
			}
			number()