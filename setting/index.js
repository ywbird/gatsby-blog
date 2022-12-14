const express = require(`express`);
const path = require(`path`);
const fs = require(`fs`);
const { urlencoded, json } = require(`body-parser`);
const app = express();

const settingFile = fs.readFileSync(
  path.join(__dirname, `..`, `config.json`),
  `utf8`,
);

app.use(urlencoded({ extended: true }));
app.use(json());
// app.use(bodyParser.raw());

app.use(express.static(path.join(__dirname, `script`)));
app.use(express.static(path.join(__dirname, `css`)));

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`));
});

app.post(`/set`, (req, res) => {
  res.sendStatus(200);
  console.log(`Setting changed.`);
  const data = JSON.stringify(req.body, null, `  `);
  fs.writeFileSync(path.join(__dirname, `..`, `config.json`), data);
});

app.get(`/get`, (req, res) => {
  res.json(JSON.parse(settingFile));
});

app.listen(3000, () => {
  console.log(`Server is Running`);
});
