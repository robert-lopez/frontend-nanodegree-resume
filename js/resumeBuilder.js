var bio = {
"name":"Robert Lopez",
"role":"QA Engineer",
"contact":{	"tell":"(809) 570-9578",
			"cell":"(829) 429-1859",
			"email":"robert@engineer.com",
			"github":"robert-lopez"
			},
"picture": "images/2.png",
"welcomeMessage":"Welcome to my Resume!",
"skills":["Programming", "Solving", "Perseverance", "Spanish"],

};

var education = {
"schools":[{
		"name": "Jesus Marcano",
		"location":"Santiago, Dominican Republic",
		"majors":["engineering"],
		"degree":"informatic",
		"dates":[2010, 2011, 2012],
		"url":"http://es.wikipedia.org/wiki/Eugenio_de_Jes%C3%BAs_Marcano_Fondeur"
}],
"onlineCourses":[{
		"title":"javascript basic",
		"school":"udacity",
		"dates":[2015],
		"url":"https://www.udacity.com"
}]};

var work = {"jobs":[{
				"employer":"chris",
				"title":"SCRUM TEAM MEMBER",
				"location":"Calle Erick Eckman No. 7, Cerros de Gurabo, Santiago, Dominican Republic",
				"dates":"jan 30, 2014 - Future",
				"description":"giving quality to softwares",
				
}
]
};

var projects = {"projects":[{
					"title":"Operations",
					"dates":"jan 30, 2014 - Future",
					"description":"fixing and creating features",
					"images":["projects/daxko.png"]
}
]
}

function inName(name){
	
	name = name.trim().split(" ");
	name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	
	$("#name").text(name.join(" "));
}

$("#mapDiv").append(googleMap);

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
$("#header").prepend(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3])
	$("#skills").append(formattedSkill);

}


var displayWork = function(){

var workTitle = null;
var workEmployer = null;
for(index in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
	workTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
	$(".work-entry:last").append(workEmployer + workTitle);
	
	var workDate = HTMLworkDates.replace("%data%", work.jobs[index].dates);
	$(".work-entry:last").append(workDate);
	
	var workDesc = HTMLworkDescription.replace("%data%", work.jobs[index].description);
	$(".work-entry:last").append(workDesc);
 //console.log(work.jobs[index].employer); 
 
 }

}

displayWork();


projects.display = function(){
  for(index in this.projects){
    $("#projects").append(HTMLprojectStart);
    
    var title = HTMLprojectTitle.replace("%data%", this.projects[index].title);
    var dates = HTMLprojectDates.replace("%data%", this.projects[index].dates);
    var desc = HTMLprojectDescription.replace("%data%", this.projects[index].description);
    
	$(".project-entry:last").append(title);
    $(".project-entry:last").append(dates);
	$(".project-entry:last").append(desc);
	$(".project-entry:last").append(img);
	
	if(this.projects[index].images.lenght > 0){
		for(image in this.projects[index].images){
		
			var img = HTMLprojectImage.replace("%data%", this.projects[index].images[image]);
		
		}
	
	}
  }


}

projects.display();
 

/*$("#header").prepend(HTMLskills.replace("%data%", bio.skills));

$("#header").prepend(HTMLemail.replace("%data%", bio.contact.email));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contact.cell));
//$("#header").prepend(HTMLcontactGeneric.replace("%data%", bio.contact.tell));


$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
$("#header").prepend(HTMLWelcomeMsg.replace("%data%", bio.welcome));

$("#header").append(HTMLworkTitle.replace("%data%", bio["worktitle"]));
$("#header").append(HTMLschoolName.replace("%data%", bio["schoolname"]));

//$("#header").append(HTMLschoolName.replace("%data%", education["schoolname"]));
$("#header").append(HTMLschoolLocation.replace("%data%", education.city));
$("#header").append(HTMLschoolMajor.replace("%data%", education.major));*/


