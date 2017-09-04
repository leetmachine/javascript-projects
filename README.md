# javascript-projects

This is a simple repository to display my simple Javascript projects.

Smileyface matching-
This game displays two panes of smiley faces. The panes are identical, however, there is 1 mismatched smiley face in the left pane. The object of the game is to identify the mismatched smileyface of each level. Each level refreshes but adds five more smileyfaces to increase difficulty. Upon selecting an incorrect smiley face, the game is over. 

This project was presented through a Coursera HTML, CSS, and Javascript course.

Tech description:
The webpage uses the onload attribute to start the game through the generateFaces() function call. A for loop uses the Math.Random() function to calculate coordinates and append smiley face img elements as children of the left div. The children nodes are cloned and appended to the right div. The last child is then removed. The left div now has 1 extra child. This last child is given an onclick() which will recall generateFaces() and increase the length of the for loop for increased difficulty. An onclick() function exists on the rest of the html body. Clicking anywhere else indicates the user selected a wrong candidate object and the game terminates. 


Improvements:
A scoring metric should be added to let the user know how well they did. A database could be added to record user scores to make the game competitive for users around the world. I would like to know how other people do at this game and incorporate some analytics on this information to find out at which point the game becomes too difficult to pass. I would like to improve the styling to make the game more attractive. Upon clicking the wrong answer, I would like the smiley faces to change to sad faces, and a turn red. This would make the game more appealing and more fun!
