// Cabin Companion Academy
// Apps Script API Wrapper

const API = {

    call(action, payload, success, failure) {

        fetch(CONFIG.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action,
                ...payload
            })
        })
        .then(r => r.json())
        .then(data => {

            console.log("API:", action, data);

            if (data.success === false) {

                if (failure) failure(data.message);

                return;
            }

            if (success) success(data);

        })
        .catch(err => {

            console.error(err);

            if (failure) failure(err.message);

        });

    },

    login(familyCode, role, pin, success, failure) {

        this.call("login", {
            familyCode,
            role,
            pin
        }, success, failure);

    },

    getStudent(profileId, familyCode, success, failure) {

        this.call("getStudentData", {
            profileId,
            familyCode
        }, success, failure);

    },

    saveDailyPlan(payload, success, failure) {

        this.call("saveDailyPlan", payload, success, failure);

    },

    awardCoins(payload, success, failure) {

        this.call("awardCoins", payload, success, failure);

    },

    awardBadge(payload, success, failure) {

        this.call("awardBadge", payload, success, failure);

    },
    getParentDashboard(payload, success, failure) {

    this.call(
        "getParentDashboard",
        payload,
        success,
        failure
    );

},
updateWorkbookPage(payload, success, failure) {

    this.call(
        "updateWorkbookPage",
        payload,
        success,
        failure
    );

},
};