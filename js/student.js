// Cabin Companion Academy
// Student View

const Student = {

    currentProfile: null,
    currentData: null,

    load(profile) {

        this.currentProfile = profile;

        API.getStudent(
            profile.profileId,
            state.familyCode,

            data => {

                this.currentData = data;

                document.getElementById("profilesCard").classList.add("hidden");
                document.getElementById("studentCard").classList.remove("hidden");

                document.getElementById("studentTitle").textContent =
                    `${profile.avatar} ${profile.name}`;

                this.render();

            },

            message => alert(message)

        );

    },

    render() {

        const container = document.getElementById("studentContent");

        container.innerHTML = "";

        const coins = document.createElement("div");
        coins.className = "card";
        coins.innerHTML = `<h3>⭐ Coins: ${this.currentData.coins || 0}</h3>`;
        container.appendChild(coins);

        const books = this.currentData.workbooks || [];

        books.forEach(book => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `

() => {

    const message =
        card.querySelector(".saveMessage");

    message.textContent = "✅ Progress Saved!";
    message.style.color = "#2e7d32";
    message.style.fontWeight = "bold";
    message.style.marginTop = "10px";

    setTimeout(() => {

        message.textContent = "";

    }, 2500);

},

<label style="font-weight:bold;">
Current Page
</label>

<input
    class="pageBox"
                    value="${book.currentPage || ""}"
                    placeholder="Current Page">

                <br><br>

 <button class="openBook btn">               
                    Open Workbook
                </button>

 <button class="savePage btn">              
                    Save Page
                </button>
<div class="saveMessage"></div>
            `;

            card.querySelector(".openBook").onclick = () => {
                window.open(book.url, "_blank");
            };

            card.querySelector(".savePage").onclick = () => {

                const page =
                    card.querySelector(".pageBox").value;

                API.updateWorkbookPage(

                    {
                        familyCode: state.familyCode,
                        profileId: this.currentProfile.profileId,
                        subject: book.subject,
                        currentPage: page
                    },

 () => {

    const message =
        card.querySelector(".saveMessage");

    message.textContent = "✅ Progress Saved!";
    message.style.color = "#2e7d32";
    message.style.fontWeight = "bold";
    message.style.marginTop = "10px";

    setTimeout(() => {

        message.textContent = "";

    }, 2500);

},                   

                    message => {
                        alert(message);
                    }

                );

            };

            container.appendChild(card);

        });

    }

};