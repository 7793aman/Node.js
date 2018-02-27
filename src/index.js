//import './index.css';
// import numeral from 'numeral';
 import {getUsers} from './api/userApi'
// /*eslint-disable no-console */
// /*eslint-disable no-debugger */
// const courseValue=numeral(1000).format('$0,0.00');

// console.log(`i would pay ${courseValue} for this awesome course`);


getUsers().then(result =>{

let userBody="";

result.forEach(user =>{

userBody+=`<tr>
  <td><a href="#" data-id="${user.id}" class="deleteUser">Delete </a> </td>
<td>${user.id}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.email}</td>

</tr>`
});

global.decodeURIComponent.getElementById('users').innerHTML=userBody;
});

