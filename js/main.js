//get the elements
let Name=document.querySelector('#Name');
let Email=document.querySelector('#Email');
let password=document.querySelector('#password');
let Send=document.querySelector('#Send');
//function to validate the form
//function saveData
let ArrayDataUser;
if(localStorage.getItem('DataUser')==null){
    ArrayDataUser=JSON.parse(localStorage.getItem('DataUser'));

}else{
    ArrayDataUser=[];
}
Send.onclick=function(){
    let ojcDataUser={
        Name:Name.value,
        Email:Email.value,
        password:password.value
    }
    ArrayDataUser.push(ojcDataUser);
    localStorage.setItem('DataUser', JSON.stringify(ArrayDataUser));
    clearData()
    readData()
}
//function to clearData the form
function clearData(){
    Name.value='';
    Email.value='';
    password.value='';
}
//function readData the form
function readData(){
    let table='';
    for (let i = 0; i < ArrayDataUser.length; i++) {
        table+=`<tr>
        <td>${ArrayDataUser[i].Name}</td>
        <td>${ArrayDataUser[i].Email}</td>
        <td>${ArrayDataUser[i].password}</td>
        </tr>`;
    }
    document.querySelector('#tbody').innerHTML=table;
}
readData();
let test1=document.querySelector('.test1');
let test2=document.querySelector('.test2');
let test3=document.querySelector('.test3');

setTimeout(function(){
    test1.className='tracking-in-expand-fwd-bottom';
    test2.className='tracking-in-expand-fwd-bottom';
    test3.className='kenburns-top';
}, 3000);
