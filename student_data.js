function validateDataAndCreateTable() {
  var phoneValidationResult = validatePhoneNumber(
    document.getElementById("phoneNum")
  );

  console.log("Starting to create Table");
  if (phoneValidationResult) {
    var stTable = document.getElementById("studentsTable");
    var totalRowCount = stTable.rows.length; //returns total rows count in current table
    //var totalColCount = stTable.rows[0].cells.length; // we can use this approach to get columns count else we can use below approach

    //retrieve all input elements within form1 element having class "forTable"
    var inputTags = formStudent.querySelectorAll("input.forTable");
    //console.log(inputTags);
    //console.log(inputTags.length);
    var row = stTable.insertRow(totalRowCount);
    for (var i = 0; i < inputTags.length; i++) {
      var inputElement = document.getElementById(inputTags[i].id);
      var cell = row.insertCell(i);
      cell.innerHTML = inputElement.value;
    }

    alert("Student detail succesfully saved.");
  }
}

function validatePhoneNumber(inputPhone) {
  var phonenoRegEx = /^\d{10}$/;
  var validationResult = false;

  if (inputPhone.value.match(phonenoRegEx)) {
    validationResult = true;
  } else {
    alert("Not a valid Phone Number. It should be of 10 digits");
  }

  return validationResult;
}
