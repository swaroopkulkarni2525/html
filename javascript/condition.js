//if condition
var num1=parseInt( prompt("enter mark1"));
var num2=parseInt(prompt("enter mark2"));
var total=num1+num2
alert(total)
if(total>=40)
{
    alert("pass")
}
else{
    alert("fali");

}
//string
var str1='hello swaroop'
var str2="hi priya"
document.writeln("str1:"+str1)
document.writeln("<br/>")
document.writeln("str1:"+str2)
document.writeln("<br/>")
document.writeln("charAt:"+str1.charAt(3))
document.writeln("<br/>")
document.writeln("concat:"+str1.concat(str2))
document.writeln("<br/>")
document.writeln("upper:"+str1.toUpperCase())
document.writeln("<br/>")
document.writeln("str1:"+str2.toLowerCase())
document.writeln("<br/>")
document.writeln("str1:"+str1.split("",2))
document.writeln("<br/>")

//switch condition
var ch=prompt("enter char")
switch(ch)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    document.writeln("this is ovel");
    default:
        document.write("this is consonent");
        
}