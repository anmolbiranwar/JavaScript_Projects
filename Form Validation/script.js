        const submitBtn=document.getElementById("submitBtn");
        const nameError=document.getElementById("nameError");
        const emailError=document.getElementById("emailError");
        const passwordError=document.getElementById("passwordError");

        submitBtn.addEventListener('click',(e)=>{
                e.preventDefault();

                if(validateName() && validateEmail() && validatePassword()){
                        alert("Form Submitted Successfully");
                }
        });

        function validateName(){
                let name=document.getElementById('name').value;
                
                if(name.length==0){
                        nameError.innerHTML="Name is Required";
                        return false;
                }

                if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
                        nameError.innerHTML="Write First and Last name";
                        return false;
                }
                nameError.innerHTML="";
                return true;

        }

        function validateEmail(){
                let email=document.getElementById('email').value;

                if(email.length==0){
                        emailError.innerHTML="Email is Required";
                        return false;
                }
               if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                        emailError.innerHTML="Enter valid email";
                        return false;
               }
               emailError.innerHTML="";
                return true;
        }

        function validatePassword(){
                let password=document.getElementById('password').value;

                if(password.length==0){
                        passwordError.innerHTML="Password is Required";
                        return false;
                }
                if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
                        passwordError.innerHTML="Password should contain 1 UPPERCASE, 1 lowercase, 1 Digit & 1 Alphabet";
                        return false;
                }
                passwordError.innerHTML="";
                return true;
        }