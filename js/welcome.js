function showWelcome() {

    const login = document.getElementById("loginView");

    login.innerHTML = `

<div class="welcome-view">

    <div class="welcome-card">

        <h1>🏡 Cabin Companion Academy</h1>

        <div class="season-title">
            ☀️ Summer at the Cabin
        </div>
<div class="welcome-home">

    <img src="images/characters/bea.png"
         class="welcome-character">

</div>
        <h2>Welcome Home, Mary!</h2>

        <p class="welcome-text">
            Little Fluffers is waiting by the porch.
        </p>

        <div class="verse">

            "Be Still and Know that I am God."

            <br><br>

            <strong>Psalm 46:10</strong>

        </div>

    

           <div class="family-buttons">

    <input
        id="familyCode"
        class="login-input"
        placeholder="Family Code"
        value="CABIN-FAMILY">

    <select id="role" class="login-input">
        <option value="student">Student</option>
        <option value="parent">Parent</option>
    </select>

    <input
        id="parentPin"
        class="login-input"
        type="password"
        placeholder="Parent PIN (only for parents)">

    <button id="loginBtn" class="enter-btn">
    🚪 Enter the Cabin
</button>
        🚪 Enter the Cabin
    </button>

</div>

        </div>

    </div>

</div>

`;

}