# text-analyzer


I have implemented apis for the text analyzer. Because the shortage of time, unable to finish the entire application like front-end and test cases. 

### Step to setup the project:

- run "npm install"
- setup env by following env.example
- run the project using "npm start"

### How to use it:
- Apis are protected. to use the apis, you have to login first. to login hit the login api and collect the jwt. Once you have jwt, pass the jwt as bearer token  into authorization header to analyze the text.

### APIs:
- signup ```{{base}}/api/v1/user/signup```
- signin ```{{base}}/api/v1/user/signin```
- count-words ```{{base}}/api/v1/analyzer/count-word```
- count-characters ```{{base}}/api/v1/analyzer/count-character```
- count-paragraph ```{{base}}/api/v1/analyzer/count-paragraph```
- count-sentence ```{{base}}/api/v1/analyzer/count-sentence```
- longest-word ```{{base}}/api/v1/analyzer/longest-word```

