function run(max, min) {
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if (intNumberOfRows == "" || intNumberOfColumns == "") {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        let arrayTemp = [];
        let counter= 0;
        let doOnce = true;
        document.write('<style>table{margin-bottom:45px;}td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers[i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        document.write ('</tr>');
        for (var i=0;i<intNumberOfColumns;i++)
        {
            arrMatrix[i] = [];
            for(var j=0;j<intNumberOfRows; j++)
            {
                arrMatrix[i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                if(doOnce)
                {
                    document.write ('<tr><td>' + arrRowNumbers[counter] + '</td>');
                    arrayTemp[i] = arrMatrix[i][j];
                    counter++;
                    doOnce = false;
                }
                 document.write('<td>' + arrMatrix[i][j] + '</td>');
               
            }
            document.write('</tr>');
            doOnce = true;
        }
        document.write('</table><table><td></td>');
        for (var i = 1; i < intNumberOfRows; i++) 
        {
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        document.write('<td>' + arrColumnNumbers[0] + '</td>');
        document.write ('</tr>');
        counter=0;
        for(var j=0;j<intNumberOfColumns; j++)
        {
            for (var i=1; i<=intNumberOfRows;i++)
            {
                if(doOnce)
                {
                    document.write ('<tr><td>' + arrRowNumbers[counter] + '</td>');
                    counter++;
                    doOnce = false;
                }
                if (i == intNumberOfRows)
                {
                 document.write('<td>' + arrayTemp[j] + '</td>');
                } else {
                 document.write('<td>' + arrMatrix[j][i] + '</td>');
                }
               
            }
            document.write('</tr>');
            doOnce = true;
        }
    }
}
