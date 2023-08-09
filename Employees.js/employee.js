const Employee=[
    {firstname:'Rahul',lastname:'Patil',email:'rahul@gmail.com',phonenum:'9012345678',dailywage:800},
    {firstname:'Akshara',lastname:'Shetty',email:'akshetty@gmail.com',phonenum:'956743218',dailywage:850},   
    {firstname:'Rani',lastname:'Patil',email:'ranipatil@gmail.com',phonenum:'9054321678',dailywage:900},
    {firstname:'Akshay',lastname:'Shri',email:'akshri@gmail.com',phonenum:'9567432180',dailywage:970},
]
class utility{
    Functionforfilter(Employee,searchstring){
        const Filteredarray=Employee.filter((element)=>{
            return element.email==searchstring
        })
        console.log(Filteredarray)
        return Filteredarray
    }
}

console.log("Full name of employees:")
Employee.forEach((element)=>{
    let fullname=element.firstname+" "+element.lastname
    console.log(fullname)
});

const Highpay=Employee.map((element)=>{
   if(element.dailywage>800)
   {return element;}

})
console.log(Highpay);


 console.log(Filteredarray);
 const util1=new utility();
 util1.Functionforfilter(Employee,'akshetty@gmail.com');

