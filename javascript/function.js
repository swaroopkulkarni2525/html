//basic use of function 
function say()
{
    document.write("hello");
}

function say1(name,age)
{
    if(name==""||age=="")
    {
        return false;
    }
    document.write(name+"is"+age+"year old");
    
}
//error handleing
function myfunction()
{ var a=100;
    try{
var s=a.toUppercase();
alert("vale of variable is :" +a);
    }
    catch(e)
    {
        alert("error");

    }
    finally
    {
alert("finaly block will always opens");
    }
    
}