const item={
    "rahul":true,
    "roshan":false,
    "kumar": {
       "name" : [1,2,3,4,5]
    },
    "rohit":undefined
}
// console.log(item.kumar.name[4])

item.roshan = 30;
item.city = "delhi"

delete item.city
console.log(item.city);
