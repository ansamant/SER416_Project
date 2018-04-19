    function searchLocation(location) {
        $('#results').hide();
        $('#resultsFor').html('Showing results for: <b>' + location + '</b>');
        $('#opportunities').fadeIn(200);
        $('#loading').fadeIn(200);
        setTimeout(
            function() {
                $('#loading').fadeOut(200);
                $('#results').fadeIn(1000);
                $('html,body').animate({scrollTop: document.body.scrollHeight}, 2500);
            }, 750);
    }

    function signUp(eventName) {
        let loggedIn = true;
        if (loggedIn) {
            $('#modalBody').html('<p>Thank you for signing up to volunteer with <b><i>'
                + eventName + '</i></b>!<br/><br/>We have sent you an email containing more details '
                + 'about the event.  We appreciate your service to to community!</p>');
            $('#myModal').show();
        } else {

        }
    }


    window.onclick = function(event) {
        if (event.target.id === 'myModal') {
            $('#myModal').fadeOut(250);
        }
    };