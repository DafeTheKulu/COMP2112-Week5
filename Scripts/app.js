"use strict";
// IIFE: Immediately Invoked Function Expression
// AKA "Self Executing Function"
(function () {
    function Start() {
        console.log("App Started!");
        let contactList;
        $.getJSON("./Data/contacts.json", function (DataSource) {
            //Get your data from the DataSource
            contactList = DataSource.ContactList;
            //Load your data into objects
            let contact = new Contact();
            console.log(contact.toString());
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map