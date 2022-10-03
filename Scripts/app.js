"use strict";
// IIFE: Immediately Invoked Function Expression
// AKA "Self Executing Function"
(function () {
    /**
     *This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     *This method reads our data from localStorage and returns a Contact Array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData() {
        // Create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            //document.getElementsByTagName("header")[0].innerHTML = html_data;
            $("header").html(html_data);
            $("li>a").on("click", function () {
                let title = $(this).prop("id");
                //Capitalize the link and make it the document title
                let capitalizedTitle = title.substring(0, 1).toUpperCase() + title.substring(1);
                document.title = capitalizedTitle;
                LoadContent();
            });
        });
    }
    function LoadContent() {
        switch (document.title) {
            case "Home":
                $.get("./Views/content/home.html", function (html_data) {
                    $("main").html(html_data);
                });
                break;
            case "About":
                $.get("./Views/content/about.html", function (html_data) {
                    $("main").html(html_data);
                });
                break;
            case "Projects":
                $.get("./Views/content/projects.html", function (html_data) {
                    $("main").html(html_data);
                });
                break;
            case "Services":
                $.get("./Views/content/services.html", function (html_data) {
                    $("main").html(html_data);
                });
                break;
            case "Contact":
                $.get("./Views/content/contact.html", function (html_data) {
                    $("main").html(html_data);
                });
                break;
        }
    }
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }
    function Start() {
        console.log("App Started!");
        //initial load
        document.title = "Home";
        LoadContent();
        LoadHeader();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map