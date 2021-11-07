const express=require("express"),
app=express(),
port=8080;
app.get('/*', (req, res) => {
res.send("hello world")
})
app.listen(port, () => {
  console.log(`app is listen to ${port}`)
})


