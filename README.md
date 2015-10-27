# jerry-email-app
web app that simply sends an email &amp; has nice Jerry-themed look

Notes:
Just need to spin up a VM & call mailx

Need an auth mechanism in front.

Need html/css to create a button & the button simply sends me an email.

For login:
- csquared/sinatra-google-auth 
- console google developer to register app & get key/secret
- also - nice to do an OKTA integration

For email:
- mail script search for 'ruby smtp'  for smtp server, use google server
- https://github.com/jbayer/mail-java

For visibility on mail client side:
Set a filter on the gmail inbox side with a cray-cray color so that the THE LINE email is easy as pi to find
