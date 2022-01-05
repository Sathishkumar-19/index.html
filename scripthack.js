async function getdata() {
    try{
        var apiResponse = await fetch('https://www.anapioficeandfire.com/api/books?page=1&pageSize=50')
                    .then(response => response.json());
        apiResponse.forEach(function(row) {
            var characters = [];
            row.characters.forEach(function(value, index) {
                if(index <= 4) {
                    characters.push(value);
                } 
            });
            var div = document.createElement('div');
            div.id = 'book_id';
            div.className = 'main_content_book';
            div.append("name: "+row.name+ " isbn: "+row.isbn+ " numberOfPages: "+row.numberOfPages+ " authors: "+ row.authors.join(", ")+ " publisher: "+row.publisher+ " released: "+row.released+ " characters: "+characters.join(", "));
            document.body.appendChild(div);
        });
    } catch(error){
        console.log(error);
        console.log("error Message: "+error.message);
    }
}

getdata();