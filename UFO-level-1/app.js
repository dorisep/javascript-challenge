
console.log(data);
// from data.js
var table = d3.select("#data");
var tableBody = table.select("tbody");
// YOUR CODE HERE!
data.forEach(datas => {
    var row = tableBody.append("tr");

    row.append("td").text(datas.datetime);
    row.append("td").text(datas.city);
    row.append("td").text(datas.state);
    row.append("td").text(datas.country);
    row.append("td").text(datas.shape);
    row.append("td").text(datas.durationMinutes);


});

var dateSearchField = d3.select("#dateSearch");
var dataSearchButton = d3.select("#dateSearchButton");
console.log(dateSearchField)
dataSearchButton.on("click", () => {
    var dateToSearchFor = dateSearchButton.property("value");
    tableBody.remove();
    tableBody.append("tbody");

    datas.filter(data => data.displayNameEn == dateToSearchFor).forEach(data => {
        var row = tableBody.append("tr");

        row.append("td").text(datas.datetime);
        row.append("td").text(datas.city);
        row.append("td").text(datas.state);
        row.append("td").text(datas.country);
        row.append("td").text(datas.shape);
        row.append("td").text(datas.durationMinutes);

    })
})