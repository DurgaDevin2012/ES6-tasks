class Employee{
    constructor(name,age)
    {
        this.a=name
        this.b=age
    }
    getName(){
    console.log(this.a)
    }
    }
    
    
    let emp1=new Employee("Durga",22)
    emp1.getName()
    console.log(emp1);


    //class with child class

    class Details{
        constructor(name,age,Degree,Skill,isready,bloodgroup,mobileno){
        this.i=name;
        this.j=age;
        this.k=Degree;
        this.l=Skill;
        this.m=isready;
        this.n=bloodgroup;
        this.o=mobileno;
        }
    
    getDetail(){
    return  `My  is ${this.i}. My Age is${this.j}.I have completed ${this.k}.  I am a ${this.l}. My bloodgroup${this.n}. contact Me${this.o}`
    }
    }
    class mydet extends Details{
    constructor(name,age,Degree,Skill,isready,bloodgroup,mobileno,percentage){
    
    super(name,age,Degree,Skill,isready,bloodgroup,mobileno)
    this.x=percentage;
    }
    
    }
    
    
    let myDetails=new Details("DurgaDevi",22,"M.sc","Frond-end-Developer","Yes","O+",1234567890);
    console.log(myDetails);
    
    myDetails.getDetail()
    let myDetails1=new Details("Kuttymani",3,"LkG","Sleeping","no","z+","pattukutty");
    console.log(myDetails1);
    let myDetails2=new Details("naveen",25,"B.A","Developer","yes","O+",100);
    console.log(myDetails2);
    let myDetails3=new Details("Tamilarasi",23,"M.Sc","Frond-end-Developer","yes","O+",1938908988350);
    console.log(myDetails3);

    
    let newdet=new mydet ("DurgaDevi",22,"M.sc","Frond-end-Developer","Yes","O+",1234567890,[90]);
    console.log(newdet)