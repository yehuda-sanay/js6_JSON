// const BASIC_API="https://api.openweathermap.org/data/2.5/"
// const MY_API="16bca9b85e8c9009fb3cfb9a48b7f37d"


// async function getCity(){
//     try{
//         return await fetch(`${BASIC_API}weather?q=${citys.value}&appid=${MY_API}`)
//         .then(res=>(res.json()))
//     }
//     catch(err){}
//     finally{}
// }

// function printWinther(){
//     getCity()
//     .then((result)=>{
//         console.log(result)
//         wither.innerHTML=`<h1>the wind degry is ${result.wind.deg}</h1>`
//     })
// }











// const BASIC_API="https://moviesmern.herokuapp.com/movies/"
// async function putMovies(){
//     try{
//         const data={
//             movie:{
//                 image:img.value,
//                 linkToMovie:link_to_movie.value ,
//                 movieName: movie_name.value ,
//                 rating: rating.value ,
//                 synopsis: synopsis.value ,
//             }
//         }
//         return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
//         {
//             method:"POST",
//             body:JSON.stringify(data),
//             headers: {
//                 'Contect-Type': 'application/json'
//             },
//         }) 
//         .then(response=>
//             response.json())
//     }
//     catch(err){}
//     finally{}
// }


async function getMovies(){
    try{
        return await fetch(`${BASIC_API}movie/searchByName/${searchMovies.value}`)
        .then(response=>
            response.json())
    }
    catch(err){}
    finally{}
}

function printNames(){
    moviename.innerHTML="";
    getMovies()
    .then((result)=>{
        
        result.data.forEach(element => {
            moviename.innerHTML+=`<li>${element.movieName}<img style='width:20vw' src="${element.image}"/></li>`
        });
    })
    .catch(()=>{})
    .finally(()=>{})
}






// const data={
//     movie:{
//         image:"https://www.google.com/search?q=%D7%90%D7%9E%D7%A8%D7%99%D7%A7%D7%9F+%D7%92%D7%A0%D7%92%D7%A1%D7%98%D7%A8&rlz=1C1GGRV_enIL751IL751&sxsrf=ALiCzsbm2qcq00eFIX-5oyA08jr2N9U1Yw:1656232298050&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZq6mO2sr4AhX-57sIHbEZCg8Q_AUoAXoECAIQAw&biw=1366&bih=657&dpr=1#imgrc=baP86UfQp09w1M",
//         linkToMovie:"https://he.wikipedia.org/wiki/%D7%90%D7%9E%D7%A8%D7%99%D7%A7%D7%9F_%D7%92%D7%A0%D7%92%D7%A1%D7%98%D7%A8",
//         movieName:"אמריקן גנגסטר",
//         rating:20,
//         synopsis:"אמריקן גנגסטר (באנגלית: American Gangster) הוא סרט פשע משנת 2007 אותו ביים רידלי סקוט והוא עיבוד הסיפור  Return of Superfly, פרי עטו של מרק ג'ייקובסון, שהתפרסם בניו יורק מגזין. בסרט מככבים דנזל וושינגטון וראסל קרואו. וושינגטון מגלם את דמותו של פרנק לוקאס, גנגסטר מהרלם, שהבריח הרואין לארצות הברית על מטוסי תובלה אמריקניים ששבו ממלחמת וייטנאם. קרואו מגלם את דמותו של ריצ'י רוברטס, בלש שמנסה להפיל את אימפריית הסמים של לוקאס. [1] הצילומים בוצעו באתרים בעיר ניו יורק. אמריקן גנגסטר יצא לבתי הקולנוע בארצות הברית ובקנדה ב-2 בנובמבר 2007. הסרט היה מועמד לשני פרסי אוסקר, בכללם לרובי די, שהייתה מועמדת לפרס אוסקר לשחקנית המשנה הטובה ביותר, על תפקידה בו הופיעה פחות מעשר דקות.",
//     }
// }
// fetch("https://moviesmern.herokuapp.com/movies/all",
// {
//     method:"POST",
//     body:JSON.stringify(data)
// })