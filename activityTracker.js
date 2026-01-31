/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module5b-weektracker
*/

/*
Predictions:
- Which activity will have the highest enjoyment? Gym workout
- What category will dominate your week? Creative
- What patterns might exist around time of day? The evening will have more hours since I normally do homework or watch TV during that time.
*/

//Input
const myWeek = [
  {
    day: "Monday",
    activity: "In-person class on campus",
    category: "creative",
    hoursSpent: 2,
    enjoyment: 8,
    timeOfDay: "afternoon"
  },
  {
    day: "Tuesday",
    activity: "Database homework",
    category: "creative",
    hoursSpent: 2,
    enjoyment: 7,
    timeOfDay: "evening"
  },
  {
    day: "Wednesday",
    activity: "Presented a speech in class",
    category: "social",
    hoursSpent: 2,
    enjoyment: 6,
    timeOfDay: "morning"
  },
  {
    day: "Thursday",
    activity: "Cook dinner",
    category: "creative",
    hoursSpent: 1.0,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Friday",
    activity: "Completed JavaScript assignments",
    category: "creative",
    hoursSpent: 5,
    enjoyment: 7,
    timeOfDay: "evening"
  },
  {
    day: "Saturday",
    activity: "Gym workout",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 9,
    timeOfDay: "morning"
  },
  {
    day: "Sunday",
    activity: "Caught up on my TV shows",
    category: "creative",
    hoursSpent: 3,
    enjoyment: 9,
    timeOfDay: "evening"
  }
];

//Functions

// Total hours by category
function totalHoursByCategory(categoryName) {
  return myWeek
    .filter(act => act.category === categoryName)
    .reduce((total, act) => total + act.hoursSpent, 0);
}

// Average enjoyment by time of day
function averageEnjoymentByTimeOfDay(time) {
  const matches = myWeek.filter(act => act.timeOfDay === time);

  if (matches.length === 0) return 0;

  const totalEnjoyment = matches.reduce((sum, act) => sum + act.enjoyment, 0);
  return totalEnjoyment / matches.length;
}

// Most common category
function mostCommonCategory() {
  const counts = myWeek.reduce((acc, act) => {
    acc[act.category] = (acc[act.category] || 0) + 1;
    return acc;
  }, {});

  const winner = Object.entries(counts).reduce((best, current) => {
    const [bestCat, bestCount] = best;
    const [curCat, curCount] = current;
    return curCount > bestCount ? current : best;
  });

  return winner[0];
}

// Low-effort, high-enjoyment activities
function lowEffortHighEnjoyment(maxHours, minEnjoyment) {
  return myWeek
    .filter(act => act.hoursSpent <= maxHours && act.enjoyment >= minEnjoyment)
    .map(act => act.activity);
}

//Higher-Order Function
function filterByCondition(testFunction) {
  return myWeek.filter(testFunction);
}


