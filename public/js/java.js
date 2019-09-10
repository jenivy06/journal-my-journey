$(document).ready(function(){
    $('.parallax').parallax(); 
    $('.sidenav').sidenav();
    $('.modal').modal();
    var APIKey = "hoTyk2NBwWjCrNVTIPpb1F0hxAIkt1kn";

    function getCityWeather (cityQuery){

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.apixu.com/v1/current.json?key=e543c83b86a646e7bce14523190909&q=" +
      cityQuery;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.location.name + " Weather Details</h1>");
        $(".region").html("<h1>" + response.location.region + " Weather Details</h1>");
        // $(".wind").text("Wind Speed: " + response.wind;
        // $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.current.temp_f);
        $(".wind").text("Wind speed (mph): " + response.current.wind_mph)

        // Log the data in the console as well
        // console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.main.humidity);
        // console.log("Temperature (F): " + response.main.temp);
        console.log("Temperature (F) " + response.current.condition.temp_f);

      });
    }
       // Event handler for user clicking the select-artist button
  $("#select-city").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputCity = $("#city-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    getCityWeather(inputCity);
    })
});