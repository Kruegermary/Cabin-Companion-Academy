// Cabin Companion Academy
// Parent Dashboard

const Parent = {

    data: null,

    load(data) {

        this.data = data;
        this.render();

    },

    render() {

        const container =
            document.getElementById("parentContent");

        container.innerHTML = `

            <div class="card">

                <h2>📚 Mom's Bookshelf</h2>

                <p>
                    Choose a student to manage workbooks.
                </p>

                <div id="studentList"></div>

            </div>

        `;

        const list =
            document.getElementById("studentList");

        state.profiles
            .filter(p => p.role === "student")
            .forEach(profile => {

                const button =
                    document.createElement("button");

 button.className = "card";

button.style.marginBottom = "18px";
button.style.width = "100%";
button.style.textAlign = "left";

const student =
    this.data.find(d =>
        d.profile.profileId === profile.profileId);

button.innerHTML = `

<h3>${profile.avatar} ${profile.name}</h3>

<p>⭐ Coins:
<strong>${student?.coins ?? 0}</strong></p>

<p>🏅 Badges:
<strong>${student?.badges?.length ?? 0}</strong></p>

<p>📚 Workbooks:
<strong>${student?.workbooks?.length ?? 0}</strong></p>

<p style="margin-top:12px;color:#6f9654;">
Click to manage →
</p>

`;

button.onclick = () => {

    API.getStudent(

        profile.profileId,
        state.familyCode,

        data => {

            state.currentProfile = profile;
            state.currentData = data;

            document.getElementById("parentView").classList.add("hidden");
            document.getElementById("studentView").classList.remove("hidden");

            Student.render(data);

        },

        alert

    );

};

                list.appendChild(button);

            });

    }

};