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
    // for (key in this)
  }
}


friends.childbirth('Kate', 'Wendy');
friends.childbirth('Kate', 'Barny');
friends.childbirth('Kate', 'Bob');
friends.employment('Tom', 'Writer');
friends.employment('Luke', 'Designer');
console.log(friends);
friends.dismissal('Luke');
console.log(friends);

// friends = {
//   Kate : {
//     spouse: ‘Mike’,
//     children: [‘Sara’, ‘Sam’],
//     job: ‘developer’,
//   },
//   Tom: {},
//   Din: {},
//   Anna: {},
//   Luke: {}
//   };

// В модуле должны быть методы:
// регистрация брака(добавляется запись о супруге) +
// развод(убирается запись о супруге) +
// рождение ребенка(добавляется запись о ребенке, несколько детей представляются в виде массива) +
// устройство на работу(добавляется запись о профессии) +
// увольнение(убирается запись о профессии) +
// способ вывести список всех женатых
// способ вывести всех с детьми
// способ вывести всех с работой


// function showProps(obj, objName) {
//   var result = "";
//   for (var i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       result += objName + "." + i + " = " + obj[i] + "\n";
//     }
//   }
//   return result;
// }

// console.log(showProps(friends, "friends"));