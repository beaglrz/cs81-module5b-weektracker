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
    activity: "In-person Class on Campus",
    category: "Creative",
    hoursSpent: 2,
    enjoyment: 8,
    timeOfDay: "Afternoon"
  },
  {
    day: "Tuesday",
    activity: "Public Speaking Homework",
    category: "Creative",
    hoursSpent: 2,
    enjoyment: 7,
    timeOfDay: "Evening"
  },
  {
    day: "Wednesday",
    activity: "Presented a Speech in Class",
    category: "Social",
    hoursSpent: 2,
    enjoyment: 6,
    timeOfDay: "Morning"
  },
  {
    day: "Thursday",
    activity: "Cook Dinner",
    category: "Creative",
    hoursSpent: 1.0,
    enjoyment: 9,
    timeOfDay: "Evening"
  },
  {
    day: "Friday",
    activity: "Completed JavaScript Assignments",
    category: "Creative",
    hoursSpent: 5,
    enjoyment: 7,
    timeOfDay: "Evening"
  },
  {
    day: "Saturday",
    activity: "Gym Workout",
    category: "Physical",
    hoursSpent: 1,
    enjoyment: 9,
    timeOfDay: "Morning"
  },
  {
    day: "Sunday",
    activity: "Caught Up on TV Shows",
    category: "Creative",
    hoursSpent: 3,
    enjoyment: 9,
    timeOfDay: "Evening"
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

//Output

console.log("WEEKLY ACTIVITIES");

console.log("Total Hours Spent on Physical Activities:",
    totalHoursByCategory("Physical"));

console.log("Average Enjoyment for Activities in the Evening:", 
    averageEnjoymentByTimeOfDay("Evening").toFixed(1));

console.log("Most Common Activity Type:", 
    mostCommonCategory());

console.log("Low-Effort, High-Enjoyment Activities:", 
    lowEffortHighEnjoyment(1,9).join(", "));

console.log("Evening Activities with 8+ Enjoyment:", 
    filterByCondition(activity => activity.timeOfDay === "Evening" && activity.enjoyment >= 8).map(activity => activity.activity).join(", "));