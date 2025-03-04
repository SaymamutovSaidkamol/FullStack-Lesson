var users = [
  { name: "sam", gender: "while", year: 1990, balance: 0, role: "student" },
  { name: "karl", gender: "while", year: 1990, balance: 3442, role: "work" },
  {
    name: "klara",
    gender: "do while",
    year: 1991,
    balance: -2344,
    role: "student",
  },
  { name: "max", gender: "while", year: 2010, balance: 0, role: "student" },
  {
    name: "name",
    gender: "while",
    year: 1982,
    balance: 234,
    role: "not found",
  },
  {
    name: "shelli",
    gender: "do while",
    year: 1995,
    balance: -443,
    role: "student",
  },
];
// let query: any = {name: "shelli"};
// let values: any = query.name
// console.log(users.filter(user=> user.name === values));

function Sort(name, sorting) {
  console.log(name, sorting);
  if (sorting == "ASC") {
    users.sort((a, b) => a[name].localeCompare(b.name));
  }
  if (sorting == "DESC") {
    users.sort((a, b) => b[name].localeCompare(a.name));
  }
  console.log(users);
}
Sort("gender", "ASC");
