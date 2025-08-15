let table=document.getElementById("myTable")

function createTable() {
    //Write your code here
	let rows=prompt("Input number of rows");
	let columns =prompt("Input number of columns");

	if((isNaN(rows) || isNaN(columns))|| (parseInt(rows)<0 || parseInt(columns)<0)){
		return;
	}

	for(let i=0;i<parseInt(rows);i++){
		let tr=table.insertRow();
		for(let j=0;j<parseInt(columns);j++){
			let td=tr.insertCell();
			td.textContent="Row-"+i+" "+"Column-"+j
		}
	}
  
}
