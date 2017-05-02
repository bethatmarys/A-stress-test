$(document.ready(function(){
    $("form#Warningsigns").submit(function(event){

    event.preventDefault();

    $("#work-reponses").show();

    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressSignsMode = $(this).val();

    $('#stressresponses').append(stressSigns + "<br>");

    });

  $("#healthResponses").show();

  $("input:checkbox[name=healthresponses]:checked").each(function(){
    var healthresponses = $(this).val();
    $('#healthresponses').append(healthResponsesMode + "<br>");
    });
    $('#Warningsigns').hide();
  });
});
