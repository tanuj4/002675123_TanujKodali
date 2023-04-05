// app/routes.js
// grab the nerd model we just created;
const helper = require("./services/helper");

module.exports = function (app) {
  // server routes
  // handle things like api calls
  // authentication routes
  // sample api route

  app.post("/user/create", async (req, res) => {
    try {
      const { fullname,password,email } = req.body;
      
      let validation = await helper.uservalidate(req.body); 
      if(validation) return res.status(400).send(validation.details[0].message);

      if (await helper.userExist(email)) return res.status(400).send("User already registered.");

      let result = await helper.usersave( fullname,password,email);

      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });

  app.put('/user/edit/', async (req, res) => {
    try {
      const email  = req.query.email;
      const {fullname,password} = req.body;

      let validation = await helper.upadteuservalidate(req.body) 
      if(validation) return res.status(400).send(validation.details[0].message);
      
      if (! await helper.userExist(email)) return res.status(404).send("User not found.");
      
      let result = await helper.userupdate(fullname,email,password);

      res.send(result);

    } catch (err) {
      res.send(err);
    }
  });

  app.delete('/user/delete', async (req, res) => {
    try {
      const email  = req.query.email;
      
      if (! await helper.userExist(email)) return res.status(404).send("User not found.");
      
      let result = await helper.userdelete(email);

      res.send(result);

    } catch (err) {
      res.send(err);
    }
  });
  

  app.get("/user/getAll", async (req, res)=> {
    try {
      let users = await helper.usergetAll();
      res.send(users);
    } catch (error) {
      res.send(err);
    }
  });

  app.get("/user/Login", async (req, res)=> {
    try {

      const email  = req.query.email;
      const password  = req.query.password;

      if (!(email && password)) {
        return res.status(400).send({name:"form",message:"All input is required"});
      }

      if (! await helper.userExist(email)) return res.status(404).send({name:"username",message:"User not found"});

      if(! await helper.usercheck(email,password)) return res.status(404).send({name:"password",message:"Password Invalid"});
    
      res.status(200).send({name:"",message:"none"});
    } catch (error) {
      res.send(error);
    }
  });
};





