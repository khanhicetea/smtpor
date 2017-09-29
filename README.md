# SMTPor

Never need a bigass mail client to test your SMTP config !

![SMTPor](https://user-images.githubusercontent.com/4528223/31022834-3be38bda-a564-11e7-8236-f059775b453d.png)

## TL;DR

Using Docker to run

```bash
$ docker run -d -p 3000:3000 khanhicetea/smtpor
```

Then open **http://localhost:3000** to try a shot !

## Install & Start

```bash
$ npm install
$ npm start
```

## Heroku Deploying

```bash
$ heroku login
$ heroku git:remote -a [your-app-name]
$ git push heroku master
```

## Contributors

- @khanhicetea

## License

MIT License