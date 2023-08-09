var queue=[]
var front=-1
var rear=-1

function enqueue(item)
{
    if(front==-1 && rear==-1)
    {
        front=0
        rear=0
    }
    else
    {
        rear+=1
    }
    queue[rear]=item
    display()
}
function dequeue(callBack)
{
    if(front==-1|| front>rear)
    {
        console.log('Underflow')
    }
    else{
        front++
    }
    callBack()
}
function display()
{
    for(i=front;i<=rear;i++)
    {
        process.stdout.write(queue[i]+" ")
    }
    console.log()
}
enqueue(8)
enqueue(9)
enqueue(10)
enqueue(11)
dequeue(display)
dequeue(display)
dequeue(display)
dequeue(display)
dequeue(display)