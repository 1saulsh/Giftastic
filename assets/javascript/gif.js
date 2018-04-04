$(document).ready(function() {

    //Ensures the correct gif is being searched for the corresponding button
    $("button").on("click", function() {
      var shoe = $(this).data("name");
      //NOT SURE WHY MY API DOESN'T WORK. WHEN I CONSOLE LOG I GET A SYNTAX ERROR HOWEVER IF i COPY AND PASTE BELOW URL IT RENDERS IT RENDERS DATA AND ALLOWS ME TO RENDER A GIF FILE IN THE BROWESER  
      var queryURL = "https://api.giphy.com/v1/gifs/search?&q=designer+shoes&api_key=BsVC2oqJgs4P02YFYAmIWMZIDukzNH93&limit=10";
      $.ajax({
          url: queryURL,
          dataType: "jsonp",
          method: "GET",
      })
          .then(function(response) {
  
  
              console.log(response);
          })
        })
    })

  
//               var results = response.data;
  
//               for (var i = 0; i < results.length; i++) {
  
//                   var shoeDiv = $("<div/>");
  
//                   var p =$("<p/>");
  
//                   p.text(results[i].rating);
  
//                   var shoeImage = $("<img/>");
  
//                   shoeImage.addClass("anImg")
  
//                   shoeImage.attr("src", results[i].images.fixed_height.url);
  
//                   shoeImage.attr("data-still", results[i].images.fixed_height_still.url)
  
//                   shoeImage.attr("data-animate", results[i].images.fixed_height.url)
  
//                   .attr("data-state", "still");
  
//                   shoeDiv.append(p);
  
//                   shoeDiv.append(shoeImage);
  
//                   shoeDiv.prependTo($("#gifs"));
//               }
  
//               $(".anImg").on("click", function() {
          
//                   var state = $(this).attr("data-state"); 
//                   console.log(this);
  
//                   if (state == "still") {
                  
//                   $(this).attr("src", $(this).data("animate"));
                  
//                   $(this).attr("data-state", "animate");
  
//                   } else {
                          
//                   $(this).attr("src", $(this).data("still"));
                  
//                   $(this).attr("data-state", "still");
//                   }      
//               });
//           });
//   });
  
//   var shoe = [''];
  
  
//       //This function "adds" the buttons 
  
//       // handles the event of displaying shoe gif when clicked
//       $("#theButton").on("click", function(){
//           var shoeButton = $("#gif-input").val();
          
//           //adds the new shoe type
//           var newButton = $("<button/>").addClass( "btn btn-info shoe").attr("data-name",shoeButton).html(shoeButton);
          
//           $("#shoesbuttons").append(newButton);
//               console.log("Work");
  
//           queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shoeButton +"api_key=BsVC2oqJgs4P02YFYAmIWMZIDukzNH93&q=shoes&limit=10&offset=0&rating=G&lang=en";
  
        
  
//               console.log(shoeButton);
  
//           $.ajax({
//           url: queryURL,
//           dataType: "jsonp",
//           method: "GET",
//                 })
  
//           .then(function(response) {
  
//           var results = response.data;
  
//               for (var i = 0; i < results.length; i++) {
  
//                   var shoeDiv = $("<div/>");
  
//                   var p =$("<p/>");
  
//                   p.text(results[i].rating);
  
//                   var shoeImage = $("<img/>");
  
//                   shoeImage.addClass("anImg")
  
//                   shoeImage.attr("src", results[i].images.fixed_height_still.url);
  
//                   shoeImage.attr("data-still", results[i].images.fixed_height_still.url)
  
//                   shoeImage.attr("data-animate", results[i].images.fixed_height.url)
  
//                   .attr("data-state", "still");
  
//                   shoeDiv.append(p);
  
//                   shoeDiv.append(shoeImage);
  
//                   shoeDiv.prependTo($("#gifs"));
//               }
  
//               $(".anImg").on("click", function() {
          
//                   var state = $(this).attr("data-state"); 
//                   console.log(this);
  
//                   if (state == "still") {
                  
//                   $(this).attr("src", $(this).data("animate"));
                  
//                   $(this).attr("data-state", "animate");
  
//                   } else {
                          
//                   $(this).attr("src", $(this).data("still"));
                  
//                   $(this).attr("data-state", "still");
//                   }      
//               });
//           });
  
//           $("#gif-input").val("");
//           return false;
//       })
  
//   });
  
  