const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please check your data, no name"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    }
)

const personSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
    }
)


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit(
    {
        rating: 10,
        review: "Pretty solid as a fruit."
    }
)

// To inert all use Fruit.insertMany([array of names], (err))


const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 33
})

Fruit.find((err, fruits) => {
    if(err) {
        console.log(err)
    } else {

       
        fruits.forEach((fruit) => {
            console.log(fruit.name)
        })
    
    }

    mongoose.connection.close()
})

// person.save()

// fruit.save();



//Update 

// Fruit.updateOne({_id: "5f9866ff767cf747b59bead2"}, {name: "Berry"}, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Updated the document")
//     }
// } )

// Fruit.deleteOne({name: "Peach"},(err) => {
//     if (err) {
//         console.log (err) }
//         else {
//             console.log('peach deleted')
//         }
//     }
// )