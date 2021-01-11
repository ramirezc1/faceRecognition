This full stack app uses Clarifai API to detect multiple faces in an image.

## Front-End:

The front-end was develped with React, Tachyons, Reactstrap, react-particles.JWT is stored in sessionStorage and used to authenticate a user before they can access their resources on the back-end.

Live app:https://face-recognition-app2.herokuapp.com/

## Back-End:

The frontend requests are handled by the Face Recognition REST API created using ExpressJs.
All user data is stored in a PostgreSQL server. Passwords are hashed using BCrypt. Redis is used to store JWT to mantain session and authenticate users before the access resources.
code: https://github.com/ramirezc1/faceRecognitionApi
