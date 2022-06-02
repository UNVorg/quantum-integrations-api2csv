const axios = require('axios');
const configs = require('./configs.js');
const { parse } = require('json2csv');
const fs = require('fs').promises;

const DEFAULT_PARAMS = {
    offset: 0,
    limit: 250,
    expand: "all",
    totalResults: true
};

const csvObjects = configs.csvEntityConfigs;

const callApi = async (apiUrl, parameters ) => {
    const authConfig = configs.authConfigs();
    const fullUrl = `${authConfig.api_url}${apiUrl}`;
    console.log(" calling = ", fullUrl, parameters, authConfig);
    try {

        const res = await axios.get(fullUrl, {
            headers: {
                'Content-Type': "application/json",
                'Rest-Framework-Version': "4"
            },
            auth: {
                "username": authConfig.user,
                "password": authConfig.pass
            },
            params: parameters
        });

        return res.data ; 
    } catch (err ) {
        console.log( "there was an error ",  err );
    }
};

const jsonToCsv = (data, fields) => {
    const opts = { fields };
    const csv =   parse(data, opts);
    return csv;
};


const outputFileUTF8 = async (data, filename) => {
    try {
        const out = await fs.writeFile(filename, data, {encoding:'utf8'});
    } catch (e) {
        console.log(` failed writing to file ${filename} `, e);
    }
};

const padNum = (num) => {
    return String(num).padStart(4, '0');
};

/*
API returns only a set of 25 records, we need to page thru
the entire set with repeated API calls



*/
const pageAPIRecords = async (capi, params) => {
    var fullData = [];
    var data = await callApi(capi, params);
    const pages = Math.trunc(data.totalResults) ; 
    const totalPages = pages / params['limit'];
    var currentPages = 30;
    fullData.push( ...data.items );
    
    var sData = JSON.stringify(fullData);
    const ret = await outputFileUTF8(sData, `persons_full_${padNum(currentPages)}.json`);

    while (data.hasMore) {
        fullData = [];
        const newOffset = (currentPages * data.limit) + 1;
        var newParams = Object.assign({}, params);
        newParams.offset = newOffset;
        console.log("page - ", currentPages, " of ", totalPages);
        data =  await callApi(capi, newParams) ; 
        fullData.push(...data.items);
        currentPages++;
        sData = JSON.stringify(fullData);
        const ret = await outputFileUTF8(sData, `persons_full_${padNum(currentPages)}.json`);
    }
    return fullData;
}

/*
calling a specific API
*/
const fetchItem = async (item) => {
    console.log(" calling ", item);
    try {
        const data = await pageAPIRecords(
            item.api, 
            {
                offset: 7251,
                limit: 250,
                expand: "all",
                totalResults: true
            }
        );
        /*
        if (data.constructor == Array) {
            const sData = JSON.stringify(data);
            const ret = await outputFileUTF8(sData, "persons__full.json");
            //const csvData = jsonToCsv(data, item.fields);
            //const ret = await outputFileUTF8(csvData, `${item.name}.csv`);
            //console.log(` file written ${item.name}.csv`);
        }
        */
    } catch (e) {
        console.log('error in main call ', e);
    }

};

const filterAPIs = (includeTheseApis, item) => {
    return includeTheseApis.includes(item.name);
}

(async() => {
    try {
        console.log("CSV Objects = ", csvObjects);
        // process all csv objects
        csvObjects.filter(
            item => [
                'allVolunteerPersons'
            ].includes(item.name)
        ).map( 
            item => fetchItem(item) 
        );
    } catch (e) {
        console.log('error in main call ', e);
    }
})();




