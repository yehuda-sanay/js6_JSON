async function getMovisName(){
    try{
        return await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(Response=>
            Response.json())
    }
    catch(err){}
    finally{}
}

function printNames(){
    getMovisName()
    .then((result)=>{
        console.log(result);
        result.data.forEach(element => {
            moviename.innerHTML+=`<li>${element.movieName}<img style='width:20vw' src="${element.image}"/></li>`
        });
    })
    .catch(()=>{})
    .finally(()=>{})
}
printNames()