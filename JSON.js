let user7 = {
  name: "Erik",
  age: 29,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user7, null, 2));


let room = {
  number: 38,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

console.log( JSON.stringify(room) ); // 38

console.log( JSON.stringify(meetup) );


let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1


let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2021-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2020-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( schedule.meetups[1].date.getDate() ); // 18
