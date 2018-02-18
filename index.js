var poster;
var title;
var year;
var runtime;
var genre;
var actors;
var plot;
var director;
var writer;
//var country;
//var language;
var imdbRating;
document.getElementById('body').style.visibility='hidden';
document.getElementById("research").style.visibility='hidden';
document.getElementById("error").style.visibility='hidden';
function apiCall(){
    var x = document.createElement("IMG");
    var url = 'http://www.omdbapi.com/?t=';
    var movieName = document.getElementById("myText").value;
    movieName += "&apikey=c71fb4aa";
    url += movieName;
    document.getElementById("poster").innerHTML="";
    console.log(url);
    $.getJSON(encodeURI(url)).then(function (response) {
        //console.log(response.Response == )
        if(response.Response == "True") {
            document.getElementById("search").style.visibility = 'hidden'
            document.getElementById("research").style.visibility = 'visible';
            document.getElementById("body").style.visibility = 'visible';
            document.getElementById("error").style.visibility = 'hidden';
            //document.getElementById("error").style.visibility = 'hidden';
            poster = response.Poster;
            title = response.Title;
            year = response.Year;
            runtime = response.Runtime;
            genre = response.Genre;
            actors = response.Actors;
            plot = response.Plot;
            director = response.Director;
            writer = response.Writer;
            //country = response.Country;
            //language = response.Language;
            imdbRating = response.imdbRating;
            x.setAttribute("src", poster);
            x.setAttribute("width", "223");
            x.setAttribute("height", "312.5");
            document.getElementById("title").innerHTML = title;
            document.getElementById("poster").appendChild(x);
            document.getElementById("plot").innerHTML = plot;
            document.getElementById("year").innerHTML = year;
            document.getElementById("director").innerHTML = director;
            document.getElementById("writer").innerHTML = writer;
            document.getElementById("actors").innerHTML = actors;
            document.getElementById("genre").innerHTML = genre;
            document.getElementById("imdbRating").innerHTML = imdbRating;
            document.getElementById("runtime").innerHTML = runtime;
        }
        else{
            document.getElementById("search").style.visibility = 'visible';
            document.getElementById("error").style.visibility = 'visible';
            document.getElementById("body").style.visibility="hidden";


        }

    })


}

function research(){
    document.getElementById("body").style.visibility='hidden';
    document.getElementById("search").style.visibility='visible';
    document.getElementById("research").style.visibility='hidden';

}



//apiCall();
