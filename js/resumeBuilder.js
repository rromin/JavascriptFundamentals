
var fullName = "Kayira Romin";
var role = "Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", fullName);
// var formattedRole = HTMLheaderRole.replace("%data%", role);



var Work = {
    "jobs": [
        {
            "employer": "BETA Energy",
            "title": "Office Boy",
            "dates": "Aug/2016 to Oct/2016",
            "location": "Mountain View, CA",
            "description": "Responsible for making sure the office is clean and making coffee and tea for the Employees and washing the utensils"

        },

        {
            "employer": "Sharek online",
            "title": "Office Boy",
            "dates": "jun/2012 to Oct/2012",
            "location": "Seattle, WA",
            "description": "Responsible for making sure the office is clean and making coffee and tea for the Employees and washing the utensils"

        }
    ]
}

var Projects = {
    "projects": [
        {
            "title": "Batch Video Downloader",
            "date": "2015",
            "description": "Graduation Project",
            "images": "images/fry.jpg"
        },

        {
            "title": "tweeter Clone",
            "date": "2016",
            "description": "Side Project",
            "images": "images/fry.jpg"
        },
        {
            "title": "Photo Album",
            "date": "2016",
            "description": "php Project",
            "images": "images/fry.jpg"
        },
        {
            "title": "Ecommerce site",
            "date": "2017",
            "description": "Laravel and vue js",
            "images": "images/fry.jpg"

        }
    ]

}

var Education = {
    "schools": [
        {
            "name": "Cairo University",
            "city": "Cairo",
            "degree": "Bachelors",
            "majors": ["CS"],
            "minor": "Information Systems",
            "date": 2016,
            "url": "example.com"
        },
        {
            "name": "Cairo University",
            "city": "Cairo",
            "degree": "Masters",
            "majors": ["CS"],
            "minor": "Information Systems",
            "date": 2017,
            "url": "example.com"
        }
    ]
}

var Bio = {
    "name": "Kayira Romin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+201288079313",
        "github": "rromin",
        "tweeter": "rromix",
        "bitbucket": "rromix",
        "email": "rominkayira@yahoo.com or Kayrom.kayira@gmail.com",
        "location": "Nashville, TN"
        // "location": "Cairo, Egypt"
    },
    "skills": ["Reading novesl", "watching Movies", "sleeping", "many more skills"],
    "welcomeMessage": "Hello Everyone welcome to my resume where I show my skills as a web developer",
    "bioPic": "images/profile.jpg"
}

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//$("#header").prepend(bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", Bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", Bio.name);
$("#header").prepend(formattedName);

//$("#topContacts").append(HTMLcontactGeneric);
var formattedImage = HTMLbioPic.replace("%data%", Bio.bioPic);
$("#header").append(formattedImage);
var formattedMobile = HTMLmobile.replace("%data%", Bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    
var formattedEmail = HTMLemail.replace("%data%", Bio.contacts.email);
    $("#topContacts").append(formattedEmail);

var formattedTweeter =HTMLtwitter.replace("%data%", Bio.contacts.tweeter);
    $("#topContacts").append(formattedTweeter);
var formattedGitHub = HTMLgithub.replace("%data%", Bio.contacts.github);
    $("#topContacts").append(formattedGitHub);



var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", Bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);


for(job in Work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedTittle = HTMLworkTitle.replace("%data%", Work.jobs[job].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", Work.jobs[job].employer);
    var formattedWorkTitle = formattedEmployer + formattedTittle;

    $(".work-entry:last").append(formattedWorkTitle);

    var formattedDate = HTMLworkDates.replace("%data%", Work.jobs[job].dates);
    $(".work-entry:last").append(formattedDate);

    var formattedDescription = HTMLworkDescription.replace("%data%", Work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);
}


projects.display = function () {

    for(project in Projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", Projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", Projects.projects[project].date);
            $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", Projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);
    //     var formattedProjectImage = HTMLprojectImage.replace("%data%", Projects.projects[project].images;
        //         $(".project-entry:last").append(formattedProjectImage);
        //
     }
}

projects.display();

$("#mapDiv").append(googleMap);