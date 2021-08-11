$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const addressInput = $("#address").val();
    const petInput = $("input:radio[name=pet]:checked").val();
    const DOBInput = $("#DOB").val();
    const shirtInput = $("#shirt").val();

    $(".name").text(nameInput);
    $(".season").text(seasonInput);
    $(".pet").text(petInput);
    $(".DOB").text(DOBInput);
    $(".shirt").text("this color").css("color", shirtInput);
   
    $("#response").show();
  })
})