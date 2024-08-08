const container = document.getElementById("form__container");
const mySubmit = document.querySelector(".submited");
const myName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const time = document.getElementById("time");
const male = document.getElementById("male");
const female = document.getElementById("female");
const address = document.getElementById("address");
const mycomment = document.getElementById("messages");
const country = document.getElementById("selected");
const statuz = document.getElementById("prefix");
const myForm = document.getElementById("form__wrapper");
mySubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
        const formData = {
            statuz: statuz.options[statuz.selectedIndex].text,
            country: country.options[country.selectedIndex].text,
            mycomment: mycomment.value,
            address: address.value,
            female: female.checked,
            male: male.checked,
            myName: myName.value,
            time: time.value,
            email: email.value,
            phone: phone.value,
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.onload = () => {
            if (xhr.status === 200 && [male.checked || female.checked]) {
                myForm.style.display = "none";
                container.innerHTML =
                    "Your submission is well received. Thank you!";
                container.style.background = "white";
                container.style.width = "50%";
                container.style.padding = "20px";
                container.style.color = "green";
                xhr.send(JSON.stringify(formData));
            } else {
                setTimeout(() => {
                    myForm.innerHTML = "oops! please, fill in all necessary blocks";
                    myForm.style.color = "red";
                    myForm.style.background = "white";
                    myForm.style.width = "100%";
                }, 1000);
                myForm.style.display = "block";

            }
        }

    } catch (error) {
        console.log('Something went wrong!')
    }
});
