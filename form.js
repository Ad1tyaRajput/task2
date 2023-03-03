function validateForm() {
    var name = document.forms["surveyForm"]["name"].value;
    var email = document.forms["surveyForm"]["email"].value;
    var industry = document.forms["surveyForm"]["industry"].value;
    var feedback = document.forms["surveyForm"]["feedback"].value;
    var rate = document.forms["surveyForm"]["rate"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (industry == "") {
        alert("Please select your industry.");
        return false;
    }
    if (feedback == "") {
        alert("Please provide your feedback.");
        return false;
    }
    if (rate == "") {
        alert("Please rate our service.");
        return false;
    }
    return true;
}