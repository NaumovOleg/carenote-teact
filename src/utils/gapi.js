const gapi = window.gapi;

function start() {

    console.log('===========')

    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyBQ-9Zj5z-GNkpR1NdOJB5IFlXvLT-4tdc',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://www.googleapis.com/auth/calendar'],
        // clientId and scope are optional if auth is not required.
        'clientId': '1001705151822-qme1fk5m2k70r73dea6bag79b5vob82b.apps.googleusercontent.com',
        'scope': 'calendar',
    }).then(function() {
        // 3. Initialize and make the API request.

        console.log( '------------', gapi.client.people )
        // return gapi.client.people.people.get({
        //     'resourceName': '/users/me/calendarList/keeperoleg26@gmail.com',
        //     // 'requestMask.includeField': 'person.names'
        // });
    }).then(function(response) {
        console.log('-------------dddd', response.result);
    }, function(reason) {
        console.log('eeeeeeeeeeeeeeeeeee Error: ' + reason.result);
    });
};

exports.google =  {start:  start,gapi:gapi }