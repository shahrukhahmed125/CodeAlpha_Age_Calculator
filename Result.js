
// age calculator

document.getElementById("ageForm").addEventListener("submit", function(event){
    event.preventDefault();

    const dobValue = document.getElementById("dob").value;
    const dob = new Date(dobValue);
    const today = new Date();

    if (isNaN(dob)) {
        document.getElementById("result").textContent = "Invalid date of birth.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = "Your age is " + age + " years.";
    console.log("Your age is "+age+" years.");

});
