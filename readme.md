# DSU LMS Login Bypass

Chrome extension to bypass the annoying LMS login alerts

## Installation

1) Clone the repository
```bash
git clone https://github.com/sinnytk/dsu-login-bypass
```
2) Go to Chrome Extension page(chrome://extensions/)
3) Press "Load Unpacked" and select the cloned repository
4) Go to LMS, you will see the extension light up, click on it and login
5) Profit! Next time you login, it won't prompt you with the annoying login alert


## How does it work?

When I was building the [DSU Feedback Bot](https://github.com/sinnytk/dsu-feedback-bot), I stumbled upon this [Stack Overflow question](https://stackoverflow.com/questions/47199727/how-can-i-handle-the-login-alert)

Basically, you can bypass the login prompt by using

[http://username:password@lms.dsu.edu.pk](http://username:password@lms.dsu.edu.pk)

As compared to,

[http://lms.dsu.edu.pk](http://lms.dsu.edu.pk)

This extension basically emulates that by saving your username, password in Google Chrome Sync storage and redirecting you to authorized URL every time it finds __lms.dsu.edu.pk__ in the Web Request

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
