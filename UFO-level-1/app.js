
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
    row.append("td").text(datas.comment);
    // < th > date / time</th >
    //     <th>durationMinutes</th>
    //     <th>city</th>
    //     <th>state</th>
    //     <th>country</th>
    //     <th>shape</th>
    //     <th>comment</th>
    // Object.entries(datas).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //     console.log(value);

    // })
})