// Cabin Companion Academy
// Authentication Helpers

const Auth = {

    login(role, familyCode, pin) {

        API.login(

            familyCode,
            role,
            pin,

            data => {

                state.familyCode = familyCode;
                state.role = role;
                state.pin = pin;
                state.profiles = data.profiles || [];

                if (role === "parent") {
                    openParent();
                } else {
                    openProfiles();
                }

            },

            message => {

                alert(message);

            }

        );

    },

    loadStudent(profile) {

        API.getStudent(

            profile.profileId,
            state.familyCode,

            data => {

                state.currentProfile = profile;
                state.currentData = data;

                console.log("Student Loaded", data);

            state.currentProfile = profile;
state.currentData = data;

console.log("Student Loaded", data);

document.getElementById("profilesCard").classList.add("hidden");
document.getElementById("studentCard").classList.remove("hidden");

document.getElementById("studentTitle").textContent =
    `${profile.avatar} ${profile.name}`;

Student.currentProfile = profile;
Student.data = data;
Student.render();    

            },

            message => {

                alert(message);

            }

        );

    }

};