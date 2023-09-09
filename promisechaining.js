let a=10;
		let b=10;
		function add(){
		return new Promise((e,f)=>
		{
		
		let c=a+b;
		console.log(c);
		e(c)
		})
		
		}
		function check(x){
	
		return new Promise((e,f)=>
		{
			console.log(x)
		if(x==20)
		{
		e(" Success")
		}
		else
		{
		f("Fail")
		}
		})
		}

		
		add().then((x)=>
		{
		console.log(x)
		check(x).then(console.log)
		})
		.catch((z)=>
		{
		console.log(z);
		})