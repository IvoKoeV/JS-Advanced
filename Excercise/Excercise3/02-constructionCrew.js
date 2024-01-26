function constructionCrew(worker) {
  if(worker.dizziness){
        let requiredAmount = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = !worker.dizziness;
  }
  return worker;
}
console.log(constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
}));
constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});
constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
