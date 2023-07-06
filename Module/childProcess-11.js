const { exec } = require('child_process');

// it's not recognize ls because it's not on linux
exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`Command execution failed: ${stderr}`);
    return;
  }

  // Print the list of files and directories
  console.log(stdout);
});
