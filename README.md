# Quantum API (JSON) => CSV script

This script calls APIs in Quantum and converts the JSON output to CSV. 
The script also automatically pages the APIs. 

## configuration

See config.js. example configuration below - we need to provide the API url (not absolute), and the fields we want extract from the JSON. The name attribute is used to name the CSV file. 
```js
    {
        "name": 'organizations',
        "api": '/hcmRestApi/resources/11.13.18.05/organizations',
        "fields": [
            'OrganizationId',
            'Name',
            'Title',
            'ClassificationCode',
            'OrganizationCode',
            'Status',
            'CreationDate',
            'LastUpdateDate',
            'OrgCode',
            'EffectiveStartDate',
            'EffectiveEndDate'
        ]
    },
```

## Quantum configuration

You will need to create a file called `config.json` with the following format and credentials for the script to be able to connect to quantum: 

```
{
    "api_url": "https://quantum-instance.oracle-cloud.com",
    "user": "XXX@XYZ.org",
    "pass": "XXXX"
}
```