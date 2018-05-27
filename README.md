## Cookie-Sweep
Cookie Sweep is a simple cookie manager extension for Firefox. It sweeps all cookies at browser startup, keeping only those from domains in the whitelist.

The options page is where you make your whitelist. It also has a button to run a sweep at any time.

Note that there is no option to disable the startup sweep.

### Use case
This is a fork of [the original](https://github.com/mpopp75/cookie-sweep), which had everything I wanted except the ability to automatically sweep at browser startup. I usually exit my browser when I'm done using it, so I want a clean slate of cookies for each session. In addition, there are several websites I want to preserve cookies for logins and preferences.

Note that offline storage is a separate matter. For that, I set `privacy.clearOnShutdown.offlineApps` to true.

### Known problem
I've thoroughly tested my Cookie Sweep fork, and there is one problem. If the text file that stores the domain whitelist is missing or corrupt, the sweep function will crash. This occurred immediately after installing on two different profiles because the file was missing. But it's easy to remedy, and once corrected, hasn't reoccurred for me.

Do these steps:
* After installing, go to the Cookie Sweep options page.
* Click the Sweep Cookies now button. The problem occurred if it hangs with a `Processing...` message. There also will be a script error in the console.
* To correct it, type in a domain, like `a.com`, in the Whitelist editor and the text file will automatically be saved.
* Verify by reloading the options page and running another sweep. (The sweep should quickly finish then report the number of cookies kept and removed.)
* The tool is now in good shape, so you can delete the whitelist value, add others, etc.
