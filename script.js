//SGNyour JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener('click', (e) =>{
	e.preventDefault(); 
	const user = document.getElementById("username").value;
	const pass = document.getElementById("password").value;
	const check = document.getElementById("checkbox").checked;
	const output = document.getElementById("output");
	
	if(check){
		localStorage.setItem( 'username', user);
		localStorage.setItem( 'password', pass);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		
	}
	alert('Logged in as ' + user);
	
});

if(localStorage.getItem('username') && localStorage.getItem('password')){
	document.getElementById('existing').style.display = 'block';

	document.getElementById('existing').addEventListener('click', () => {
		const us = localStorage.getItem('username');
		alert('Logged is as ' + us);
	})
}