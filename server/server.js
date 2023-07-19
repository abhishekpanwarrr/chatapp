import express from "express"
const app = express()

app.listen(8000,() => {
    console.log("listing on port ", 8000)
})

app.get('/', (req, res) => {
    res.json("Welcome")
})
app.post("/register", (req, res) => {

})