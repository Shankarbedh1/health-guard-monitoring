// script.js
function calculateDiet() {
    const age = parseInt(document.getElementById('user-age').value);
    const weight = parseInt(document.getElementById('user-weight').value);
    const height = parseInt(document.getElementById('user-height').value);
    const goal = document.getElementById('goal').value;
    const diet = document.getElementById('diet').value;
    const activity = document.getElementById('activity').value;
    const focus = document.getElementById('focus').value;

    console.log(age,weight,height,goal,diet,activity,focus)

    // Calculate BMR (Basal Metabolic Rate)
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Default for male

    // Adjust BMR based on activity level
    let calorieMultiplier;
    switch (activity) {
        case 'sedentary':
            calorieMultiplier = 1.2;
            break;
        case 'light':
            calorieMultiplier = 1.375;
            break;
        case 'moderate':
            calorieMultiplier = 1.55;
            break;
        case 'active':
            calorieMultiplier = 1.725;
            break;
        case 'extra':
            calorieMultiplier = 1.9;
            break;
    }

    let totalCalories = bmr * calorieMultiplier;

    // Adjust calories based on goal
    if (goal === 'gain') {
        totalCalories += 500; // Surplus for gaining weight
    } else if (goal === 'lose') {
        totalCalories -= 500; // Deficit for losing weight
    }

    // Calculate macros (approximations)
    const protein = (totalCalories * 0.25) / 4; // 25% of calories from protein
    const carbs = (totalCalories * 0.50) / 4;   // 50% of calories from carbs
    const fats = (totalCalories * 0.25) / 9;    // 25% of calories from fats


    // Food suggestions based on diet type
    let foodSuggestions;
    if (diet === 'veg') {
        foodSuggestions = "Vegetarian options: Rice, Dal, Curd, Paneer, Vegetables, Fruits.";
    } else {
        foodSuggestions = "Non-Vegetarian options: Fish, Eggs, Meat, Chicken, Dairy, Vegetables.";
    }

    // Output results
    document.getElementById('calories').innerText = `Calories: ${Math.round(totalCalories)}`;
    document.getElementById('protein').innerText = `Protein: ${Math.round(protein)} g`;
    document.getElementById('carbs').innerText = `Carbohydrates: ${Math.round(carbs)} g`;
    document.getElementById('fats').innerText = `Fats: ${Math.round(fats)} g`;
    document.getElementById('dietType').innerText = `Diet Type: ${diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}`;
    document.getElementById('focusArea').innerText = `Focus Area: ${focus}`;
    document.getElementById('foodSuggestions').innerText = `Food Suggestions: ${foodSuggestions}`;
}


//
function openDiet() {
    const open = document.querySelector(".deit-container");
    open.classList.add("deit-container-open");
  }
  
  function closeDiet() {
    const close = document.querySelector(".deit-container");
    close.classList.remove("deit-container-open");
  }