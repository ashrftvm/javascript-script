const table = document.querySelector(".variants");
const tBody = table.querySelector("tbody");
const tRows = tBody.querySelectorAll("tr");
const arrayOfValues = [];
tRows.forEach(row => {
    const partNumber = row.querySelector(".col1").innerText;
    const productName = row.querySelector(".col2").innerText;
    const link = row.querySelector("a").href;
    let values = JSON.stringify({
        "partNumber": partNumber,
        "productName": productName,
        "productLink": link
    });
    // console.log(values);
    arrayOfValues.push(values);
})
console.log(arrayOfValues);
WriteToFile(arrayOfValues);



function WriteToFile(arrayOfValues) {

    let textToSave = encodeURI([...arrayOfValues]);

    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + textToSave;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'IP66-ABS.json';
    hiddenElement.click();
}
