const express=require("express"),
app=express();
require("dotenv").config()
// port=8080;
app.get('/*', (req, res) => {
res.send("hello world")
})
const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`app is listen to ${PORT}`)
})


