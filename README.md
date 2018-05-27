## Cookie-Sweep
Cookie Sweep is a set-and-forget cookie manager extension for Firefox. It sweeps all cookies at browser startup, keeping only those from domains in the whitelist.

The options page is where you make your whitelist. It also has a button to run a sweep at any time.

Note that there is no option to disable the startup sweep.

### Use case
This is a fork of [the original](https://github.com/mpopp75/cookie-sweep), which had everything I wanted except the ability to automatically sweep at browser startup or shutdown. I rarely keep my browser running when I'm not using it, so it's very important to me to start with a clean slate of cookies for each session. In addition, there are several website domains I want to preserve cookies for logins and preferences.

Note that offline storage is a separate matter. For that, I set `privacy.clearOnShutdown.offlineApps` to true.

### Known issue
If the file that stores the domain whitelist is corrupt or missing, Cookie Sweep will not function properly, including the options page not displaying a whitelist editor.

To fix this problem, do the following:
* Exit the browser (it must not be running)
* Create a text file named `storage.js` with this content: `{"domains":"example.com"}`
* Place the file in your profile directory at `browser-extension-data` / `cookiesweep@startup`
* Start the browser and you should see `example.com` in the whitelist on the Cookie Sweep options page. That means it's running properly.

I've thoroughly tested my Cookie Sweep fork, and there are no other problems. It really is set-and-forget.
