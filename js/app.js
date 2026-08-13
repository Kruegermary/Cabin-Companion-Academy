const App={

start(){

    console.log("🏡 Cabin Companion Academy 2.0");

    this.showLogin();

},

showLogin(){

    html("loginView",`

<div class="welcome">

<h1>🏡 Cabin Companion Academy</h1>

<h2>Summer at Beaver Lake</h2>

<p>Welcome Home.</p>

<input
id="familyCode"
placeholder="Family Code"
value="CABIN-FAMILY">

<br><br>

<select id="role">

<option value="student">
Student
</option>

<option value="parent">
Parent
</option>

</select>

<br><br>

<button id="loginButton">

Enter the Cabin

</button>

</div>

`);

}

};

document.addEventListener("DOMContentLoaded",()=>{

App.start();

});