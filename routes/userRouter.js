
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");



userRouter.get("/", (req, res, next) => {
  User.find((err, allUsers) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.send(allUsers);
  });
});


userRouter.post("/", (req, res, next) => {
  const createdUser = req.body;
  const newUser = new User(createdUser);
  newUser.save((err, addedUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.send(addedUser);
  });
});

userRouter.put("/:userId", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, updatedUserInfo) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      console.log(req.body)
      return res.send(updatedUserInfo);
    }
  );
});

userRouter.delete("/:userId", (req, res, next) => {
  User.findOneAndDelete(
    { _id: req.params.userId },
    (err, deletedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.send(
        `The recipe with the ID of ${deletedUser._id} has been deleted`
        // change this to say "the user"?
      );
    }
  );
});

module.exports = userRouter;


