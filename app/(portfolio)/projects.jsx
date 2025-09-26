//tuple with project names, images and a brief description, page location and data(description, features, images, image descriptions)

let projects = [{
   title: "AutoPrintR",
   image: require('../../assets/images/AutoPrintR Logo Design.png'),
   description: "AutoPrintR is a Desktop application that automatically prints out files i.e. pdfs, word docx etc that are in a user's folder of choice",
   page: '/projectpage',
   fullAppDescription: "AutoPrintR is a lightweight Windows application that automatically prints files added to a specified folder. It monitors the folder in real time and sends printable files to the default printer without user intervention. The App is written in Java and JavaSwing for the basic backend and frontend design, Windowns Batch for app launching from a specific directory and Powershell Script for Office documents silent printing. Packaged using \"jpackage\"",
   features: [
      "Monitors a selected folder for new files",
      "Automatically prints PDF, Office, text, and image files",
      "Maintains a log of printed files to avoid duplicates",
      "Prevents multiple instances from running simultaneously",
      "Installs with a default installation timestamp",
      "Minimizes to system tray (if supported)"
   ],
   imagesAndDescriptions: [
      { image: require('../../assets/images/AP1.png'), description: "A message that the application is waiting for new files in the watch folder." },
      { image: require('../../assets/images/AP2.png'), description: "Choose “watch folder”: which is the folder that has all the files to print or where future files should be pasted/moved/modified to be printed out." },
      { image: require('../../assets/images/AP3.png'), description: "A new file called “drak94hh” has been pasted into the watch folder and will be printed." },
      { image: require('../../assets/images/AP4.png'), description: "A message that the file: “drak94hh” has been printed." },
      { image: require('../../assets/images/AP5.png'), description: " you can see the installation date is 08/08/25, 12:24 and the modification date of the file is 14/08/25 and our printer will start printing files modified/created after the installation date." },
      { image: require('../../assets/images/AP6.png'), description: "If you run into this error while trying to open the application it means there’s an instance already running. So just navigate to your system tray as explained above and open that instance." },
      { image: require('../../assets/images/AP7.png'), description: "When the application is closed, it gets minimized to the system tray where it is still active but in the background. To access the system tray, Click the arrow point (^) up located in your taskbar. There you will find the AutoPrintR app. This is done in order to actively print out files in the background as they are added to the watch folder without the user directly interacting with the app." },
   ]
},
{
   title: "RideWise",
   image: require('../../assets/images/RWlogo.png'),
   description: "RideWise is a ride hailing and delivery price comparison website. It compares various platforms and provides you with the cheapest option",
   page: '/projectpage',
   fullAppDescription: "RideWise is a ride hailing and delivery price comparison website. It compares various platforms and provides you with the cheapest option. The app was written in React.js, java script (frontend), python (backend) for webscraping and basic functions. The database used was MongoDB",
   features: [
      "Price Comparison of ride hailing and delivery service providers",
      "Cheapest Recommendation for your ride or delivery",
      "The user has the ability to navigate to whichever service provider after the prices have been presented"
   ],
   imagesAndDescriptions: [
      { image: require("../../assets/images/RW1.png"), description: "User registration page" },
      { image: require("../../assets/images/RW2.png"), description: "Login Page after registration" },
      { image: require("../../assets/images/RW3.png"), description: "Here you can see the user added to the mongodb and their details" },
      { image: require("../../assets/images/RW4.png"), description: "In the app, the user can either do a Delivery Price comparison or a Ride Price comparison" },
      { image: require("../../assets/images/RW5.png"), description: "When the user selects he Compare Rides option, they are prompted for their current location and destination. With that information the app will calculate the cost of the ride. To elaborate, the distance between the 2 locations is attained by using the Nominatim OpenStreetMap API and the duration is calculated by first determining the speed using South Africa's top 3 speed limits (100, 60 and 120 = 90.3). From that basic math is used to calculate the duration and costs for the Ride Hailing service providers using their base fees ofcourse" },
      { image: require("../../assets/images/RW6.png"), description: "When the user selects the Compare Delivery Services option, they will be prompted for their location and destination and the height, length and weight of the item to deliver. The app will now scrap the Fastway site to get the fee's they charge for the item with those dimensions and weight, and the distance they should travel to deliver it. For Postnet the calculation for how much they charge was already available in the site similarly with takelot." },
   ]
},
{
   title: "A Picture of Heaven",
   image: require('../../assets/images/APHLogo.jpg'),
   description: "Media Player, Song Guess Game and soon to have an Arcade Game Desktop Application. This App is tailored for my music :)",
   page: '/projectpage',
   fullAppDescription: "Media Player, Song Guess Game and soon to have an Arcade Game Desktop Application. This App is tailored for my music :). Written in Java and JavaFX",
   features: ["Guess the Song Game", "Media Player", "Arcade Game(beta)"],
   imagesAndDescriptions: [
      { image: require("../../assets/images/APH1.png"), description: "Home Screen showing the various links to screens" },
      { image: require("../../assets/images/APH2.png"), description: "When \"Guess the Song\" is selected, stems from a random song play and the user has to enter the name of the song which they think contains that stem. If true, a success message is displayed" },
      { image: require("../../assets/images/APH3.png"), description: "This is the Arcade Game Home screen. Still under construction as you can see but it will allow the user to select a character they want and play using them" },
      { image: require("../../assets/images/APH4.png"), description: "When \"Music\" is selected in the Home Screen, the user will see this screen with the song lists and a Media Player" },
      { image: require("../../assets/images/APH5.png"), description: "If the user clicks the play button a random song starts playing" },
      { image: require("../../assets/images/APH6.png"), description: "If they select a song under the \"A Picture of Heaven\" title it'll start playing. The songs will play one after the other until the end. All the buttons like the pause and skip work." },
   ]
},
{
   title: "SyncR",
   image: require('../../assets/images/SyncRLogo.png'),
   description: "Media Player, Song Guess Game and soon to have an Arcade Game Desktop Application. This App is tailored for my music :)",
   page: '/projectpage',
   fullAppDescription: "Media Player, Song Guess Game and soon to have an Arcade Game Desktop Application. This App is tailored for my music :). Written in Java and JavaFX",
   features: ["Guess the Song Game", "Media Player", "Arcade Game(beta)"],
   imagesAndDescriptions: [
      { image: require("../../assets/images/APH1.png"), description: "Home Screen showing the various links to screens" },
      { image: require("../../assets/images/APH2.png"), description: "When \"Guess the Song\" is selected, stems from a random song play and the user has to enter the name of the song which they think contains that stem. If true, a success message is displayed" },
      { image: require("../../assets/images/APH3.png"), description: "This is the Arcade Game Home screen. Still under construction as you can see but it will allow the user to select a character they want and play using them" },
      { image: require("../../assets/images/APH4.png"), description: "When \"Music\" is selected in the Home Screen, the user will see this screen with the song lists and a Media Player" },
      { image: require("../../assets/images/APH5.png"), description: "If the user clicks the play button a random song starts playing" },
      { image: require("../../assets/images/APH6.png"), description: "If they select a song under the \"A Picture of Heaven\" title it'll start playing. The songs will play one after the other until the end. All the buttons like the pause and skip work." },
   ]
},

/*
{
   title: "My Virtual Closet",
   image: require('../../assets/images/favicon.png'),
   description: "A closet on your phone. No skelotons there just outfit recommendations based on your clothes. That brown sweater is begging you to wear it hey!!",
   page: '/projectpage',
   fullAppDescription: "A closet in your phone type shii. Written in Kotlin with SQLite database, this app gives you outfit recommendations based on the clothes you captured and saved in the system.",
   features: ["Outfit Recommendation"],
   imagesAndDescriptions: [{ image: "", description: "" }]
}*/
]

export default projects