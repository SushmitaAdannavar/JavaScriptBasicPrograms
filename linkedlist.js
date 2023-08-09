class node{
   
    constructor(value)
    {
       this.value=value
       this.next=null
    }
}

var head=null
var count=0

function AddNodeAtFront(value)
{
    const newnode=new node(value)
    if (head==null)
            {
                head = newnode;
                count++;
            }
    else
            {
                newnode.next = head;
                head = newnode;
                count++;
            }
    
}

function AddNodeAtLast(value)
{
    const newnode=new node(value)
    if (head==null)
            {
                head = newnode;
                count++;
            }
    else
            {
                let node1=head
                while(node1.next!=null)
               {
                node1 = node1.next;
               }
            node1.next = newnode;
            count++;
            }
    
}
function AddNodeAtPos(pos,value)
{   let nodecount=1
    const newnode=new node(value)
    if (pos==1)
            {
                AddNodeAtFront(value)
            }
    else
    {   let node2=head
        while(node2.next!=null)
        {
          if(nodecount==pos-1)
          { 
            newnode.next=node2.next
             node2.next=newnode
             break;
          }
          node2=node2.next
          nodecount++
        }
    }

}

function display()
{
    let node = head;
            while(node!=null)
            {   
                process.stdout.write(node.value+"->");
                node = node.next;
            }
}

function deleteNOdeAtFRont()
{
    console.log("Deleted first node" + head.value);
    let temp = head;
    head = head.next;
    temp = null;
    display()
    
}
function deleteNodeAtLast()
{  console.log();
    let temp=head
    let prevnode=null
    while(temp.next!=null)
    {   prevnode=temp
        temp=temp.next
    }
    prevnode.next=null
    temp=null
    display()
}
function deleteAtPos(pos)
{ console.log()
     let nodecount=1
    if(pos==1)
    {
        deleteNOdeAtFRont()
        display()
    }
    else
    {   let temp=head
        let prevnode=null
        while(temp.next!=null && nodecount!=pos)
        {
          prevnode=temp
          temp=temp.next
          nodecount++
        } 
        if(nodecount==pos)
        {
                prevnode.next = temp.next;
                console.log("Deleted value " + temp.value);
                temp = null;
                display();
        }
    }
}
AddNodeAtFront(12)
AddNodeAtFront(18)
AddNodeAtLast(16)
AddNodeAtPos(2,20)
display()
deleteNOdeAtFRont()
deleteNodeAtLast()
deleteAtPos(2)
