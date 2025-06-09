let user1 = {
    name : "Mohamed",
    lastName : "Emad",
    Gender : "Male",
    
}
let user2 = {
    name : 'Sarah',
    lastName : 'Eyad'
}
let printFullName=function(age){
    console.log('Hello , '+this.name+this.lastName+' Your Age is : '+age+' Years Old');
}
printFullName.call(user1,20);
printFullName.call(user2,32);