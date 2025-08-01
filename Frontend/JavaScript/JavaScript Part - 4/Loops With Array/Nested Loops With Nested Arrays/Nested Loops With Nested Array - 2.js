
// ---: Nested Loops With Nested Arrays - 2 :---

let student = [["Aman",95],["Shradha",94.4],["Meet",100]];

for(let i=0;i<student.length;i++)
{
    console.log("---: Student[",i+1,"] Info :---");
    console.log(" ");

    for(let j=0;j<student[i].length;j++)
    {
        if(j == 0)
        {
            console.log("Student[",i+1,"] Name :- ",student[i][j]);
        }
        else if(j == 1)
        {
            console.log("Student[",i+1,"] Marks :- ",student[i][j]);
        }
    }

    console.log(" ");
    console.log(" ");
}