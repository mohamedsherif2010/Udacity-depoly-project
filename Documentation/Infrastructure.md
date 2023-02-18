## Udagram Infrastructure

![Architecture flow](architectureDiagram.png)

# AWS
#### RDS database
Database endpoint: `database-1.cpbmzmsxsvx2.us-east-1.rds.amazonaws.com`

#### Elastic Beanstalk
server is running on EBS depending on the database

server url : `http://udagram-api-dev.us-east-1.elasticbeanstalk.com/api/v0`

#### S3
front end is uploaded on S3 for static web hosting,
app url : `http://mybucket023023025.s3-website-us-east-1.amazonaws.com/`