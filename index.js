
//This is link to mock API:

const URL = "https://65ac0bb6fcd1c9dcffc78219.mockapi.io/users";

//This is grabbing button,eventlistner,submitting to table:
let button = document.getElementById("button")
button.addEventListener ('click',function (event){
//so form won't submit twice:
event.preventDefault();
let newUser = {
    Company: document.getElementById ("company").value,
    HireDate:document.getElementById ("hiredata").value
}
createData(newUser);
console.log ("button clicked")
})



//READ
async function getData() {
    console.log ('get ran')
    try {
      const data = await $.get(URL);
      console.log(data);
      // to show data
      showData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  getData();

//Show data from API; grabbing table,create row & 2 cells:company & hire date
function showData(data) {
  
  let table = document.getElementById('table-body');
  table.innerHTML = "";
 
  console.log ('Show Data Ran', data)
  for (let i=0; i<data.length;i++) {

  let row = document.createElement('tr');
  let cell1 = document.createElement('td');
  let cell2 = document.createElement('td');

  cell1.innerHTML = data[i].Company;
  cell2.innerHTML = data[i].HireDate;

  //appending to row & table
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
    console.log(`Made it to the end of showData`)
  }
}

//CREATE
    async function createData(newUser) {
    try {
      const data = await $.ajax({
        url: URL,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(newUser),
      });
      console.log(data);
      // Handle response
      getData();
    } catch(error) {
      console.error("Error posting data:", error);
    }
  }


//this is function pass in new user:
  //function postData(newUser)





























