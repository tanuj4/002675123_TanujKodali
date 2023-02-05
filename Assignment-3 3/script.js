//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

const tab = document.getElementById("myTable");

let cBoxPres = 0;

const checkingRows = tab.getElementsByTagName("input");
btnHide();

function btnHide() {
  var counting = 0;
  let submitButton = document.getElementById("button");
  for (var r = 0; r < checkingRows.length; r++) {
    var checkRow = checkingRows[r].parentNode.parentNode;

    if (!checkingRows[r].checked) {
      counting++;
      checkRow.querySelectorAll("td")[8].classList.add("columnHide");
      checkRow.querySelectorAll("td")[9].classList.add("columnHide");
    }

    if (checkingRows.length === counting) {
      submitButton.style.backgroundColor = "gray";
      submitButton.style.border = "";
      submitButton.style.cursor = "initial";
      submitButton.disabled = true;
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[8]
        .classList.add("columnHide");
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[9]
        .classList.add("columnHide");
    }
  }
}

rowSelection();

let boolean = true;

let main = true; 

function firstRow(f) {
  const k = f.parentNode.parentNode.rowIndex;
  const row1 = f.parentNode.parentNode;
  const descRow = row1.nextSibling;
  if (mainRetoric) {
    descRow.style.display = "table-cell";
    mainRetoric = false;
  } else {
    descRow.style.display = "none";
    mainRetoric = true;
  }
}

function addDown(r) {
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling;
  if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {
    descRow.style.display = "none";
    boolean = true;
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`You have Deleted the row!!`);
  btnHide();
  rowSelection();
}

function editRow(r) {
  alert("Please Edit the Details ");
  rowSelection();
}

function addRow() {
  const row = tab.insertRow(tab.rows.length);

  const rowCount = tab.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="firstRow(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.ceil(rowCount / 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount / 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {
      alert(`You have added new student${Math.ceil(rowCount / 2)}`);
    }, 100);
  } catch (error) {
    alert("Something has went wrong!");
  }

  rowSelection();

  nextRowAddition();
  btnHide();
}

window.addEventListener("click", () => {
  let submitButton = document.getElementById("button");

  if (cBoxPres > 0) {
    submitButton.style.backgroundColor = "orange";
    submitButton.style.border = "2px solid orange";
    submitButton.style.cursor = "pointer";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "gray";
    submitButton.style.border = "";
    submitButton.style.cursor = "initial";
    submitButton.disabled = true;
  }
});

function nextRowAddition() {
  const row = tab.insertRow(tab.rows.length);

  row.classList.add("dropDownTextArea");

  row.innerHTML =
    '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  rowSelection();
}

var rowname;


function rowSelection() {
  for (let i= 0;  i< checkingRows.length; i++) {
    const row = checkingRows[i].parentNode.parentNode;
    rowname = checkingRows;

    checkingRows[i].addEventListener("click", () => {
      if (checkingRows[i].checked) {
        cBoxPres++;
        row.style.backgroundColor = "yellow";
        row.lastElementChild.innerHTML =
          "<td><button onClick='editRow(this)'>Edit Row</button></td>";
        row.lastElementChild.previousElementSibling.innerHTML =
          "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[8]
          .classList.remove("columnHide");
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[9]
          .classList.remove("columnHide");
        row.querySelectorAll("td")[8].classList.remove("columnHide");
        row.querySelectorAll("td")[9].classList.remove("columnHide");
      } else {
        cBoxPres--;
        row.style.backgroundColor = "white";
        row.lastElementChild.innerHTML = "";
        row.lastElementChild.previousElementSibling.innerHTML = "";
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[8]
          .classList.add("columnHide");
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[9]
          .classList.add("columnHide");
        row.querySelectorAll("td")[8].classList.add("columnHide");
        row.querySelectorAll("td")[9].classList.add("columnHide");
      }
    });
  }
}
