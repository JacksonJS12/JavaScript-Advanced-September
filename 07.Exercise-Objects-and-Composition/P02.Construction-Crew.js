function constructionCrew(worker) {
    if(worker.dizziness === true) {
        const waterToTake = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterToTake;
        worker.dizziness = false;
    }

    return worker;
}
let result = constructionCrew({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
)

console.log(result);