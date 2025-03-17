function magic8ball() {
  let question = prompt("Ask a Yes, or No question: ");

  console.log("Question: " + question);
  // we will use math.random for picking random numbers..
  // then math.floor to emake sure the numbers are whole numbers.

  let randomNumber = Math.floor(Math.random() * 8) + 1;
  let answer;
  switch (randomNumber) {
    case 1:
      answer = "Ask me later.";
      break;
    case 2:
      answer = "Go with the your conscience.";
      break;
    case 3:
      answer = "Yes definitely!.";
      break;
    case 4:
      answer = " No, sit your Ass!.";
      break;
    case 5:
      answer = "Outlook not so good";
      break;
    case 6:
      answer = "Better not to tell you.";
      break;
    case 7:
      answer = "Signs points to yes.";
      break;
    case 8:
      answer = "call a friend and ask.";
      break;
  }
  console.log(answer);
  alert(answer);
}
magic8ball();
