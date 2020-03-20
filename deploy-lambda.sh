rm tests.zip
zip -r tests.zip .
echo '\n\ndeploy to lambda function ----------------\n\n'
aws lambda update-function-code --function-name automatedtests --zip-file fileb://tests.zip --region ap-southeast-2 
rm tests.zip