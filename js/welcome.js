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

            <button class="family-btn parentBtn">
                👩 Parent
            </button>

            <button class="family-btn">
                👧 Savanah
            </button>

            <button class="family-btn">
                👦 Gavin
            </button>

            <button class="family-btn">
                👦 Isaak
            </button>

            <button class="family-btn">
                👧 Desirae
            </button>

        </div>

    </div>

</div>

`;

}