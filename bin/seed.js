require("dotenv").config();
require("../config/dbConfig"); // fetch the db connection
const { SchemaTypeOptions } = require("mongoose");
const UserModel = require("../models/User.model.js");
//const { getMaxListeners } = require("../app");
const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Ruby Campanella",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("rubyCampanella", 10),
    email: "ruby.campanella@gmail.com",
    phone: "0712233777",
    address: "76 rue Félix Faure 75015 Paris",
    coordinates: [48.83975, 2.28425],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610868/Super%20Nounou/onekid_zgsail.webp",
    numberOfKids: 1,
    kidsAge: 2,
    description: "Louise is very calm listening music ",
    availability: "fullTime",
  },
  {
    name: "Rebecca Labbe",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("rebeccaLabbe", 10),
    email: "rebecca.labbe@gmail.com",
    phone: "0712233777",
    address: "22 rue Paul Doumer Beauvais",
    coordinates: [49.448089, 2.08002],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610867/Super%20Nounou/family-1littleChild_ynr56l.jpg",
    numberOfKids: 1,
    kidsAge: 2,
    description: "Mateo love walking and playing in the parc ",
    availability: "fullTime",
  },
  {
    name: "Luce Broyez",
    role: "nanny",
    age: 75,
    password: bcrypt.hashSync("luceBroyez", 10),
    email: "luce.broyez@gmail.com",
    phone: "0343273375",
    address: "43 avenue du Docteur Schweitzer 59282 Douchy-les-mines",
    coordinates: [49.79675, 3.134536],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610867/Super%20Nounou/family-1littleChild_ynr56l.jpg",
    description: "Mateo love walking and playing in the parc ",
    availability: "fullTime",
  },
  {
    name: "Lynda Dupond",
    role: "nanny",
    age: 22,
    password: bcrypt.hashSync("lyndaDupond", 10),
    email: "lynda.dupond@gmail.com",
    phone: "0612233445",
    address: "110 rue de la convention 75015 Paris",
    coordinates: [48.858705, 2.342865],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427168/84_zstpqh.jpg",
    experience: 2,
    resume: "I love children, i used to take care of my brothers and sisters",
    availability: "afterschool",
  },
  {
    name: " Sophie Durand ",
    role: "nanny",
    age: 30,
    password: bcrypt.hashSync("sophieDurand", 10),
    email: "sophie.durand@gmail.com",
    phone: "0656677889",
    address: "82 avenue Félix Faure 75015 Paris",
    coordinates: [48.839751, 2.284263],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427166/52_yifjrn.jpg",
    experience: 6,
    resume: "I am a mum of 3 kids, i consider all children as my own children",
    availability: "fullTime",
  },
  {
    name: "Marie-Noel France",
    role: "nanny",
    age: 45,
    password: bcrypt.hashSync("marienoelFrance", 10),
    email: "marienoel.france@gmail.com",
    phone: "0691234567",
    address: "28 rue de vaugirard 75015 Paris",
    coordinates: [48.849376, 2.336508],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427165/62_bu6hcb.jpg",
    experience: 10,
    resume:
      " i am graduated from babyschool i enjoy taking care of all children",
    availability: "fullTime",
  },
  {
    name: "Jeanette Moss",
    role: "nanny",
    age: 28,
    password: bcrypt.hashSync("jeanetteMoss", 10),
    email: "jeanetteMoss@gmail.com",
    phone: "0691234567",
    address: "18 boulevard de grenelle 75015 Paris",
    coordinates: [48.853185, 2.289709],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427165/89_gnjo3l.jpg",
    experience: 3,
    resume: " A person’s a person, no matter how small. Dr. Seuss",
    availability: "evening",
  },
  {
    name: "Amanda Halliday",
    role: "nanny",
    age: 22,
    password: bcrypt.hashSync("amandaHalliday", 10),
    email: "amanda.halliday@gmail.com",
    phone: "0691234567",
    address: "56 avenue Emile Zola 75015 Paris",
    coodinates: [48.846334, 2.283672],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/c_thumb,w_200,g_face/v1642427166/79_jtjsri.jpg",
    experience: 2,
    resume:
      "Since 2 i am taking care of 2 chidren for helping them homework, i am studing beside",
    availability: "afterschool",
  },
  {
    name: "Anna Brown",
    role: "nanny",
    age: 37,
    password: bcrypt.hashSync("annaBrown", 10),
    email: "anna.Brown@gmail.com",
    phone: "0691234567",
    address: "43 rue du Théâtre 75015 Paris",
    coordinates: [48.848828, 2.288463],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/c_thumb,w_200,g_face/v1642427166/3_bhcn52.jpg",
    experience: 10,
    resume: "The best thing in the world is seeing smiling face on your kids.",
    availability: "fullTime",
  },
  {
    name: "Rosemary Chapman",
    role: "nanny",
    age: 37,
    password: bcrypt.hashSync("rosemaryChapman", 10),
    email: "rosemary.Chapman@gmail.com",
    phone: "0691234567",
    address: "8 rue Tiphaine 75015 Paris",
    coordinates: [48.84916, 2.295193],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/c_thumb,w_200,g_face/v1642427165/86_evzxio.jpg",
    experience: 25,
    resume:
      "The greatest gift I can give to your children is my time, my love, and my attention.",
    availability: "fullTime",
  },
  {
    name: "Caroline Smith",
    role: "family",
    age: 35,
    password: bcrypt.hashSync("carolineSmith", 10),
    email: "caroline.smith@gmail.com",
    phone: "0712233445",
    address: "90 rue de la convention 75015 Paris",
    coordinates: [48.841868, 2.285956],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427161/images-4_rcjqon.jpg",
    numberOfKids: 1,
    kidsAge: [5],
    description:
      "Pierre is full of energy, he likes reading and playing football",
    availability: "afterschool",
  },
  {
    name: "Sarah Robert",
    role: "family",
    age: 40,
    password: bcrypt.hashSync("sarahRobert", 10),
    email: "sarah.robert@gmail.com",
    phone: "07122334454",
    address: "65 boulevard grenelle 75015 Paris",
    coordinates: [48.850721, 2.293386],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610871/Super%20Nounou/twokids_lel338.jpg",
    numberOfKids: 2,
    kidsAge: [5, 7],
    description:
      "Clara and Peter loves playing together. Clara play piano and Peter play tennis",
    availability: "afterschool",
  },
  {
    name: "Jennifer Stone",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("jenniferStone", 10),
    email: "jennifer.stone@gmail.com",
    phone: "0712233777",
    address: "18 rue Violet 75015 Paris",
    coordinates: [48.848799, 2.293983],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610870/Super%20Nounou/twoboys_thalau.jpg",
    numberOfKids: 1,
    kidsAge: [1],
    description: "Arthur is a lovely baby who sleep all the time",
    availability: "fullTime",
  },
  {
    name: "Lisa Dunston",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("lisaDunston", 10),
    email: "lisa.dunston@gmail.com",
    phone: "0712233777",
    address: "76 rue du docteur Finlay 75015 Paris",
    coordinates: [48.858705, 2.342865],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610870/Super%20Nounou/geese-2494952__480_lcgxoy.webp",
    numberOfKids: 2,
    kidsAge: [7, 4],
    description: "As we finish late with help for our children homework",
    availability: "afterschool",
  },
  {
    name: "Sharon Finch",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("sharonFinch", 10),
    email: "sharon.finch@gmail.com",
    phone: "0712233777",
    address: "75 avenue de suffren 75015 Paris",
    coordinates: [48.858705, 2.342865],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610869/Super%20Nounou/touch-baby_haebel.webp",
    numberOfKids: 1,
    kidsAge: [3],
    description: "Clara is very sweet",
    availability: "evening",
  },
  {
    name: "Debra McKay",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("debraMcKay", 10),
    email: "debra.mcKay@gmail.com",
    phone: "0712233777",
    address: "23 rue du commerce 75015 Paris",
    coordinates: [48.847992, 2.296839],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610869/Super%20Nounou/familyandbaby_ckqbqe.webp",
    numberOfKids: 1,
    kidsAge: [6],
    description: "Antoine is allergic to milk",
    availability: "afterschool",
  },
  {
    name: "Evelyn Deluca",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("evelynDeluca", 10),
    email: "evelyn.deluca@gmail.com",
    phone: "0712233777",
    address: "51 rue Emeriau 75015 Paris",
    coordinates: [48.848561, 2.285232],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610868/Super%20Nounou/lowAge_u3k9rk.webp",
    numberOfKids: 1,
    kidsAge: [8],
    description: "Chloé love reading",
    availability: "fullTime",
  },
  {
    name: "Faye Dail",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("fayeDail", 10),
    email: "faye.dail@gmail.com",
    phone: "0712233777",
    address: "12 rue Lourmel 75015 Paris",
    coordinates: [48.850041, 2.291719],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610868/Super%20Nounou/family3people2_dumhwm.jpg",
    numberOfKids: 2,
    kidsAge: [1, 3],
    description: "Arthur is a lovely baby who sleep all the time",
    availability: "fullTime",
  },
  {
    name: "Olivia Dail",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("oliviaDail", 10),
    email: "olivia.dail@gmail.com",
    phone: "0712233777",
    address: "65 rue Letellier 75015 Paris",
    coordinates: [48.846823, 2.299283],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610867/Super%20Nounou/father-baby__480_wehaap.webp",
    numberOfKids: 1,
    kidsAge: 3,
    description: "Mateo love walking and playing in the parc ",
    availability: "fullTime",
  },
  {
    name: "Brett Usher",
    role: "family",
    age: 34,
    password: bcrypt.hashSync("brettUsher", 10),
    email: "brett.usher@gmail.com",
    phone: "0712233777",
    address: "45 rue Viala 75015 Paris",
    coordinates: [48.858705, 2.342865],
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642610866/Super%20Nounou/family-3kids__480_oyko8m.jpg",
    numberOfKids: 1,
    kidsAge: 3,
    description: "Mateo love walking and playing in the parc ",
    availability: "fullTime",
  },
];

/*
(async function findUsersByProximity () {
 try {
  // const sortedUsers = await UserModel.find({
  //   "coordinates": {
  //    $near: {
  //     $geometry: { type: "Point", coordinates: [51.091074, 3.707589] } // from Ghent (Belgium)
  //    }
  //   }
  // })
  const sortedUsers = await UserModel.find({
   "coordinates": {
    $near: {
     $geometry: { type: "Point", coordinates: [47.410714, 0.666035] } // from 'Saint-Cyr-sur-Loire'
    }
   }
  })
  console.log(
   `sortedUsers:`, sortedUsers
  );
  process.exit();
 } catch (err) {
  console.error(err);
 }
})();
*/

(async function insertUsers() {
  try {
    await UserModel.deleteMany(); // empty the tags db collection
    const inserted = await UserModel.insertMany(users); // insert docs in db
    console.log(`seed users done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
