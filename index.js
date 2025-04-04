import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:process.env.DB_PASSWORD,// replace with you pgadmin psw
  port:5432
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
async function checkVisisted(){
  const result = await db.query("SELECT country_code FROM visited_countries");
  console.log(`check result rows are ${JSON.stringify(result.rows)}`)
  let countries = [];
  result.rows.forEach((country)=>{
    countries.push(country.country_code);
  });
  return countries;
};
let errorMessage = "Enter country name!";
app.get("/", async (req, res) => {
  let countries =await checkVisisted();
  console.log("countries are is "+ countries)
  res.render("index.ejs", { countries: countries, total: countries.length,error:errorMessage });

});

app.post("/add",async(req,res)=>{
  const input = req.body["country"].toLowerCase().replace(/\s/g, "").trim();

  console.log(`user input country is ${input}`);
// Get country code from countries table
const result = await db.query(
  "SELECT country_code FROM countries WHERE LOWER(REPLACE(country_name, ' ', '')) = $1",
  [input]
);
  console.log(`result rows are ${JSON.stringify(result.rows)}`);
  console.log(`result length form countries with the inputted country is ${result.rows.length}`)
// Check if any rows were returned
if (result.rows.length > 0) {
  const alreadyCode = result.rows[0].country_code; // Get the first country_code
  console.log(`alreadyCode is ${alreadyCode}`);

  // check same country already exit in visited_countries
  const sameResult =await db.query("SELECT country_code FROM visited_countries WHERE country_code = $1",[alreadyCode]);
  console.log(`Same result is ${JSON.stringify(sameResult.rows)}`);
  if(sameResult.rows.length == 0){ // if not exit
    const data = result.rows[0];
    const countryCode = data.country_code;
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[countryCode]);
    res.redirect("/");
    errorMessage = "Enter country name";
  }else{
    res.redirect("/");
    console.log("already exist country");
    errorMessage =  "already exit contry!"
  }
   
}else{ // if not contains in the valid countries
  res.redirect("/");
  console.log("Invalid country!");
  errorMessage = "Invalid country!"
}
   
  
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
