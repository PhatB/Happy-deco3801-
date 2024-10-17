
# Happy Plants #

Happy Plants is a plant health management solution created by Team Happy for DECO3801.


## Server ##

### How to run ###

Prerequisites:
* Dotnet SDK
* MongoDB
* Dotnet MongoDB driver

To run:

Enter the Server/ServerTest2/ServerTest2 subdirectory \
Type `dotnet run`

The server is currently being hosted on https://deco3801-teamhappy.uqcloud.net/

### Code Sources ###

The code for the server was inspired by 
https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0
and https://medium.com/@sajadshafi/jwt-authentication-in-c-net-core-7-web-api-b825b3aee11d

## Mobile App ##    

### How to run ###

Prerequisites:
* Node Package Manager
* React Native - See https://reactnative.dev/docs/environment-setup for details.
* An android (e.g. Android Studio) or iOS (e.g. XCode) emulator.
To run:

Enter the App/ subdirectory. \
Type `npm install` \
Type `npm start` 

Select the platform you are simulating (eg. iOS or Android)

The app should be launched in your emulator of choice.

## Device ##

### How to Run ### 
Prerequisites:
- [Arduino IDE](https://www.arduino.cc/en/software) (Version 2.3.3 was used to create this project)
- ESP32 board manager installed in Arduino IDE.
- Libraries:
  - `WiFi.h`
  - `HTTPClient.h`
  - `ArduinoJson.h`
  - `time.h`



1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/plant-monitoring-system.git
   cd plant-monitoring-system
   ```

2. **Open the project in Arduino IDE**
- Launch Arduino IDE.
- Load the .ino file from the cloned repository.
- Ensure the required libraries (WiFi, HTTPClient, ArduinoJson, time) are installed via the Library Manager.

3. **Configure WiFi Credentials**

   ```bash
   const char* ssid = "your_SSID";
   const char* password = "your_PASSWORD";
   ```

4. **Upload the Code**
   - Connect the ESP32 (or equivalent microcontroller) to your PC
   - The board and port will be automatically selected in the *Tools* menu
     - Otherwise, select the correct board (ESP32 Dev Module) and port from the *Tools* menu
   - Click *Upload*