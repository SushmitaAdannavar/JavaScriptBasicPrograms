var stackelements=[]
var stop=-1
push(1);
push(2);
push(3);
push(4);   
pop();
pop() 
pop()
pop() 
pop()
//pop();    


function push(item)
{
    stop++
    stackelements[stop]=item
    display()
    
}
function pop()
{  
  if(stop==-1)
  {
    console.log('Stack is empty and cant delete element')
  }
  else
  {
   //stackelements.length-=1
   stop-=1
   display()
  }
    
}

function display()
{   console.log()
    for(i=0;i<=stop;i++)
    {
        process.stdout.write(stackelements[i]+" ")
    }
}




