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

                button.className = "btn";

                button.style.margin = "8px";

                button.textContent =
                    `${profile.avatar} ${profile.name}`;

                button.onclick = () => {

                    alert(
                        "Opening " +
                        profile.name +
                        "'s bookshelf..."
                    );

                };

                list.appendChild(button);

            });

    }

};