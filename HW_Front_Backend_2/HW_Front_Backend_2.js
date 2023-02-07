
function loadProduct(){
    $.get("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age",function(data){
        console.log(data)
        let table = $("<table class = 'table table-striped'/>")
        let body = $('<tbody/>')
    $.each(data.users, function (index,value){
        let tr = $("<tr/>")
        let col = $(
        "<td>" + value.id + "</td>"+
        "<td>" + value.firstName + "</td>"+
        "<td>" + value.age + "</td>"
        )
        tr.append(col)
        body.append(tr)
    })

    table.append(body);
    $("#product").append(body)
      
    },
    "json"
    );
}

$('#readdata').click(function(){
    loadProduct();
})


       