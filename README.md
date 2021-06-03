## CS374: Intro to **HCI** 2021 Spring Design Project 4 & 5
---
# Redesigning Experiences on Learning Music for Beginners
## Team *MmArk* (Members: [*Kim Daewon*](https://github.com/star810, "Kim Daewon"), [*Kim Minjun*](https://github.com/HoneyTt21, "Kim Minjun"), [*Jeong Seunghyeon*](https://github.com/antony-jeong, "Jeong Seunghyeon"), [*Hwang Hyewon*](https://github.com/hywnH, "Hwang Hyewon"))

- POV : We met (read or saw) people who
**cannot read sheet music well.**
We were amazed to realize that
**they write down the names of musical notes on the sheet musics to get the melody.**
It’d be game-changing 
**to provide introductory interactive learning experience.**


- Target User : People who wants introductory knowledge in sheet music


- Tasks :

  1. Enter ‘Rhythm’ game, control the sheet music player and try to stop while playing.

  1. Complete the ‘Notes’ game

  1. Switch to your preferred language and complete pages 6, 8, and 11 of the ‘Rhythm’ game.

- Implementation :
  - Used **React.js** for front-end library and **Django** for back-end framework. Web hosting via **AWS ES2** and **Amazon Lightsail** for each front and back-ends.
 
- Major Features :
  - 2 out of total 5 contents prepared for introductive interactive learning on music
  - Sheet music rendering component 
  - Editing mode of sheet music even with keyboard shortcuts
  - Sheet cursor for better control
  - Clickable and draggable own-made playable piano on web 
  - Sound response on both sheet and piano directly to user input
  - Sheet music player which also recognizes the part it plays
  - Own data structure on sheet music
  - Wonderful SVG files for all the components which are prepared for sheet music
  - Custom-made instruction formats and its parser
  - Paginator controlled by both mouse click and keyboard input
  - Answer inputs and its checker, progress bar and correct & fail response
  - i18n features on both English and Korean languages
  - Community tab based on Django backend to upload and share one-line sheet music
  - Responsive CSS design (In progress; only for the main page on DP4)
  - Web hosting via AWS services with static IPs (Domains planning to be connected)

- Under Construction & Future Plans :
  - Nice 404 error page
  - Keyboard-controllable piano
  - User login, sign up, and auth control
  - Tags, replies, or even searching features for an one-line sheet music of the community tab
  - Addition of languages supported or automatic translation for i18n features
  - Customizable color themes

- Brief Explanation on Our Code :
  - /articles, /users : Django apps for Article and User model
  - /config : Django main project control, routes and web hosting
  - /mmark : React.js-based front-end part
    - /mmark/config, /mmark/public, /mmark/scripts : React.js config or setting files
    - /mmark/src : React.js components, stylesheets, and others related on rendering
    - /mmark/example.json : Example data structure for sheet music
    - /mmark/package.json, /mmark/package-lock.json : npm or yarn install requirements and modules
  - /manage.py : Django control python file
  - /db.sqlite3 : Temporary Django database file (Used to reduce back-end feature usages, rather than linking to online databases)
  - /requirements.txt : Environment requirements for backend server    

- Notes :
  1. This web-app is only tested on the latest version of Chrome. (We are not certain that this would show the same result for other browsers as well)
  2. (Handling issues) For 4K resolution monitors, errors are not found, but with lower-resolution monitors, adjusting browser zoom to 80% is needed for better sheet music rendering


- Links:
  - Hi-Fi Prototype : http://bit.ly/CS374-MmArk
  - Hi-Fi Prototype Back-end Server : http://3.36.217.44/ (Under construction; Unavailable for DP 4, DP 5)

  - GitHub Repository : http://bit.ly/CS374-MmArk-GitHub

- Previous Efforts:
  - Lo-Fi Prototype : http://bit.ly/CS374_MmArk (Figma)

