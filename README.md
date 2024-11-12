# StoryGameWeb

For the web api follow [this](https://github.com/Tnail1994/StoryGameApi)

An Angular Web Application. The Game called 'One Line Story'.
"One Line Story" is a collaborative storytelling game where participants wor together to create a narrative, one sentence at a time. The game begins With a starting sentence, and each Player, in turn, contributes one sentence to the story while only seeing the preceding sentence. This sequential process continues, With each player building on the emerging plot or introducing unexpected twists. The result is a unique and often humorous story that unfolds gradually, showcasing the creativity and adaptability of the participants as they respond to the evolving narrative in real-time. The game is a playful exercise in cooperative storytelling, demonstrating how a  ollective imagination can Shape a story in unexpected ways.

## Screenshots

Main menu view: Navigating to `CreateStory` or `StoryListComponent`

![Main menu](src/assets/mainmenu-screenshot.png "Main menu")


Create story view: Service sends put request, when form is valid

![Create a story](src/assets/addnewstory-screenshot.png "Create a story")


Story lists view: Service sends get request for completed or ongoing stories

![Completed stories](src/assets/allcompletedstories-screenshot.png "Completed stories")
![Ongoing stories](src/assets/ongoingstories-screenshot.png "Ongoing stories")


Story details lists view: Service sends get and put request for getting story info and updating sentences

![Completed story without topic](src/assets/completeddetailswithouttopic-screenshot.png "Completed story without topic")
![Ongoing story with topic](src/assets/ongoingstories-screenshot.png "Ongoing story with topic")