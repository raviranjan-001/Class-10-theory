var student_score = [95,85,87,98,87];

function score_average(){
  var total = student_score[0]+student_score[1]+student_score[2]+student_score[3]+student_score[4];
  var avg = total/student_score.length;
  console.log(avg);
}

var weights = [40,45,65,87,21];

function weights_average(){
  var total = weights[0]+weights[1]+weights[2]+weights[3]+weights[4]
  var avg = total/weights.length;
  console.log(avg);
}

function setup() {
  createCanvas(400, 400);
  score_average();
  weights_average();
}

function draw() {
  background(220);
}