$(function(){
  api_url_path = "/api/games/"
  current_game_id = null;

  $("#new-game-but").on('click', function(){
    $.post(api_url_path, {})
      .success(function(data){
        update_current_game_id(data.id);
        update_score();
        clear_error_message();
        console.log("Success on requesting POST '"+ api_url_path + "'. Created game with id: " + data.id);
      })
      .error(function(data){
        console.error("Error on requesting POST '"+ api_url_path + "'.");
        console.error(data);
      })
  })

  $("#knocked-pins-form").on("submit", function(e){
    e.preventDefault();
    knocked_pins = $("#knocked-pins").val();
    // check_score();
    send_knocked_pins(knocked_pins);
  })

//   setInterval(function(){
//     if (current_game_id) { update_score() }
//   }, 5000);


  function update_current_game_id(id){
    current_game_id = id;
    $("#game-id").text(id);
  }

  function update_score(){
    $.get(api_url_path + current_game_id)
      .success(function(data){
        console.log("Success on requesting GET '"+ api_url_path + current_game_id + "'");
        $("#game-score").text(data.score);
        $("#game-frames").text(data.score_by_frame.length);
        $("#game-score-by-frame").text(JSON.stringify(data.score_by_frame));
        $("#game-over").text(data.game_over.toString());
      })
      .error(function(data){
        console.error("Error on requesting GET '"+ api_url_path + current_game_id);
        console.error(data);
      })
  }

  function send_knocked_pins(knocked_pins){
    $.ajax({
        "url": api_url_path + current_game_id,
        "type": "PUT",
        "data": {"knocked_pins": knocked_pins},
        success: function (data, text) {
          update_score();
          clear_error_message();
          console.log("Success on requesting PUT '"+ api_url_path + current_game_id + "' with body: {knocked_pins: " + knocked_pins + "}");
          $("#knocked-pins").val("");
        },
        error: function (request, status, error) {
          try {
            error_message = request.responseJSON.message;
          }
          catch(err) {
            error_message = "";
          }
          finally {
            update_error_message(error_message);
            console.error("Error on requesting PUT '"+ api_url_path + current_game_id + "' with body: {knocked_pins: " + knocked_pins + "}");
            console.error(request);
          }
        }
    });
  }

  function update_error_message(message){
    if (!message) { message = "Server error 123." }
    $("#error-message").text(message);
  }

  function clear_error_message(){
    $("#error-message").text("");
  }
})
