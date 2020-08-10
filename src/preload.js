// const { AssertionError } = require('assert')
// const { parseLyrics } = require('node-lyrics');
const { spawn } = require("child_process");

var pythonProcess = null;


function refresh() {
    if (pythonProcess) {
        pythonProcess.stdin.write('\n');
    }
}

function runPy(success, error) {
    pythonProcess = spawn('python', ["./SpotiLy.py"]);
    pythonProcess.stdout.on('data', async(data) => {
        let response = JSON.parse(data);
        if (response.ok) {
            success(response);
        } else {
            error(response);
        }
    });
}


window.runPy = runPy;
window.refresh = refresh;