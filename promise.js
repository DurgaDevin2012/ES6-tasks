// promise

let z=Math.round(Math.random()*10);
				console.log(z);
				function p(z)
				{
				return new Promise((c,d)=>{
				if(z==5)
				{
				c(" It is Success");
				}
				else
				{
				d(" It is failed");
				}
				})
				}
				p(z).then(console.log)
				p(z).catch(console.log);