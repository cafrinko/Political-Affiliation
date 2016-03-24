$(document).ready(function() {
  $("form#surveyQ1").submit(function(event) {
  var communityInterest= $("select#commind").val();

  if (communityInterest === 'individual') {
    $("form#surveyQ2").show();
  } else {
    $("form#surveyQ3").show();
  }
    event.preventDefault();
  });
    $("form#surveyQ2").submit(function(event) {
    var controlInterest= $("select#control").val();

  if (controlInterest === 'some-control') {
    $(".result-moderate").show();
  } else {
    $(".result-conservative").show();
  }
    event.preventDefault();
  });

  $("form#surveyQ3").submit(function(event) {
  var revolutionInterest= $("select#radical").val();

  if (revolutionInterest === 'revolution') {
    $(".result-radical").show();
  } else {
    $(".result-liberal").show();
  }
    event.preventDefault();
  });
});
