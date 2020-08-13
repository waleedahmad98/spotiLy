const { execFile } = require("child_process");
const { app } = require('electron').remote;
const path = require('path');

var pythonProcess = null;

function refresh() {
    if (pythonProcess) {
        pythonProcess.stdin.write('\n');
    }
}

function runPy(success, error) {
    pythonProcess = execFile(path.join(app.getAppPath(), 'Spotily.exe'));
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