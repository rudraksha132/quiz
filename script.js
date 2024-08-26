const qaPairs = [
  ["What is the smallest unit of life?", "The cell"],
  ["What are the three states of matter?", "Solid, liquid, gas"],
  ["Name the gas essential for photosynthesis.", "Carbon dioxide"],
  ["What is the main source of energy for the Earth?", "The Sun"],
  ["Which vitamin is produced in the skin when exposed to sunlight?", "Vitamin D"],
  ["What are the building blocks of proteins?", "Amino acids"],
  ["What is the chemical symbol for water?", "H₂O"],
  ["What is the process of converting solid directly into gas called?", "Sublimation"],
  ["What is the pH level of pure water?", "7 (neutral)"],
  ["Which part of the plant conducts photosynthesis?", "The leaves"],
  ["What is the force that pulls objects towards the center of the Earth?", "Gravity"],
  ["What is the unit of electrical resistance?", "Ohm"],
  ["Who discovered the law of gravity?", "Sir Isaac Newton"],
  ["What is the speed of light in a vacuum?", "Approximately 299,792 kilometers per second"],
  ["Name the device used to measure temperature.", "Thermometer"],
  ["What is the formula for calculating speed?", "Speed = Distance / Time"],
  ["What type of energy is stored in a stretched rubber band?", "Elastic potential energy"],
  ["What phenomenon causes rainbows?", "Refraction and dispersion of light"],
  ["What is the unit of force?", "Newton"],
  ["What is the term for materials that do not allow electricity to pass through them?", "Insulators"],
  ["What is the chemical formula for carbon dioxide?", "CO₂"],
  ["What element is most abundant in the Earth's crust?", "Oxygen"],
  ["What is the name of the reaction where an acid and a base neutralize each other?", "Neutralization reaction"],
  ["What is the chemical symbol for gold?", "Au"],
  ["Who is known as the father of modern chemistry?", "Antoine Lavoisier"],
  ["What is the atomic number of oxygen?", "8"],
  ["What gas is released during the process of respiration?", "Carbon dioxide"],
  ["What is the pH range of acids?", "0 to 6.9"],
  ["What is the most common element in the universe?", "Hydrogen"],
  ["Name the process of separating salt from water through evaporation.", "Distillation"],
  ["What is the powerhouse of the cell?", "Mitochondria"],
  ["What is the largest organ in the human body?", "Skin"],
  ["Name the process by which plants make their food.", "Photosynthesis"],
  ["What is the basic structural unit of the nervous system?", "Neuron"],
  ["What is the function of red blood cells?", "To carry oxygen to the body’s tissues"],
  ["Which organ is responsible for filtering blood in the human body?", "Kidneys"],
  ["What is the largest bone in the human body?", "Femur (thigh bone)"],
  ["What is the green pigment in plants called?", "Chlorophyll"],
  ["Name the process by which a caterpillar turns into a butterfly.", "Metamorphosis"],
  ["What is the main function of white blood cells?", "To fight infections"],
  ["What is the outermost layer of the Earth called?", "Crust"],
  ["What are rocks that form from cooling magma called?", "Igneous rocks"],
  ["Name the process by which rocks are broken down by wind and water.", "Weathering"],
  ["What is the most common gas in the Earth's atmosphere?", "Nitrogen"],
  ["What type of rock is limestone?", "Sedimentary rock"],
  ["What natural phenomenon causes earthquakes?", "Movement of tectonic plates"],
  ["What is the term for molten rock beneath the Earth's surface?", "Magma"],
  ["What is the name of the layer of gases surrounding the Earth?", "Atmosphere"],
  ["What is the study of weather called?", "Meteorology"],
  ["What are the three types of rocks?", "Igneous, sedimentary, metamorphic"],
  ["What is the nearest planet to the Sun?", "Mercury"],
  ["What is the largest planet in our solar system?", "Jupiter"],
  ["What is the name of our galaxy?", "The Milky Way"],
  ["Who was the first person to walk on the Moon?", "Neil Armstrong"],
  ["What is the term for a year with 366 days?", "Leap year"],
  ["What is a comet made of?", "Ice, dust, and rocky particles"],
  ["What is the term for the spinning of Earth on its axis?", "Rotation"],
  ["Which planet is known as the Red Planet?", "Mars"],
  ["What is the name of the first artificial satellite launched into space?", "Sputnik 1"],
  ["What is the distance between the Earth and the Sun called?", "Astronomical Unit (AU)"],
  ["Who invented the telephone?", "Alexander Graham Bell"],
  ["What does CPU stand for in computers?", "Central Processing Unit"],
  ["What is the name of the first programmable computer?", "ENIAC (Electronic Numerical Integrator and Computer)"],
  ["What is the term for a machine that performs tasks automatically?", "Robot"],
  ["What is the full form of Wi-Fi?", "Wireless Fidelity"],
  ["Who is known as the father of the Internet?", "Vint Cerf"],
  ["What does the abbreviation 'AI' stand for in technology?", "Artificial Intelligence"],
  ["What is the primary purpose of a search engine?", "To find information on the internet"],
  ["What does the term 'URL' stand for?", "Uniform Resource Locator"],
  ["Who is credited with inventing the World Wide Web?", "Tim Berners-Lee"],
  ["Who invented the light bulb?", "Thomas Edison"],
  ["What was the first antibiotic discovered?", "Penicillin"],
  ["Who discovered the electron?", "J.J. Thomson"],
  ["What is the invention of Johannes Gutenberg?", "The printing press"],
  ["Who invented the steam engine?", "James Watt"],
  ["What did Alexander Fleming discover?", "Penicillin"],
  ["What is the name of the first vaccine developed?", "Smallpox vaccine"],
  ["Who discovered the structure of DNA?", "James Watson and Francis Crick"],
  ["What is the name of the first successful human heart transplant?", "Performed by Dr. Christiaan Barnard"],
  ["Who is known for the theory of relativity?", "Albert Einstein"],
  ["What is the term for immunity acquired after recovering from a disease?", "Natural immunity"],
  ["What is the main organ of the circulatory system?", "The heart"],
  ["Which nutrient is essential for strong bones and teeth?", "Calcium"],
  ["What is the common name for the disease caused by a deficiency of Vitamin C?", "Scurvy"],
  ["What is the term for the body's defense against harmful organisms?", "Immune system"],
  ["Which organ is affected by hepatitis?", "Liver"],
  ["What is the study of the human mind and behavior called?", "Psychology"],
  ["What is the medical term for high blood pressure?", "Hypertension"],
  ["Which blood group is known as the universal donor?", "O negative (O-)"],
  ["What is the function of the liver in the human body?", "The liver detoxifies chemicals, metabolizes drugs, produces bile, and processes nutrients from the digestive tract."],
  ["What is the process by which plants release oxygen into the atmosphere?", "Photosynthesis"],
  ["What is the main cause of global warming?", "The increase in greenhouse gases, particularly carbon dioxide, in the atmosphere."],
  ["What is the term for the variety of life on Earth?", "Biodiversity"],
  ["What gas is primarily responsible for the greenhouse effect?", "Carbon dioxide (CO₂)"],
  ["What is the name of the layer that protects Earth from harmful UV rays?", "The ozone layer"],
  ["What is the term for using resources in a way that does not deplete them?", "Sustainability"],
  ["What is the process of recycling?", "Recycling is the process of converting waste materials into new materials and objects."],
  ["What is the main source of pollution in the oceans?", "Plastic waste"],
  ["What is the term for an organism that breaks down dead material?", "Decomposer"],
  ["What is the purpose of wildlife conservation?", "The purpose of wildlife conservation is to protect species and their habitats, ensuring biodiversity and ecosystem health for future generations."]
];

let score = 0;
let currentQuestionIndex = 0;
let questionsOrder = [];
let attemptsLeft = 1;

function startQuiz() {
    const mode = document.getElementById('mode').value;
    const attemptsOption = document.getElementById('attempts').value;
    
    score = 0;
    currentQuestionIndex = 0;

    if (attemptsOption === "multiple") {
        attemptsLeft = Infinity;
    } else {
        attemptsLeft = 1;
    }

    if (mode === "shuffled") {
        questionsOrder = qaPairs.sort(() => Math.random() - 0.5);
    } else {
        questionsOrder = [...qaPairs];
    }

    // Hide the setup and show the quiz content
    document.getElementById('setup').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');

    displayQuestion();

    // Add an event listener for the Enter key on the answer input field
    document.getElementById('user-answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitAnswer();
        }
    });
}

function displayQuestion() {
    document.getElementById('question').textContent = questionsOrder[currentQuestionIndex][0];
    document.getElementById('user-answer').value = '';
}

function submitAnswer() {
    let userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();

    // Extract the correct answer, ignoring anything in brackets
    let correctAnswer = questionsOrder[currentQuestionIndex][1].split('(')[0].trim().toLowerCase();

    // If the correct answer starts with "the", remove it
    if (correctAnswer.startsWith('the ')) {
        correctAnswer = correctAnswer.replace(/^the\s+/i, '').trim();
    }

    // If the user's answer starts with "the", remove it
    if (userAnswer.startsWith('the ')) {
        userAnswer = userAnswer.replace(/^the\s+/i, '').trim();
    }

    if (userAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong. The correct answer is ${questionsOrder[currentQuestionIndex][1]}.`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questionsOrder.length) {
        displayQuestion();
    } else if (attemptsLeft > 1) {
        attemptsLeft--;
        alert(`You've completed the quiz! Your score is ${score} out of ${questionsOrder.length}. Restarting...`);
        startQuiz();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    // Calculate the number of questions attempted
    const questionsAttempted = currentQuestionIndex;

    // Hide the question and answer input
    document.getElementById('quiz-content').innerHTML = `
        <p>Quiz ended.</p>
        <p>Your progress:</p>
        <p>Answered ${questionsAttempted} out of ${questionsOrder.length} questions.</p>
        <p>Your score is ${score} out of ${questionsAttempted}.</p>
    `;
}
