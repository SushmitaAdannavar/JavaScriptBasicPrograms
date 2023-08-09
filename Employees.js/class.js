class utility{
    Functionforfilter(Employee){
        const Filteredarray=Employee.filter((element)=>{
            return element.email='akshetty@gmail.com'
        })
        return Filteredarray
    }
}
//module.exports=new utility();