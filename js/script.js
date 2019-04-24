// Task 1

function tickets(queue) {
  const obj = {
    bill25: 0,
    bill50: 0,
  };

  if (!Array.isArray(queue) || !queue.length) {
    return 'Incorect input data';
  }

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] == 25) {
      obj.bill25 += 1;
    } else if (queue[i] == 50) {
      if (obj.bill25 > 0) {
        obj.bill25 -= 1;
        obj.bill50 += 1;
      } else {
        return 'No';
      }
    } else if (queue[i] == 100) {
      if (obj.bill50 > 0 && obj.bill25 > 0) {
        obj.bill25 -= 1;
        obj.bill50 -= 1;
      } else if (obj.bill25 > 2) {
        obj.bill25 -= 3;
      } else {
        return 'No';
      }
    } else {
      return 'Incorect input data';
    }
  }

  return 'Yes';
}

tickets([25, 25, 50]);
tickets([25, 100]);
tickets([25, 25, 50, 100]);
tickets([25, 50, 100]);
tickets(['25', '25', '50', '100']);
tickets(['25', '50', '100']);
tickets(['25', '25', '25', '100']);
tickets(['']);


// Task 2

function getSum(num1, num2) {
  let finalResult = '';
  const longerNum = Math.max(num1.length, num2.length);
  let carry = false;

  for (let i = 0; i < longerNum; i++) {
    let result;
    const num1rev = num1.split('').reverse();
    const num2rev = num2.split('').reverse();

    if (num1rev[i] && num2rev[i]) {
      result = parseInt(num1rev[i]) + parseInt(num2rev[i]);
    } else if (num1rev[i] && !num2rev[i]) {
      result = parseInt(num1rev[i]);
    } else if (!num1rev[i] && num2rev[i]) {
      result = parseInt(num2rev[i]);
    }

    if (carry) {
      result += 1;
      carry = false;
    }

    if (result >= 10) {
      carry = true;
      finalResult += result.toString()[1];
    } else {
      finalResult += result.toString();
    }
  }

  finalResult = finalResult.split('').reverse().join('');

  if (carry) {
    finalResult = '1' + finalResult;
  }

  return finalResult;
}

getSum('123', '324');
getSum('111111', '222222');
getSum('11111', '222222');
getSum('99', '99');


// Task 3

const listOfPosts = [
  {
    id: 1,
    post: 'somepost1',
    title: 'title',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'somecomment1',
        title: 'title',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'somecomment2',
        title: 'title',
        author: 'Uncle',
      },
    ],
  },
  {
    id: 2,
    post: 'somepost2',
    title: 'title',
    author: 'Ivanov',
    comments: [
      {
        id: 2.1,
        comment: 'somecomment1',
        title: 'title',
        author: 'Rimus',
      },
      {
        id: 2.2,
        comment: 'somecomment2',
        title: 'title',
        author: 'Uncle',
      },
      {
        id: 2.3,
        comment: 'somecomment3',
        title: 'title',
        author: 'Rimus',
      },
    ],
  },
  {
    id: 3,
    post: 'somepost3',
    title: 'title',
    author: 'Rimus',
  },
  {
    id: 4,
    post: 'somepost4',
    title: 'title',
    author: 'Uncle',
  },
];

function getQuntityPostsByAuthor(listOfPosts, author) {
  const result = {
    post: 0,
    comment: 0,
  };

  for (i = 0; i < listOfPosts.length; i++) {
    if (listOfPosts[i].author === author) {
      result.post += 1;
    }
    if (listOfPosts[i].comments) {
      for (j = 0; j < listOfPosts[i].comments.length; j++) {
        if (listOfPosts[i].comments[j].author === author) {
          result.comment += 1;
        }
      }
    }
  }

  return result;
}

getQuntityPostsByAuthor(listOfPosts, 'Rimus');
