const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const alphaNumaric = document.getElementById("alphaNumaric");
const numreic = document.getElementById("numreic");
const programName = document.getElementById("programName");
const instalment = document.getElementById("instalment");
const amount = document.getElementById("amount");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("text");
  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const alphaNumaricValue = alphaNumaric.value.trim();
  const numreicValue = numreic.value.trim();
  const programNameValue = programName.value.trim();
  const instalmentValue = instalment.value.trim();
  const amountValue = amount.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be blank");
  } else if (firstNameValue.length < 2) {
    setErrorFor(firstName, "First Name atleast 2 character");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be blank");
  } else if (lastNameValue.length < 1) {
    setErrorFor(lastName, "Last Name atleast 1 character");
  } else {
    setSuccessFor(lastName);
  }

  if (mobileValue === "") {
    setErrorFor(mobile, "Mobile cannot be blank");
  } else if (!isMobile(mobileValue)) {
    setErrorFor(mobile, "Not a Valid Mobile No");
  } else {
    setSuccessFor(mobile);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a Valid Email");
  } else {
    setSuccessFor(email);
  }

  if (alphaNumaricValue === "") {
    setErrorFor(alphaNumaric, "Application No connot be blank");
  } else {
    setSuccessFor(alphaNumaric);
  }

  if (numreicValue === "") {
    setErrorFor(numreic, "Admission Roll No connot be blank");
  } else {
    setSuccessFor(numreic);
  }

  if (programNameValue === "") {
    setErrorFor(programName, "Select One Program");
  } else {
    setSuccessFor(programName);
  }

  if (instalmentValue === "") {
    setErrorFor(instalment, "Select One Instalment");
  } else {
    setSuccessFor(instalment);
  }

  if (amountValue === "") {
    setErrorFor(amount, "Amount cannot be blank");
  } else if (amountValue < 5000) {
    setErrorFor(amount, "Amount Should be minimum 5000");
  } else {
    setSuccessFor(amount);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  //   console.log(formControl);
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isMobile(mobile) {
  return /^\d{10}$/.test(mobile);
}
