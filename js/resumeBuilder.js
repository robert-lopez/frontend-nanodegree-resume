var bio = {
"name":"Robert Lopez",
"role":"QA Engineer",
"contact":{	"tell":"(809) 570-9578",
			"cell":"(829) 429-1859",
			"email":"robert@engineer.com"
			},
"picture": "images/2.png",
"welcome":"Welcome to my Resume!",
"skills":"Programming, Solving, Perseverance, Spanish",
"worktitle":"SCRUM Team Member",
"schoolname": "Jesus Marcano"
};

$("#header").prepend(HTMLskills.replace("%data%", bio.skills));

$("#header").prepend(HTMLemail.replace("%data%", bio.contact.email));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contact.cell));
//$("#header").prepend(HTMLcontactGeneric.replace("%data%", bio.contact.tell));


$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
$("#header").prepend(HTMLWelcomeMsg.replace("%data%", bio.welcome));

$("#header").append(HTMLworkTitle.replace("%data%", bio["worktitle"]));
$("#header").append(HTMLschoolName.replace("%data%", bio["schoolname"]));

