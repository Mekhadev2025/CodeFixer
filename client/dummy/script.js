document.addEventListener("DOMContentLoaded", function () {
  const log = (message) => {
    console.log(message);
    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push(message);
    localStorage.setItem("logs", JSON.stringify(logs));
  };

  log("DOM fully loaded and parsed");

  const sumbtn = document.getElementById("twosum");
  const waterbtn = document.getElementById("container");
  const fibbtn = document.getElementById("fibonacci");
  const revbtn = document.getElementById("reverse");
  const descriptionDiv = document.getElementById("description-div");
  const codeInput = document.getElementById("codeInput");
  const title = document.getElementById("title-id");
  const opArea = document.querySelector(".area");
  const submitBtn = document.getElementById("submitBtn");

  // Set both fields to empty when the page loads
  codeInput.value = "";
  opArea.textContent = "";

  const loadCode = (url, titleText, descriptionHTML) => {
    log(`Loading code from: ${url}`);
    axios
      .get(url)
      .then((response) => {
        log(`Code loaded from: ${url}`);
        opArea.innerHTML = "";
        title.innerHTML = titleText;
        descriptionDiv.innerHTML = descriptionHTML;
        codeInput.value = response.data;
      })
      .catch((error) => {
        log("Error loading data:", error);
      });
  };

  sumbtn.addEventListener("click", () => {
    log("Two Sum button clicked");
    loadCode(
      "./static/twosum.py",
      "TWO SUM",
      `<div>
        You're given a list of integers called nums and an integer target. Your task is to find two numbers in the list such that they add up to the target. You can assume that each input would have exactly one solution, and you cannot use the same element twice.
        However, there seems to be an issue with the following code, which is supposed to solve this problem:
      </div>
      <br>
      <div>
        The function should return a list of two indices, but it doesn't seem to work as expected. Your task is to identify the problem in the code and provide a corrected version.
      </div>`
    );
  });

  waterbtn.addEventListener("click", () => {
    log("Container with Most Water button clicked");
    loadCode(
      "./static/container.py",
      "Container with Most Water",
      `<div>
        You have been provided with a Python function for solving the "Container With Most Water" problem. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the code.
        Problem Statement:
        <ul>
          <li>Given an array of non-negative integers height where each element represents the height of a vertical line on a chart, find two lines that, together with the x-axis, forms a container that can hold the most water.</li>
        </ul>
        The function you have been given takes the height list as input and should return the maximum amount of water that can be trapped in such a container. However, the code currently has a bug, and it doesn't return the correct result.
      </div>
      <br>
      <div>
        <ul>
          <li>Identify the issue in the code provided.</li>
          <li>Provide the corrected version of the code that correctly calculates the maximum amount of water that can be trapped in the container.</li>
          <li>Explain the problem you found and how your corrected code addresses it.</li>
        </ul>
      </div>`
    );
  });

  fibbtn.addEventListener("click", () => {
    log("Fibonacci button clicked");
    loadCode(
      "./static/fibonacci.py",
      "Fibonacci",
      `<div>
        You have been provided with a Python function for generating the Fibonacci sequence. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the code.
      </div>
      <br>
      <div>
        <ul>
          <li>Identify the issue in the code provided.</li>
          <li>Provide the corrected version of the code that correctly generates the Fibonacci sequence.</li>
          <li>Explain the problem you found and how your corrected code addresses it.</li>
        </ul>
      </div>`
    );
  });

  revbtn.addEventListener("click", () => {
    log("Reverse a String button clicked");
    loadCode(
      "./static/reverse.py",
      "Reverse a String in Python",
      `<div>
        You have been provided with a Python function for reversing a string. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the code.
      </div>
      <br>
      <div>
        <ul>
          <li>Identify the issue in the code provided.</li>
          <li>Provide the corrected version of the code that correctly reverses the string.</li>
          <li>Explain the problem you found and how your corrected code addresses it.</li>
        </ul>
      </div>`
    );
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    log("Submit button clicked");
    const code = codeInput.value;
    log("Code to be sent:", code);
    axios
      .post("http://localhost:3000/run-code", { code: code })
      .then((response) => {
        log("Response received:", response.data);
        opArea.textContent = response.data.output;
      })
      .catch((error) => {
        log("Error:", error);
      });
  });

  // Retrieve logs from localStorage and log them
  const storedLogs = JSON.parse(localStorage.getItem("logs")) || [];
  storedLogs.forEach((message) => console.log(message));
});
