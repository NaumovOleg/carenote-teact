const gapi = window.gapi;

function start() {

    console.log('===========')

    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyCAe1ONk-vBrZgeNAumqrx-CJZN3gCANu0',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        // clientId and scope are optional if auth is not required.
        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function() {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};

exports.google =  {start:  start,gapi:gapi}