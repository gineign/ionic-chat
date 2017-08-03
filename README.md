# ionic2-rxjs-socketio-chat


## Install & Run

Clone this repo


Install server dependencies and run the server.
Note that the server must be running for application to work.

````bash
cd server
npm install
node server.js # run the server
````

Then install app dependencies.

````bash
cd app
npm install
ionic serve # run the app in browser
````

Then open another browser and navigate to http://localhost:8100 or emulate app on device.

Emulate app on iOS (Mac OSX required)
````bash
ionic platfrom add ios
ionic ios run
````

Emulate app on Android
````bash
ionic platform add android
ionic run android
````

## Inspired By

https://github.com/jkuri/ionic2-rxjs-socketio-chat.git

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
