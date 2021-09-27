function calculateFizzBuzz()
{
    // The value inputed into the input box
    let nVal = document.getElementById("fizzBuzzValue").value;
    let fizzBuzzError = document.getElementById("Error");
    var currVal = 1;

    fizzBuzzError.innerHTML = "";
    document.getElementById("fizzbuzz-table").innerHTML = "";

    // Checks to be sure that the input value is a number greater than 1
    if(nVal >= 1)
    {
        // Creates a new table for every 10 numbers, it makes things more readable
        for(var i = 0; i < Math.ceil(nVal / 10); i++)
        {
            currVal = createFizzBuzzTable(nVal, currVal);
        }
    }
    else
    {
        fizzBuzzError.innerHTML = "ERROR: value must be a number greater than 1"
    }
}

// Creates a table with a max 10 columns, each with 2 rows
function createFizzBuzzTable(nVal, currVal)
{
    let fizzBuzzDiv = document.getElementById("fizzbuzz-table");

    let fizzBuzzTable = document.createElement("table");
    let fizzBuzzTableBody = document.createElement("tbody");
    // Adds the tables body to the table
    fizzBuzzTable.appendChild(fizzBuzzTableBody);

    let fizzBuzzTableHeaderRow = document.createElement("tr");
    fizzBuzzTable.appendChild(fizzBuzzTableHeaderRow)

    // The default number of columns in the table
    let columnNum = 10;
    
    // If the input value is not precisely divisible by 10, get the remaining number of columns needed
    if (columnNum + currVal > nVal)
    {
        columnNum = nVal % 10;
        
        // The input value is precisely divisible by 10
        if(columnNum == 0)
        {
            columnNum = 10;
        }
    }

    // Creates the header rows that display only the number
    for(var j = 0; j < columnNum; j++)
    {
        let fizzBuzzTableHeader = document.createElement("th");
        fizzBuzzTableHeader.appendChild(document.createTextNode(currVal + j));
        fizzBuzzTableHeaderRow.appendChild(fizzBuzzTableHeader);
    }

    let fizzBuzzTableInfoRow = document.createElement("tr");
    fizzBuzzTable.appendChild(fizzBuzzTableInfoRow)

    // Creates the data rows of the table which say if the nubmer is Fizz, Buzz, FizzBuzz, or not any of those
    for(var j = 0; j < columnNum; j++)
    {
        let fizzBuzzTableCell = document.createElement("td");

        if (currVal % 3 == 0 && currVal % 5 == 0)
        {
            fizzBuzzTableCell.appendChild(document.createTextNode("FizzBuzz"));
        }
        else if (currVal % 3 == 0)
        {
            fizzBuzzTableCell.appendChild(document.createTextNode("Fizz"));
        }
        else if (currVal % 5 == 0)
        {
            fizzBuzzTableCell.appendChild(document.createTextNode("Buzz"));
        }
        else
        {
            fizzBuzzTableCell.appendChild(document.createTextNode(currVal));
        }
        
        fizzBuzzTableInfoRow.appendChild(fizzBuzzTableCell);
        currVal++;
    }

    // Adds the table to the html page
    fizzBuzzDiv.appendChild(fizzBuzzTable);

    return currVal;
}