$(document).ready(function() {
    fetch("curriculum.json")
    .then((rawData) => rawData.json())
    .then((curriculum) => {
        //console.log(curriculum);

        let sem = ["First Year, First Semester",
                    "First Year, Second Semester",
                    "Second Year, First Semester",
                    "Second Year, Second Semester",
                    "Third Year, First Semester",
                    "Third Year, Second Semester",
                    "Fourth Year, First Semester",
                    "Fourth Year, Second Semester"];
        let semcount = 0;
        curriculum.forEach(subjects => {
            //Header
                console.log(sem[semcount++]);
            for (let i = 0; i < subjects.length; i++) {
                //Initialize data
                let subject = subjects[i];
                console.log(subject.Course);
                console.log(subject.Description);
                console.log(subject.Unit);
                console.log(subject.Grade);
                console.log(subject.Remarks);
            }
        });

        $(".tablebody").append(
            //htmlCodes
        )
    });
})