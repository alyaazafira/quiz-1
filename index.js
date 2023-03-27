//exercise string and number
let data1 = true
let data2 = "1.25"
//console.log(data1, typeof data1)
//console.log(data2, typeof data2)

let data3 = data1.toString()+data2
//console.log(data3, typeof data3)


// array
let data = ["one", 2, true]
//console.log(data[0], typeof data[0])


//object
let user = {
    name: "alyaa",
    faculty: "fkekk",
    phone: "1234"
}
//console.log(user.faculty)

user = {
    name: "alyaa",
    faculty: "fkekk",
    phone: ["1234", "5678"]          //array
}
//console.log(user.phone[0])          // dalam object ada array


user = {
    name: "alyaa",
    faculty: "fkekk",
    phone: { office: "1234", mobile: "5678"}          //object
}
console.log(user.phone.mobile)                         //dalam object ada object
console.log(user.phone.home)  