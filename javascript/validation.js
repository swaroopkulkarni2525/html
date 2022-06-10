function validation()
{
    if(document.myform.name.value=="")
    {
        alert("please fill name");
        document.myform.name.focus();
        return false;
    }
    if(document.myform.password.value =="")
    {
        alert("please fill password")
        document.myform.password.focus();
        return false;

    }
}