const baseUrl = "http://127.0.0.1:5000";
const advancedUrl = baseUrl + "/explain/";

// let isBusy = false;
// function toggleMenu(self) {
//   if (isBusy) return;
//   isBusy = true;

//   const section = document.querySelector("section");
//   const footer = document.querySelector("footer");
//   const activeButton = document.querySelector("footer .here");

//   if (activeButton) {
//     activeButton.classList.remove("here");
//     if (activeButton === self) {
//       section.style.height = "0";
//       setTimeout(() => {
//         footer.classList.remove("active");
//         section.style.display = "none";
//         document.querySelector(`#${self.id}-section`).style.display = "none";
//         isBusy = false;
//       }, 850);
//       return;
//     } else {
//       document.querySelectorAll("section div").forEach((div) => {
//         div.style.display = "none";
//       });
//     }
//   }

//   section.style.display = "block";
//   document.querySelector(`#${self.id}-section`).style.display = "block";
//   setTimeout(() => {
//     section.style.height = "25%";
//     isBusy = false;
//   }, 100);
//   footer.classList.add("active");
//   self.classList.add("here");
// }

function toggleMenu(self) {
  const server = self.id;
  const method = self.getAttribute("data-method");

  let table = prompt("Please enter the table name:");
  if (!table) {
    alert("Table name is required.");
    return;
  }

  var data = {};
  var change = {};

  if (server === "update") {
    let addMoreChange = true;
    while (addMoreChange) {
      let column = prompt("On which column do you want to search?");
      let modify = prompt(`What is the data inside the column '${column}'?`);
      if (!column || !modify) {
        alert("Please fill in all fields.");
        return;
      }
      change[column] = modify;
      addMoreChange = confirm("Would you like to search on more columns?");
    }
  }

  let addMoreData = true;
  while (addMoreData) {
    let column = prompt(`Which column would you like to ${server}?`);
    let modify = prompt(`What data should be in the column '${column}'?`);
    if (!column || !modify) {
      if (server === "fetch") {
        data = {};
      } else {
        alert("Please fill in all fields.");
        return;
      }
    } else {
      data[column] = modify;
    }
    addMoreData = confirm("Would you like to add more data? ");
  }

  console.log("Table:", table);
  console.log("Data:", data);
  console.log("Change:", change);

  console.log(makeServerRequest());

  fetch(advancedUrl + server, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      table: table,
      data: data,
      change: change,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(({ data }) => {
      data.forEach((item, index) => {
        console.log(item);
      });
    })
    .catch((error) => {
      console.error(`Error during ${server} operation:`, error);
    });
}

function handleAuthentication(type) {
  var emailInput = document.querySelector(`#${type}-email`);
  var passwordInput = document.querySelector(`#${type}-password`);
  var rePasswordInput = document.querySelector(`#${type}-rePassword`);

  if (!emailInput || !passwordInput) {
    alert("Email or password input not found.");
    return;
  }

  var email = emailInput.value;
  var password = passwordInput.value;
  var rePassword = rePasswordInput ? rePasswordInput.value : null;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (type === "register" && rePassword === "") {
    alert("Please confirm your password.");
    return;
  }

  if (type === "register" && password !== rePassword) {
    alert("Passwords do not match.");
    return;
  }

  if (type === "register") {
    fetch(advancedUrl + "insert", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        table: "users",
        data: {
          email: email,
          secret_password: password,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ data }) => {
        if (data.type === "ERROR") {
          console.log("Duplicate entry for email");
        } else {
          data.forEach((item) => {
            console.log("Registration was a succes with id " + item.id);
          });
        }
      })
      .catch((error) => {
        console.error(`Error during register:`, error);
      });
  } else if (type === "login") {
    fetch(advancedUrl + "fetch", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        table: "users",
        data: {
          email: email,
          secret_password: password,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ data }) => {
        if (data.type === "ERROR" && data.msg === "Failed to fetch rows") {
          console.log("This email isn't registered yet");
        } else {
          data.forEach((item) => {
            if (item.secret_password) {
              console.log("Login was a success");
            } else {
              console.log("Invalid password");
            }
          });
        }
      })
      .catch((error) => {
        console.error(`Error during login:`, error);
      });
  }
}
