function showWelcome() {

    const login = document.getElementById("loginView");

    login.innerHTML = `

<div class="welcome-view">

    <div class="welcome-card">

        <h1>🏡 Cabin Companion Academy</h1>

        <div class="season-title">
            ☀️ Summer at the Cabin
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
                👧 Savannah
            </button>

            <button class="family-btn">
                👦 Older Son
            </button>

            <button class="family-btn">
                👦 Younger Son
            </button>

            <button class="family-btn">
                👧 Youngest Daughter
            </button>

        </div>

    </div>

</div>

`;

}