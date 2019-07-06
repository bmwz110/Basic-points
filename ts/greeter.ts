// class User {
//   fullName: string
//   firstName: string
//   lastName: string

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = firstName + ' ' + lastName
//   }
// }

// 接口，用于检查类型定义
interface Person {
  firstName: string
  lastName: string
}

function greeter(person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user:Person = {
  firstName: 'Chao',
  lastName: 'Liu'
}

console.log(greeter(user))