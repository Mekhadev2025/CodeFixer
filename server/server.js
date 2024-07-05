 const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/run-code', (req, res) => {
  const code = req.body.code;

  // Save the code to a temporary file
  const fs = require('fs');
  const tmpFilePath = './tmp_code.py';
  fs.writeFileSync(tmpFilePath, code);

  // Execute the Python code
  exec(`python3 ${tmpFilePath}`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr });
    } else {
      res.json({ output: stdout });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
