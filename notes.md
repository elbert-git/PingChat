# name of chatping chat 
main page will be earth with a bunch of pinging towers that ping and you click.
if possible ping where you click and the globe


# basic version 1
- [X] setup routing and context for login state
- [X] map out what the database has to save
	- user data schema
	- messages data schema. 
- [X] start creating main root 
			with header and outlet
- [X] create header with coniditional rendering on auth
- [X] Create sizing css for main root
- [X] create register page
	- [X] create text field component
	- [ ] create button component

# component tree
	- > app
		- > context and routing
			- > mainroot: this is the main thing that stretches. 
				- > header: contains a flex-list of nav-links. each link will hide and show 
				- > outlet: will render based on the link

- > outlet pages
	- log in


# Data shemas
- Messages collectgion
	- message
		- sender
		- body
		- timestamp

- userData collection
	- username
	- profile-picture
	- email

- banned users collection
- emails


# context data schema
- userData
- isBanned


# Stretch goals
- cool ass animaionts with that react-animation module


