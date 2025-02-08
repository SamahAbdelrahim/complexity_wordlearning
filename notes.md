run using: 
locally: node server.js
on the server: npm start
keep running uisng nohup: nohup npm start > nohup.out 2>&1 &

additional notes:
Use nohup
The nohup command allows you to run a process that continues after you log out of the terminal:

Run the server using nohup:

nohup npm start > output.log 2>&1 &
nohup: Ensures the process is not terminated when the session ends.
> output.log: Redirects standard output and error to a file (output.log). (replaced by nohup.out here)
&: Runs the command in the background.

Check the process:
ps aux | grep node

Stop the server if needed: Find the process ID (PID) from the output of ps aux and kill it:

kill -9 <PID>


suggestions for when a conflict on the port occur: 
1. Identify the Process Using Port 3005
Run the following command to check what process is using port 3005:

bash
Copy code
sudo lsof -i :3005
This will output something like:

graphql
Copy code
COMMAND   PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node      1234 samah   10u  IPv6 123456      0t0  TCP *:3005 (LISTEN)
Take note of the PID (process ID), e.g., 1234.

2. Kill the Process
If you’re certain that the process occupying port 3005 is your Node.js app and you want to stop it, run:

bash
Copy code
kill -9 1234
Replace 1234 with the actual PID from the previous command.

3. Restart Your Application
Now, restart your application using nohup:

bash
Copy code
nohup npm start > output.log 2>&1 &
4. Check Running Processes
After restarting, confirm your app is running on the correct port:

bash
Copy code
ps aux | grep node
5. Change the Port (Optional)
If you don’t want to stop the process using port 3005, you can modify your application to use a different port. Update server.js to use an alternate port (e.g., 3006):

javascript
Copy code
const port = process.env.PORT || 3006;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
Restart the application and verify the new port is working:

bash
Copy code
nohup npm start > output.log 2>&1 &
Then access your app at https://stanford-cogsci.org:3006/.