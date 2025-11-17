        function openMessage(){
            document.getElementById("messageNav").style.display = "block";
        }

        function closeMessage(){
            document.getElementById("messageNav").style.display = "none";
        }

        const form = document.getElementById("messageForm");

        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");

        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");

        const address = document.getElementById("address");
        const addressError= document.getElementById("addressError");

        const message = document.getElementById("message");
        const messageError = document.getElementById("messageError");




        form.addEventListener("submit", function(event){
            event.preventDefault();

            let valid = true;
            formArray = [];

            nameError.textContent = "";
            emailError.textContent = "";
            addressError.textContent = "";
            messageError.textContent = "";

            if(name.value.trim() === ""){
                nameError.textContent = "Input fill is empty";
                valid = false;
                setTimeout(() => {
                    nameError.textContent = "";
                }, 2000);
            } else {
                formArray.push({name: name.value})
            }

            if(email.value.trim() === ""){
                emailError.textContent = "Input a valid email address";
                valid = false;
                setTimeout(() => {
                    emailError.textContent = "";
                }, 2000);
            } else {
                formArray.push({email: email.value})
            }

            if(address.value.trim() === ""){
                addressError.textContent = "Your address is empty";
                valid = false;
                setTimeout(() => {
                    addressError.textContent = "";
                }, 2000);
            } else {
                formArray.push({address: address.value})
            }

            if(message.value.trim() === ""){
                messageError.textContent = "oops!, message is empty";
                valid = false;
                setTimeout(() => {
                    messageError.textContent = "";
                }, 2000);
            } else {
                formArray.push({message: message.value})
            }

            if(valid){
                console.log(formArray);
                
                form.reset();
            }
        })