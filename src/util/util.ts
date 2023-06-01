const { spawn } = require('node:child_process');


let execSpawn = (arg: any) => {
    const ffmpeg = spawn('ffmpeg', arg);
    ffmpeg.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });

    ffmpeg.stderr.on('data', (data: any) => {
        console.error(`stderr: ${data}`);
    });

    ffmpeg.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
    });
}

export default execSpawn