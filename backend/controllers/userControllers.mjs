import userModel from "../model/userModel.mjs";
import { adminModel } from "../model/userModel.mjs";
import { stringToHash, varifyHash, validateHash } from "bcrypt-inzi";
import cookieParser from "cookie-parser";
import Jwt from "jsonwebtoken";

const SECRETKEY = "topsecret" || process.env.SECRETKEY;

const signup = async (req, res) => {
  // Get all data from user
  let { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({
      message: "All data is required for authorization",
    });
  }

  userModel.findOne({ email: email }, (err, user) => {
    if (!err) {
      if (user) {
        console.log("user already exist: ", user);
        return res.status(400).send({
          message: "user already exist,, please try a different email",
        });
      } else {
        stringToHash(password).then((hashString) => {
          userModel.create(
            {
              firstName,
              lastName,
              email,
              password: hashString,
            },
            (err, result) => {
              if (!err) {
                return res.status(201).send({ message: "user is created" });
              } else {
                return res
                  .status(500)
                  .send({ message: "internal server error" });
              }
            }
          );
        });
      }
    } else {
      return res.status(500).send({ message: "db error in query" });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // null check - undefined, "", 0 , false, null , NaN
    return res.status(400).send({ message: "Data is missing" });
  }

  // check if user exist
  userModel.findOne(
    { email: email },
    "firstName lastName email password",
    (err, data) => {
      if (!err) {
        if (data) {
          // user found
          varifyHash(password, data.password).then((isMatched) => {
            if (isMatched) {
              const tokenData = {
                _id: data._id,
                email: data.email,
                iat: Math.floor(Date.now() / 1000) - 30,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
              };
              const token = Jwt.sign(tokenData, SECRETKEY);
              return res
                .cookie("Token", token, {
                  maxAge: 86_400_000,
                  httpOnly: true,
                })
                .send({
                  message: "login successful",
                  profile: {
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    _id: data._id,
                    token,
                  },
                });
            } else {
              return res
                .status(401)
                .send({ message: "Incorrect email or password" });
            }
          });
        } else {
          return res
            .status(401)
            .send({ message: "Incorrect email or password" });
        }
      } else {
        return res
          .status(500)
          .send({ message: "login failed, please try later" });
      }
    }
  );
};

const verification = (req, res, next) => {
  if (!req?.cookies?.Token) {
    return res.status(401).send({ message: "Your session has been expired" });
  }

  Jwt.verify(req?.cookies?.Token, SECRETKEY, (err, decodedData) => {
    if (!err) {
      const nowDate = new Date().getTime() / 1000;
      if (decodedData.exp < nowDate) {
        return res
          .status(401)
          .cookie("Token", "", {
            maxAge: 1,
            httpOnly: true,
          })
          .send({ message: "token expired" });
      } else {
        req.body.token = decodedData;
        next();
      }
    } else {
      return res.status(401).send("invalid token");
    }
  });
};

const logout = (req, res) => {
  res.cookie("Token", "", {
    maxAge: 1,
    httpOnly: true,
  });
  return res.send({ message: "Logout successful" });
};

// const verifyToken = () => {

// }

const changePassword = async (req, res) => {
  try {
    const body = req.body;
    const currentPassword = body.currentPassword;
    const newPassword = body.password;
    const _id = req.body.token._id;

    // check if user exist
    const user = await userModel.findOne({ _id: _id }, "password").exec();
    if (!user) return res.send({ message: "User not found" });
    const isMatched = await varifyHash(currentPassword, user.password);
    if (!isMatched) return res.send({ message: "password not match" });
    const newHash = await stringToHash(newPassword);
    await userModel.updateOne({ _id: _id }, { password: newHash }).exec();
    // success
    return res.send({ message: "password changed successful" });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).send({
      message: "Internal server timeout",
    });
  }
};

const getUser = async (req, res) => {
  let _id = "";
  {
    req.params.id ? (_id = req.params.id) : (_id = req.body.token._id);
  }
  // if (req.params.id) {
  //   _id = req.params.id;
  // } else {
  //   _id = req.body.token._id;
  // }

  try {
    const user = await userModel
      .findOne({ _id: _id }, "email firstName lastName -_id")
      .exec();
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    } else {
      res.set({
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      });
      return res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send({
      message: "something went wrong on server",
    });
  }
};

export {
  signup,
  login,
  verification,
  logout,
  changePassword,
  getUser,
};
