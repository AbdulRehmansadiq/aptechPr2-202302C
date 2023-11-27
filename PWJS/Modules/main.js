export let userName = 'Ali';
export let userEmail = 'ali@gmail.com';

 export let mainFun = () =>{
    return 'this is arrow function ';
}


export let validData = () =>{
        let uName = document.querySelector('#uName').value;
        let uEmail = document.querySelector('#uEmail').value;
        console.log(uName + ' ' + uEmail);
}