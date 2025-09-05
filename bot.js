var audio = new Audio('public/bot/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href=''> <div class='socialItem' id='call'><img class='socialItemI' src='bot/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:fitness@gmail.com'> <div class='socialItem'><img class='socialItemI' src='bot/gmail.svg' alt=''></div> </a> <a target='_blank' href='#'> <div class='socialItem'><img class='socialItemI' src='bot/github.svg' alt=''></div> </a> <a target='_blank' href='#'> <div class='socialItem'><img class='socialItemI' src='bot/whatsapp.svg' alt=''>";
var deitString = "<img src='bot/diet.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>MonthlyMealPlanFitness</label></div><a href='bot/MonthlyMealPlanFitness.pdf' download='bot/MonthlyMealPlanFitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";
var safetyString = "<img src='bot/safety.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>ExerciseSafetyfitness</label></div><a href='bot/ExerciseSafetyfitness.pdf' download='bot/ExerciseSafetyfitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";
var trainersString = "<div class='social'> <a target='_blank' href='mailto:nageshedlafitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 001</h6> <h4>Nagesh Edla</h4><h5>Strength and Conditioning</h5><br></label></label></div> </a> <a target='_blank' href='mailto:nithishkumarbollapellifitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 002</h6><h4>Nithish Kumar Bollapelli</h4><h5>High-intensity functional training (HIFT)</h5><br></label></label></div> </a> <a target='_blank' href='mailto:srividhinreddypeddyreddyfitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 003</h6><h4>Srividhin Reddy Peddyreddy</h4><h5>Yoga and Mindfulness</h5><br></label></label></div> </a> <a target='_blank' href='mailto:nikithreddychittireddyfitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 004</h6><h4>Nikith Reddy Chittireddy</h4> <h5>Yoga and Mindfulness</h5><br></label></label></div> </a> ";
var nutritionString = "<img src='bot/Nutrition.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>Training&NutritionFitness</label></div><a href='bot/Training&NutritionFitness.pdf' download='bot/Training&NutritionFitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("<span>Hello there 👋🏻,<br><br>We're here to help you on your fitness journey.</span><br><br>If you have any questions<span>🙋❓</span> or need assistance with your workouts, nutrition plans, or anything else, we're just a message away.<br><br>Send <span class='bold'>'help'</span> to get started and we'll guide you through whatever you need.<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br><br>Example:<br><span class='bold'>1.'training or nutrition':</span><br> -> to know about Training and Nutrition<span>🧘🥗🍎🌱🔆</span><br><br><span class='bold'>2.'Diet or deit':</span><br>-> to get Deit or Meal Planning<span>🥗🥦🍽🥑🍎😋</span><br><br><span class='bold'>3.'precautions':</span><br>-> to get safety details while doing exercises<span>⚠️</span><br><br><span class='bold'>4.'contact':</span><br>-> to get ways to connect with admin<span>📩💬👤📞</span><br><br><span class='bold'>5.'trainers':</span><br>-> to get details of trainers<span>📩💬👤📞</span><br><br><span class='bold'>6.'clear':</span><br>-> to clear conversation<span>🧹🗑️</span><br>");
            break;


        case "Diet":
        case "diet":
            sendTextMessage(deitString);
            console.log("Diet Plans input received");
            sendTextMessage("I can help you with diet plans tailored to your needs. What is your goal? (e.g., weight loss, muscle gain, balanced diet)");
            break;
        
        case "precautions":
        case "Precautions":
            sendTextMessage(safetyString);
            break;
        
        case "trainers":
        case "Trainers":
            sendTextMessage(trainersString);
             break;
        
        case "nutrition":
        case "Nutrition":
        case "Training":
        case "training":
            sendTextMessage(nutritionString);
            break;


        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        // case "projects":
        //     sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
        //     break;

        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        
            break;
        
        case "hey":
        case "hi":
        case " ":
        case "hello":
        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br><br>Example:<br><span class='bold'>1.'training or nutrition':</span><br> -> to know about Training and Nutrition<span>🧘🥗🍎🌱🔆</span><br><br><span class='bold'>2.'Diet or deit':</span><br>-> to get Deit or Meal Planning<span>🥗🥦🍽🥑🍎😋</span><br><br><span class='bold'>3.'precautions':</span><br>-> to get safety details while doing exercises<span>⚠️</span><br><br><span class='bold'>4.'contact':</span><br>-> to get ways to connect with admin<span>📩💬👤📞</span><br><br><span class='bold'>5.'trainers':</span><br>-> to get details of trainers<span>📩💬👤📞</span><br><br><span class='bold'>6.'clear':</span><br>-> to clear conversation<span>🧹🗑️</span><br>");
            break;

            case "Fitness":
            case "fitness":
            case "fitness bot":
                case "fitness application":
                    console.log("Fitness-related input received");
                    sendTextMessage("Yes, that's me! I’m here to help you with your fitness journey!");
                    sendTextMessage("I can assist you with various fitness-related topics such as workout plans, nutrition tips, safety precautions, and more.");
                    sendTextMessage("Here are some things I can help with:");
                    sendTextMessage("<ul><li>Workout Plans</li><li>Nutrition Tips</li><li>Diet Plans</li><li>Fitness Trainers</li><li>Exercise Safety</li></ul>");
                    sendTextMessage("Just type 'help' to see more options or ask me a specific question!");
                    break;
                
                    case "fitness":
                        case "fitness bot":
                        case "fitness application":
                            console.log("Fitness-related input received");
                            sendTextMessage("Yes, that's me! I’m here to help you with your fitness journey!");
                            sendTextMessage("I can assist you with various fitness-related topics such as workout plans, nutrition tips, safety precautions, and more.");
                            sendTextMessage("Here are some things I can help with:");
                            sendTextMessage("<ul><li>Workout Plans</li><li>Nutrition Tips</li><li>Diet Plans</li><li>Fitness Trainers</li><li>Exercise Safety</li></ul>");
                            sendTextMessage("Just type 'help' to see more options or ask me a specific question!");
                            break;
                        
                        case "workout plans":
                            console.log("Workout Plans input received");
                            sendTextMessage("I can help you with customized workout plans. What is your fitness goal? (e.g., weight loss, muscle gain, endurance)");
                            break;
                        
case "workout plans":
    console.log("Workout Plans input received");
    sendTextMessage("I can help you with customized workout plans. What is your fitness goal? (e.g., weight loss, muscle gain, endurance)");
    break;

case "nutrition tips":
    console.log("Nutrition Tips input received");
    sendTextMessage("Proper nutrition is key to a healthy lifestyle. What kind of nutrition tips are you looking for? (e.g., meal planning, vitamins, or specific diets)");
    break;

case "diet plans":
    console.log("Diet Plans input received");
    sendTextMessage("I can help you with diet plans tailored to your needs. What is your goal? (e.g., weight loss, muscle gain, balanced diet)");
    break;

case "weight loss":
    console.log("Weight Loss input received");
    sendTextMessage("For weight loss, it's important to focus on a calorie deficit, along with a combination of cardio and strength training");
    sendTextMessage("Drink plenty of water and avoid sugary drinks. Consistent exercise and a balanced diet will help you achieve your goals.");
    break;

    case "muscle gain":
        case "Muscle gain":
        case "weight gain":
        case "Weight gain":
            console.log("Muscle Gain or Weight Gain input received");
            sendTextMessage("To gain muscle, you need a diet rich in protein to support muscle growth.");
            sendTextMessage("Here are some foods that will help you build muscle:");
            sendTextMessage("<ul><li>Lean Proteins (Chicken, Beef, Eggs, Fish)</li><li>Whole Grains (Brown Rice, Oats, Whole Wheat Bread)</li><li>Dairy (Greek Yogurt, Cottage Cheese)</li><li>Healthy Fats (Nuts, Peanut Butter, Avocado)</li><li>Vegetables (Broccoli, Sweet Potatoes)</li></ul>");
            sendTextMessage("Remember to eat enough calories to fuel your workouts and muscle recovery!");
            break;
            case "weight":
                case "weight gain":
                case "gain weight":
                    console.log("Weight gain related question received");
                    sendTextMessage("Are you looking to gain weight or lose weight? Please let me know!");
                    break;
                
                case "how to gain weight":
                case "How to gain weight":
                case "weight gain tips":
                    console.log("Weight gain tips received");
                    sendTextMessage("To gain weight, you need to consume more calories than you burn. Focus on nutrient-dense foods, strength training, and muscle-building exercises.");
                    sendTextMessage("Would you like some specific food recommendations for gaining weight?");
                    break;
                
                case "how to lose weight":
                case "How to lose weight":
                case "weight loss tips":
                    console.log("Weight loss tips received");
                    sendTextMessage("To lose weight, a combination of a balanced, calorie-controlled diet and regular exercise is key. Focus on whole foods, including fruits, vegetables, lean proteins, and whole grains.");
                    sendTextMessage("Would you like me to help you with a diet plan or workout routine for weight loss?");
                    break;
                
                case "how to gain muscle":
                case "muscle gain":
                    console.log("Muscle gain related question received");
                    sendTextMessage("To gain muscle, you need to focus on eating protein-rich foods and strength training.");
                    sendTextMessage("Would you like some tips on building muscle, or are you looking for a specific workout plan?");
                    break;
                case "How can I gain weight in a healthy way?":
                    console.log("weight gain in healthy way related question recieved");
                    sendTextMessage("To gain weight healthily, eat nutrient-dense foods like nuts, dairy, lean meats, and whole grains. Increase calorie intake while maintaining a balanced diet and strength training to build muscle.");
                    break;
                case " What are the best foods for weight gain":
                    console.log("best food for weight gain recieved");
                    sendTextMessage("Foods rich in healthy fats, proteins, and complex carbs help with weight gain. Some examples include eggs, avocados, nuts, whole grains, dairy products, fatty fish, and lean meats.");
                    break;
                case "How many calories should I eat daily to gain weight?":
                    console.log("calorie intake for day recieved");
                    sendTextMessage("To gain weight, consume more calories than you burn. A safe range is 300–500 extra calories per day for slow gain or 700–1000 extra calories for faster results.");
                    break;
                case "What are the best exercises to gain muscle mass":
                    console.log("exercises to gain muscle mass recived");
                    sendTextMessage("Strength training exercises such as deadlifts, squats, bench presses, pull-ups, and push-ups help build muscle mass. Combine resistance training with proper nutrition for better results.");
                    break;
                case "Can I gain weight without doing to the gym":
                    console.log("weight gain without going to gym");
                    sendTextMessage("Yes! You can gain weight by eating more calories and doing bodyweight exercises like push-ups, squats, and dips at home. Eating protein-rich foods and staying consistent is key.");
                    break;
                case "How long does it take to see weight gain results":
                    console.log("time peroid to see results in weight gain");
                    sendTextMessage("It depends on metabolism and diet, but most people start seeing results in 4–6 weeks with consistent calorie surplus and strength training.");
                    break;
                case "What are some high-calorie snacks for weight gain":
                    console.log("High-calorie snacks include:");
                    sendTextMessage("Peanut butter & banana smoothie");
                    sendTextMessage("Greek yogurt with nuts");
                    sendTextMessage("Cheese and whole wheat crackers");
                    sendTextMessage("Avocado toast with eggs");
                    sendTextMessage("Trail mix with nuts and dried fruits");
                    break;
                case "Should I take weight gain supplements":
                    console.log("weight gain supplements");
                    sendTextMessage("Weight gain supplements like mass gainers and protein shakes can help if you struggle to eat enough calories. However, it's best to get nutrients from whole foods first.");
                    break;
                case " Is it possible to gain weight fast without getting fat":
                    console.log("fast weight gain with out getting fat");
                    sendTextMessage("Yes! Focus on strength training and eating clean foods with a calorie surplus. Avoid excess junk food and prioritize protein intake to gain lean muscle.");
                    break;
                case "How much protein do I need for muscle gain":
                    console.log("A good guideline is 1.2–2.2 grams of protein per kilogram of body weight per day for muscle growth. Foods like chicken, eggs, fish, and lentils help meet this need.");
                    break;
                case "What is the best way to lose weight fast":
                    console.log("best ways to lose weight");
                    sendTextMessage("The best way is to combine a calorie deficit diet, strength training, and cardio exercises. Avoid processed foods, eat protein-rich meals, and stay consistent.");
                    break;
                case "How many calories should I eat to lose weight":
                    console.log("calorie intake to lose weight");
                    sendTextMessage("A safe weight loss goal is 500–750 calories less than your maintenance calories per day, leading to a weight loss of 0.5–1 kg per week.");
                    break;
                case "What are the best exercises for weight loss":
                    console.log("weight loss exercises");
                    sendTextMessage("Cardio exercises like running, cycling, swimming, and jumping rope are great for burning calories. Strength training also helps by increasing metabolism.");
                    break;
                case "Can I lose weight without exercise":
                    console.log("weight loss wiithout exercise");
                    sendTextMessage("Yes! Weight loss is mainly about a calorie deficit, so diet plays a crucial role. However, exercise helps maintain muscle mass and improves overall health.");
                    break;
                case "What is intermittent fasting, and does it help with weight loss":
                    console.log("intermittent fasting");
                    sendTextMessage("Intermittent fasting (IF) involves cycling between eating and fasting periods (e.g., 16 hours fasting, 8-hour eating window). It can help reduce calorie intake and improve metabolism.");
                    break;
                case "How to lose belly fat specifically":
                case "how to lose fat":
                case "fat loss":
                case "fat loss tips":
                case "diet for lose weight ":
                    console.log("Fat loss tips received");
                    sendTextMessage("Fat loss requires a combination of a healthy diet, including a calorie deficit, and regular cardio and strength exercises.");
                    sendTextMessage("I can help you with a plan for fat loss, if you like!");
                    break;
                case "Are weight loss supplements effective":
                    console.log("weight loss supplements");
                    sendTextMessage("Some supplements like green tea extract, protein powder, and fiber supplements can support weight loss, but they are not a substitute for a proper diet and exercise.");
                    break;
                case "What are some healthy foods for weight loss":
                case "healthy food for weight loss":
                case "weight loss foods":
                case "foods for weight loss":
                case "weight loss healthy food":
                
                    console.log("Foods that aid weight loss include:");
                    sendTextMessage("Leafy greens (spinach, kale)");
                    sendTextMessage("Lean proteins (chicken, fish, tofu)");
                    sendTextMessage("Whole grains (brown rice, quinoa)");
                    sendTextMessage("Healthy fats (avocados, nuts)");
                    sendTextMessage("Fruits (berries, apples)");
                    break;
                case "How much water should I drink to help with weight loss":
                    console.log("water intake for weight loss");
                    sendTextMessage("Drinking 2–3 liters (8–12 cups) of water per day helps boost metabolism and reduce hunger, aiding in weight loss");
                    break;
                case "How do I prevent muscle loss while losing weight":
                case "muscle mass prevention":
                case "how can i prevent muscle loss": 
                    console.log("prevention of muscle loss");
                    sendTextMessage("To prevent muscle loss, eat enough protein, lift weights regularly, and avoid extreme calorie deficits. Aim for at least 1.2g of protein per kg of body weight daily.");
                    break;
                case "What is the best time to work out":
                case "best time to workouts":
                case "at what time do i need to do workout":
                    console.log("best work out time");
                    sendTextMessage("The best time depends on personal preference. Morning workouts boost metabolism, while evening workouts may enhance performance. Consistency is key!");
                    break;
                case "How often should I work out for the best results":
                case "best result time ":
                case "time period to see best results":
                    console.log("work out frequency for best results");
                    sendTextMessage("For general fitness, aim for 4–5 workout sessions per week. Strength training 3–4 times a week and cardio 2–3 times a week is ideal.");
                    break;
                case "What are the best home workouts for fitness":
                case "home workouts for fitness":
                case "home fitness":
                case "fitness in home":
                case "home workouts":
                case "workouts in home":
                case "workouts wchich is suitable in home":
                

                    console.log("best home workouts");
                    sendTextMessage("Great home workouts include push-ups, squats, burpees, lunges, planks, and jumping jacks. You can also use resistance bands for added intensity.");
                    break;
                case "How do I track my fitness progress":
                case "fitness traking":
                case "how to track my fitness":
                case "track fitness":
                
                    console.log("Track your progress by:");
                    sendTextMessage("Taking body measurements");
                    sendTextMessage("Tracking weight changes");
                    sendTextMessage("Noting workout performance improvements");
                    sendTextMessage("Using fitness apps or wearable devices");
                    break;
                case "What is the importance of rest and recovery":
                case "do we need to take rest":
                case " why do we need to recovery":
                case "do rest and recovery plays an important role in workout ":
                
                    console.log("rest and recovery importance");
                    sendTextMessage("Rest allows muscles to repair and grow. Overtraining can lead to injuries, so ensure at least one full rest day per week.");
                    break;
                case "Should I do cardio or weightlifting first":
                case "cardio or weightlifting":
                case "which is best among cardio and weightlifting":
                case "is cardio is more effective when compared to weightlifting":
                
                    console.log("It depends on your goal:");
                    sendTextMessage("For fat loss, do weightlifting first, then cardio");
                    sendTextMessage("For endurance, do cardio first");
                    sendTextMessage("For muscle gain, prioritize weightlifting.");
                    break;
                case "How do I increase my stamina and endurance":
                case "how to increase stamina":
                case "how to increase endurance":
                    console.log("increase stamina and endurance");
                    sendTextMessage("Improve stamina by gradually increasing workout intensity, doing HIIT (High-Intensity Interval Training), and staying consistent with exercise.");
                    break;
                case " Can I work out every day":
                case "workout interval":
                case "is every day workout is important":
                    console.log("workout interval");
                    sendTextMessage("Yes, but it's essential to have rest days or alternate between high-intensity and low-intensity workouts to prevent overtraining.");
                    break;
                case "How long should my workouts be":
                case "workout period":
                case "good workout period":
                case "time table for workout":
                case "time table":
                case "how long should my workout lasts":
                    console.log("workout period");
                    sendTextMessage("Most workouts should be 30–60 minutes long, depending on intensity. Strength training sessions last 45–60 minutes, while cardio can be 20–40 minutes.");
                    break;
                case "What are the best post-workout meals":
                case "meals after workout":
                case "post workout meals":
                case "diet for workout":
                    console.log("Good post-workout meals include:");
                    sendTextMessage("Chicken with brown rice");
                    sendTextMessage("Greek yogurt with fruit");
                    sendTextMessage("Protein shake with a banana");
                    sendTextMessage("Oatmeal with nuts and honey");
                    break;
                
                case "weight loss":
                case "weight loss plan":
                case "how to lose weight":
                case "weight loss tips":
                    case "how to loss weight":    
                    console.log("Weight loss related question received");
                    sendTextMessage("Losing weight effectively requires focusing on healthy eating, exercise, and sustainable habits.");
                    sendTextMessage("Would you like a detailed weight loss plan?");
                    break;
                
              
                
case "endurance":
    console.log("Endurance input received");
    sendTextMessage("For building endurance, a combination of cardio and consistent strength training works well. Would you like a personalized endurance workout plan?");
    sendTextMessage("I can also offer nutrition tips to improve your stamina and energy for longer workouts!");
    break;    
                        
 case "nutrition tips":
case "nutrition values":
console.log("Nutrition Tips input received");
sendTextMessage("Proper nutrition is key to a healthy lifestyle. What kind of nutrition tips are you looking for? (e.g., meal planning, vitamins, or specific diets)");
break;
                        
                        case "diet plans":
                            console.log("Diet Plans input received");
                            sendTextMessage("I can help you with diet plans tailored to your needs. What is your goal? (e.g., weight loss, muscle gain, balanced diet)");
                            break;
                        
        
        case "github":
            sendTextMessage("we will add this soon!! sorry for your inconvenience.<br>Send 'help' to know more about usage.");
            break;
        case "linkedin":
            sendTextMessage("we will add this soon!! sorry for your inconvenience.<br>Send 'help' to know more about usage.");
            break;

        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;

        case "thank":
        case "thankyou":
        case "Tq":
            sendTextMessage("You're welcome!! If you need any more assistance. I'm here to help!");
            break;

        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");},2000);
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
// Dataset for fitness workout plans
var fitnessWorkoutDataset = [
    {
        id: 1,
        workoutName: "Full Body Strength Training",
        difficulty: "Intermediate",
        duration: "45 minutes",
        description: "A complete full-body workout that focuses on strength building using compound exercises.",
        equipment: "Dumbbells, Barbell, Resistance Bands",
        image: "full-body-strength.jpg",
        planLink: "workout_plans/full_body_strength.pdf"
    },
    {
        id: 2,
        workoutName: "Core & Abs Workout",
        difficulty: "Beginner",
        duration: "30 minutes",
        description: "Target your core muscles with a series of abdominal exercises for building strength and endurance.",
        equipment: "Mat",
        image: "core-abs-workout.jpg",
        planLink: "workout_plans/core_abs_workout.pdf"
    },
    {
        id: 3,
        workoutName: "Cardio Fat Burn",
        difficulty: "Advanced",
        duration: "60 minutes",
        description: "High-intensity cardio routine to burn fat and improve cardiovascular health.",
        equipment: "Treadmill, Jump Rope",
        image: "cardio-fat-burn.jpg",
        planLink: "workout_plans/cardio_fat_burn.pdf"
    }
];

// Dataset for health tips
var fitnessHealthTipsDataset = [
    {
        tipId: 1,
        title: "Hydrate Well",
        description: "Drinking water before, during, and after your workout helps maintain energy and prevents dehydration."
    },
    {
        tipId: 2,
        title: "Warm Up Before Exercise",
        description: "Proper warm-up prepares your muscles for exercise and reduces the risk of injury."
    },
    {
        tipId: 3,
        title: "Balanced Diet",
        description: "Ensure you have a balanced diet with protein, carbs, and healthy fats to support muscle growth and recovery."
    }
];

// Function to retrieve fitness workout plan data
function getFitnessWorkoutData() {
    return fitnessWorkoutDataset.map(workout => {
        return `<div class='workout'>
                    <h4>${workout.workoutName}</h4>
                    <p><strong>Difficulty:</strong> ${workout.difficulty}</p>
                    <p><strong>Duration:</strong> ${workout.duration}</p>
                    <p><strong>Equipment:</strong> ${workout.equipment}</p>
                    <p>${workout.description}</p>
                    <a href='${workout.planLink}' download>
                        <button>Download Workout Plan</button>
                    </a>
                </div>`;
    }).join('');
}

// Function to retrieve fitness health tips
function getFitnessHealthTips() {
    return fitnessHealthTipsDataset.map(tip => {
        return `<div class='health-tip'>
                    <h5>${tip.title}</h5>
                    <p>${tip.description}</p>
                </div>`;
    }).join('');
}
