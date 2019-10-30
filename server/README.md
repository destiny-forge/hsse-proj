BackEnd:

NodeJS
Express

Database:
MongoDB (MLab)
Mongoose ORM

Authentication (Token)
PassportJS
JWT
Bcrypt

Swagger UI -> API Documentation

Development App on Heroku

Production on AWS

health2018science

# installing ElasticSearch on OSX

brew update
brew tap elastic/tap
brew install elastic/tap/elasticsearch-full

brew services start elastic/tap/elasticsearch-full

Note: I have an older MacBook Pro 2015 and I needed to disable machine learning so that the service would start.

nano /usr/local/etc/elasticsearch/elasticsearch.yml
xpack.ml.enabled: false

Testing

```curl -X GET http://localhost:9200/
{
  "name" : "Erics-MBP",
  "cluster_name" : "elasticsearch_erobit",
  "cluster_uuid" : "aJWjRewyRW2rHe9wwMVtKw",
  "version" : {
    "number" : "7.4.1",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "fc0eeb6e2c25915d63d871d344e3d0b45ea0ea1e",
    "build_date" : "2019-10-22T17:16:35.176724Z",
    "build_snapshot" : false,
    "lucene_version" : "8.2.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

# installing Kibana on OSX (after ES install above)

brew install elastic/tap/kibana-full
brew services start elastic/tap/kibana-full

Kibana will be available at the following url:
http://localhost:5601/

# Developer <3

The server project is configured with airbnb eslint as well as husky git commit hooks which will run linting before every commit to ensure source code meets the standards.

You can install the extensions in vs code for eslint and prettier

ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode

And configure the settings.json file (Command,)

```
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "eslint.autoFixOnSave": true
}
```
