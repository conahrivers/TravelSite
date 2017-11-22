$(document).ready(function() {
  function runSearch(search) {
    var url =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" +
      search;
    var cb = "&callback=?";
    url += cb;
    var query = "";
    var pages = "";
    console.log(url);
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(json) {
        $(".search-results").html("");
        console.log("ajax");
        query = json.query;
        pages = query.pages;
        console.log(pages);
        $.each(pages, function(index, value) {
          var pageURL = "http://en.wikipedia.org/?curid=" + value.pageid;
          var html = "";
          html += '<a href="' + pageURL + '">';
          html += '<div class="wiki-card">';
          html += '<span class="page-title">';
          html += value.title;
          html += "</span>";
          html += '<span class="page-info">';
          html += value.extract;
          html += "</span>";
          html += "</div>";
          html += "</a>";
          $(".search-results").append(html);
        });
      }
    });
  }
  function getRandom() {
    var url =
      "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=10&format=json";
    var cb = "&callback=?";
    url += cb;
    var pages = [];
    var random = [];
    console.log(url);
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(json) {
        query = json.query;
        random = query.random;
        console.log(random);
        $.each(random, function(index, value) {
          console.log(value.id);
          pages.push(value.id);
          console.log(pages);
          var test = getExtract(value.id);
          console.log(test);
        });
      }
    });
  }

  function getExtract(pageId) {
    var url =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&pageids=" +
      pageId +
      "&callback=?";
    var extract = "";
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(json) {
        query = json.query;
        var pages = query.pages;
        $.each(pages, function(index, value) {
          return pages.extract;
        });
      }
    });
  }

  $("#submit-button").click(function() {
    var query = $("#search-box").val();
    if (query === "") {
      $(".search-results").html("");
      $(".search-bar").addClass("vertical-center");
      return false;
    } else {
      $(".search-bar").removeClass("vertical-center");
      console.log(query);
      runSearch(query);
      return false;
    }
  });

  $(".search-bar").keypress(function(e) {
    if (e.which == 13) {
      //Enter key pressed
      $("#submit-button").click(); //Trigger search button click event
    }
  });

  getRandom();
});
