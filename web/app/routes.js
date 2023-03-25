// app/routes.js
// grab the nerd model we just created
var Sample = require("./models/user");
const path = require("path");
const { brotliDecompressSync } = require("zlib");

module.exports = function (app) {
  // server routes
  // handle things like api calls
  // authentication routes
  // sample api route

  app.get("/user/getAll", async (req, res) => {
    try {
      const samples = await Sample.find({});
      res.json(samples);
      console.log(samples);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post("/user/create", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
            if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'All the details are required!! Please enter fullname,email and password' });
        }

        const existingUser = await Sample.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already taken!!' });
        }

        if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit' });
        }

      const rec = new Sample({ fullname, email, password });
      const result = await rec.save();
    //   console.log(result);
      res.json({ message: 'User account is created successfuly' });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  });



app.put('/user/edit', async (req, res) => {
    try{
    const { email, fullname, password } = req.body;
  
    if (!fullname || !password) {
      return res.status(400).json({ message: 'Full name and password are required' });
    }
  
    const user = await Sample.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    else if(user.email != email){
        return res.status(404).json({ message: 'Email cannot be updated' });
    }
  
    user.fullname = fullname;
    user.password = password;
    await user.save();
  
    res.json({ message: 'User updated successfully' });
} catch (err) {
          console.log(err);
          res.status(400).send({ error: err.message });
        
}
  });
  
  
  app.delete('/user/delete', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Please enter the Email' });
      }
    const user = await Sample.findOne({email});
    if (!user) {
      return res.status(404).json({ message: 'User is not found' });
    }
  
    await user.deleteOne();  
    res.json({ message: 'User is successfully deleted' });
  });
  



  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)
  // frontend routes =========================================================
  // route to handle all angular requests
//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/views/index.html"));
//   });
};