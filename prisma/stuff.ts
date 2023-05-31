const fs = require('fs')

const jsonData = fs.readFileSync('prisma/courses.json', 'utf8')
const {courses} = JSON.parse(jsonData)
function fuck(){
    for(const key of courses){
        const trainingCourse = key;
        console.log('bitch')
    }
// console.log(courses)
}

fuck()
