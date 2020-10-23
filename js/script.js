"use strict";

function createNewUser() {
    let askName = prompt ("Enter your first name");
    let askLastName = prompt ("Enter your last name");

    const newUser = {
        firstName: askName.toLowerCase(),
        lastName: askLastName.toLowerCase(),
        getLogin: function() {
            console.log(this.firstName[0] + this.lastName);
        },
    }
    return newUser;
};
createNewUser().getLogin();
