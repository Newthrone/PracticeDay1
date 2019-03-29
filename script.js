function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

friends = {
  Kate: {},
  Tom: {},
  Din: {},
  Anna: {},
  Luke: {},
  marriage: function(friend, spouse) {return this[friend].spouse = spouse},
  divorce: function(friend) {return delete this[friend].spouse},
  childbirth: function(friend, child) {
    /* if there are no children  */
    if(!('children' in this[friend])) {return this[friend].children = child};

    /* if more than one child */
    if(getClass(this[friend].children) == 'Array') {return this[friend].children.push(child)};

    /* if one child */
    let firstChild = this[friend].children;
    this[friend].children = [];
    this[friend].children.push(firstChild);
    firstChild = null;
    return this[friend].children.push(child);
  },
  employment: function(friend, job) {return this[friend].job = job},
  dismissal: function(friend) {return delete this[friend].job},
  haveChild: function() {
    let haveChild = [];
    for (key in this) {
      if(this[key].children) haveChild.push(key);
    }
    return haveChild;
  },
  isMarried: function() {
    let married = [];
    for (key in this) {
      if(this[key].spouse) married.push(key);
    }
    return married;
  },
  working: function() {
    let isWorking = [];
    for (key in this) {
      if(this[key].job) isWorking.push(key);
    }
    return isWorking;
  }
};

Object.defineProperty(friends, "marriage", {enumerable: false});
Object.defineProperty(friends, "divorce", {enumerable: false});
Object.defineProperty(friends, "childbirth", {enumerable: false});
Object.defineProperty(friends, "employment", {enumerable: false});
Object.defineProperty(friends, "dismissal", {enumerable: false});
Object.defineProperty(friends, "haveChild", {enumerable: false});


friends.childbirth('Kate', 'Wendy');
friends.childbirth('Kate', 'Barny');
friends.childbirth('Kate', 'Bob');
friends.childbirth('Anna', 'Dilan');
friends.employment('Tom', 'Writer');
friends.employment('Luke', 'Designer');
friends.dismissal('Luke');
friends.marriage('Luke', 'Paris');
/* friends.marriage('Julia', 'Alex');  - ошибка. свойства нет, и обработки ошибок нет*/
console.log(friends);
console.log(friends.haveChild());
console.log(friends.isMarried());
console.log(friends.working());