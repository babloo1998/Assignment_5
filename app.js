var simple=function() {

 	var a = prompt('Enter Amount');
 	if (a!=null)
 	var r=prompt('Enter Rate');
 	var t=prompt('Enter Time');
 	var si=(a*r*t)/100;
 	alert("Calculated simple intrest:" + si);

};


var palindrome=function() {
 	var str= prompt("Please enter string");
    var split = str.split("");
    var reverseArray = split.reverse();
    var join = reverseArray.join("");
    if (str==join)
       {
          alert("It is a Palindrome");
       }
    else
       {
          alert("Not a Palindrome");
        }
};


var area=function() {
 	var r = prompt('Enter radius');
 	var area=3.14*r*r;
 	alert(area);
};



var obj = function()
{
function copy(src)
{
 return Object.assign({}, src);
}
var source = {a:prompt(" First_name"), b:prompt("Last_name")};
var target = copy(source);
console.log(target);
} 





var emp=function()
{
var em=
[
{
Name:"Ashu",
Age:"25",
Salary:"1200",
Dob:"01/01/1998"
},
{
Name:"Aryan",
Age:"48",
Salary:"9000",
Dob:"01/01/1998"
},
{
Name:"Ashish",
Age:"20",
Salary:"5000",
Dob:"01/01/1998"
},
{
Name:"Aditya",
Age:"18",
Salary:"50000",
Dob:"01/01/1998"
},
{
Name:"Ankit",
Age:"36",
Salary:"100000",
Dob:"21/05/1978"
}
]

var j;
for(j=0;j<5;j++ ){
if(em[j].Salary>5000)
{
console.log(em[j]);
}
}
for(j=0;j<5;j++)
{
if((em[j].Salary<5000) && (em[j].Age>20))
{
em[j].Salary=em[j].Salary+(0.05*em[j].Salary);
}
}
console.log(em);

var old=0;
var young=0;

for(j=0;j<5;j++)
{
if(em[j].Age>35)
{
old=old+1;
}
else if((em[j].Age!=0)&&(em[j].Age<35))
{
young=young+1;
}

}
console.log("old="+old,"young="+young);
}








