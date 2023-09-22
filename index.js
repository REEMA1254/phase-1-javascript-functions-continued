function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  function mondayWork(job = "go to the office") {
    return `This Monday, I have to ${job}.`;
  }

  function wrapAdjective(visualFlair = "*") {
    return function (adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }

  
