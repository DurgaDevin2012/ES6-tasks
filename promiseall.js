function one(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    c("Hi")
    },2000)
    })
    }
    function two(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    c("How are you")
    },1000)
    })
    }
    function three(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    d("Loading")
    },0)
    })
    }
    Promise.all([one(),two(),three()])
    .then(console.log)
    .catch(console.log)