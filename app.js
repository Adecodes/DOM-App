document.addEventListener("DOMContentLoaded", function(){

    //show date

    const dateElement = document.getElementById("date");
    const option = {weekday: "long", month: "short", day: "numeric"}
    const today = new Date();
    dateElement.innerHTML = today.toDateString("en-UK");

// show clock



    function Time() {

        var time = new Date();
        var hrs = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var next = "AM";
        if (hrs == 0) {

            hrs = 12;
        }
        if (hrs > 12) {
            hrs = hrs - 12;
            next = "PM";
        }
        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        var time = hrs + ":" + min + ":" + sec + " " + next;
        document.getElementById("clock").innerHTML = time;
        document.getElementById("clock").textContent = t = time;
        setTimeout(Time, 1000);
    }
    Time();


    //delete book
    const list = document.querySelector("#book-list ul");
    list.addEventListener("click", function (e) {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    // add book

    const addForm = document.forms["add-books"];
    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = addForm.querySelector("input[type='text']").value;


        //adding new element


        const li = document.createElement("li");
        const bookName = document.createElement("span");
        const deleteBtn = document.createElement("button");

        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        //changing the text content

        deleteBtn.textContent = "Delete";
        bookName.textContent = value;


        //adding class to the element

        bookName.classList.add("name");
        deleteBtn.classList.add("delete");
    })

    //hiding the list

    const hideBox = document.querySelector("#hide");

    hideBox.addEventListener("change", function (e) {
        if (hideBox.checked) {
            list.style.display = "none";
     }else{
         list.style.display = "initial";
     }
    })


    //search filter 

    const searchBar = document.forms["search-books"].querySelector("input");
    searchBar.addEventListener("keyup", function (e) {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName("li");
        Array.from(books).forEach(function (book) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = "block";

            } else {
                book.style.display = "none";
            }
        })
    })
});



