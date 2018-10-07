let jsonObject = {
    'employees': [
        {
            'firstName': 'John',
            'lastName': 'Doe',
            'interests': ["sport", "programming"]
        },
        {
            'firstName': 'Anna',
            'lastName': 'Smith'
        },
        {
            'firstName': 'Peter',
            'lastName': 'Jones'
        }
]
}

let pierwszaOsoba = `${jsonObject.employees[0].firstName} ${jsonObject.employees[0].lastName} interesuje się ${jsonObject.employees[0].interests}`

console.log(pierwszaOsoba);