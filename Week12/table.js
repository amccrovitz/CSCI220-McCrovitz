$('#submit').on('click', function() {
    var eName = $('#name').value();
    var eTitle = $('#title').value();
    var eDate = $('#date').value();

    var newRow = "<tr><td>" + eName + "</td><td>" + eTitle + "</td><td>" + eDate + "</td></tr>";
    $("table tbody").append(newRow);
});