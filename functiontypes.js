// WITH ARGUMENT AND WITH RETURN
function smaller(a,b,c){
    if (a<b &&a<c)
    {
    console.log(" A is smaller");
    }
    else if(b<a &&b<c)
    {
    console.log(" B is smaller");
    }
    else
    {
    console.log(" C is smaller");
    }
    }smaller(10,30,9)



    //WITH ARGUMENT AND WITHOUT RETURN
		
			function consonantsInString(str) {
                var count = 0; 
                for (var i = 0; i < str.length; i++) { 
                if (str[i] != "a" && str[i] !="e" && str[i] != "i" && 
                str[i] != "o" && str[i] != "u" && str[i] != " ")
                { 
                count++; 
                } 
                } 
                console.log(" Consonants are:"+count);   
                }
                consonantsInString("fabevy");


    // WIHTOUTARGUMENT AND WITH RETURN
			function arraysum(){
                let arr=[1,2,3];
                let sum=0;
                for(i=0;i<arr.length;i++)
                {
                sum=sum+arr[i];
                }
                return sum;
                }
                arraysum()
                let x=arraysum();
                console.log(x); 



    //	WITHOUT ARGUMENT AND WITHOUT RETURN
		
		function addition()
		{
		var a=20;
		var c=5;
		
		console.log(a+c);         
		}
		addition()