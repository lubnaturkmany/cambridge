const trainingCenters =[
    {
        id:1,
        name:"Cambridge Learning Center",
        location:"Amman, Jordan",
        description:"A professional center offering language and educational programs.",
        accreditationStatus:"Active",
        accreditationDate:"15-01-2025"
    },

    {
        id:2,
        name:"Future Skills Academy",
        location:"Irbid, Jordan",
        description:"Specialized in technology and professional skills training.",
        accreditationStatus:"Active",
        accreditationDate:"20-08-2024"
    },

    {
        id:3,
        name:"Bright Education Center",
        location:"Zarqa, Jordan",
        description:"Provides educational courses for students and professionals.",
        accreditationStatus:"Active",
        accreditationDate:"10-05-2023"
    },

    {
        id:4,
        name:"Global Training Institute",
        location:"Aqaba, Jordan",
        description:"Offers international training and development programs.",
        accreditationStatus:"Inactive",
        accreditationDate:"12-03-2025"
    },

    {
        id:5,
        name:"Knowledge Hub Center",
        location:"Salt, jordan",
        description:"Focuses on computer skills and professional development.",
        accreditationStatus:"Active",
        accreditationDate:"05-11-2022"
    },

    {
        id:6,
        name:"Excellence Training Academy",
        location:"Madaba, Jordan",
        description:"Provides specialized training and educational services.",
        accreditationStatus:"Inactive",
        accreditationDate:"18-06-2025"
    }
];

function displayTrainingCenters(searchTerm = "") {

    const centersContainer= document.getElementById("centers-container");

    const searchText = searchTerm.trim().toLowerCase();

    const filteredCenters = trainingCenters.filter(function(center) {
        return center.accreditationStatus.toLowerCase() === "active" &&
        center.name.toLowerCase().includes(searchText);
    });

centersContainer.innerHTML= "";

if (filteredCenters.length === 0) {

        centersContainer.className ="centers-container no-centers-message";

        if (searchText !== "") {
            centersContainer.textContent ="No training centers match your search.";
        } else {
            centersContainer.textContent ="No accredited training centers are currently available.";
        }

        return;
    }
centersContainer.className="centers-container";

filteredCenters.forEach(function(center){

    const card= document.createElement("div");
    card.className="center-card";
    card.id='center-${center.id}';

    const name= document.createElement("h3");
    name.textContent=center.name;

    const location= document.createElement("p");
    location.textContent=`Location: ${center.location}`;

    const description=document.createElement("p");
    description.textContent= center.description;

    const status= document.createElement("span");
    status.className="status";
    status.textContent= center.accreditationStatus;

    const date= document.createElement("p");
    date.className="accreditation-date";
    date.textContent=`Accreditation Date:${center.accreditationDate}`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(description);
    card.appendChild(status);
    card.appendChild(date);

    centersContainer.appendChild(card);
});
}

const centerSearch = document.getElementById("center-search");

centerSearch.addEventListener("input", function() {
    displayTrainingCenters(centerSearch.value);
});

const trainers=[
    {
        id: 1,
        name:"Sara Ahmad",
        specialization:"English Language",
        centerId: 2,
        accreditationStatus:"Active",
        accreditationDate:"10-02-2025"
    },

    {
        id: 2,
        name:"Omar khaled",
        specialization:"Web Development",
        centerId: 5,
        accreditationStatus:"Active",
        accreditationDate:"20-01-2025"
    },

    {
        id: 3,
        name:"Lina Hassan",
        specialization:"Business Administration",
        centerId: 1,
        accreditationStatus:"Inactive",
        accreditationDate:"15-06-2023"
    },

    {
        id: 4,
        name:"Ahmad Saleh",
        specialization:"Computer skills",
        centerId: 3,
        accreditationStatus:"Active",
        accreditationDate:"05-03-2025"
    },

    {
        id: 5,
        name:"Maya Ibrahim",
        specialization:"Project Management",
        centerId: 2,
        accreditationStatus:"Inactive",
        accreditationDate:"12-04-2024"
    },

    {
        id: 6,
        name:"Khaled Nasser",
        specialization:"Professional Development",
        centerId: 6,
        accreditationStatus:"Active",
        accreditationDate:"18-05-2025"
    }
];

function displayTrainers(searchTerm = ""){

    const trainersContainer= document.getElementById("trainers-container");

    const searchText = searchTerm.trim().toLowerCase();

    const filteredTrainers = trainers.filter(function(trainer) {
        const associatedCenter = trainingCenters.find(function(center) {
            return center.id === trainer.centerId;
        });
        return trainer.accreditationStatus.toLowerCase() === "active" && associatedCenter &&
            associatedCenter.accreditationStatus.toLowerCase() === "active" &&
            trainer.name.toLowerCase().includes(searchText);
        });

    trainersContainer.innerHTML="";

    if (filteredTrainers.length === 0) {
        trainersContainer.className ="trainers-container no-trainers-message";
        
        if (searchText !== "") {
            trainersContainer.textContent ="No trainers match your search.";
        } else {
            trainersContainer.textContent ="No accredited trainers are currently available.";
        }
        return;
    }

    trainersContainer.className="trainers-container";

    filteredTrainers.forEach(function(trainer){

        const associatedCenter= trainingCenters.find(function(center){
            return center.id === trainer.centerId;
        });

        const card = document.createElement("div");
        card.className="trainer-card";
        card.id= `trainer-${trainer.id}`;

        const name= document.createElement("h3");
        name.textContent=trainer.name;

        const specialization= document.createElement("p");
        specialization.textContent=`Specialization: ${trainer.specialization}`;

        const center= document.createElement("p");
        center.textContent= `Training Center: ${associatedCenter.name}`;

        const status= document.createElement("span");
        status.className="status";
        status.textContent=trainer.accreditationStatus;

        const date= document.createElement("p");
        date.className="accreditation-date";
        date.textContent= `Accreditation Date: ${trainer.accreditationDate}`;

        card.appendChild(name);
        card.appendChild(specialization);
        card.appendChild(center);
        card.appendChild(status);
        card.appendChild(date);

        trainersContainer.appendChild(card);
    });
}

const trainerSearch = document.getElementById("trainer-search");

trainerSearch.addEventListener("input", function() {
    displayTrainers(trainerSearch.value);
});

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent= currentYear;

displayTrainingCenters();
displayTrainers();