const axios = require('axios');
const configs = require('./configs.js');
const { parse } = require('json2csv');
const fs = require('fs').promises;
const DEFAULT_PARAMS = {
    offset: 0,
    onlyData: true,
    limit: 25,
    totalResults: true
};

const csvObjects = configs.csvConfigs;

const callApi = async (apiUrl, parameters ) => {
    const authConfig = configs.authConfigs();
    const fullUrl = `${authConfig.api_url}${apiUrl}`;
    console.log(" calling = ", fullUrl);
    try {

        const res = await axios.get(fullUrl, {
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

const outputFileUTF8 = async (data, filename) => {
    try {
        const out = await fs.writeFile(filename, data, {encoding:'utf8'});
    } catch (e) {
        console.log(` failed writing to file ${filename} `, e);
    }
};


const jsonToCsv = (data, fields) => {
    const opts = { fields };
    const csv =   parse(data, opts);
    return csv;
};


/*
API returns only a set of 25 records, we need to page thru
the entire set with repeated API calls
*/
const pageAPIRecords = async (capi, params) => {
    var fullData = [];
    var data = await callApi(capi, params);
    const pages = Math.trunc(data.totalResults) ; 
    var currentPages = 1;
    fullData.push( ...data.items );
    while (data.hasMore) {
        const newOffset = (currentPages * data.limit) + 1;
        var newParams = Object.assign({}, params);
        newParams.offset = newOffset;
        data =  await callApi(capi, newParams) ; 
        fullData.push(...data.items);
        currentPages++;
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
            DEFAULT_PARAMS
        );
        if (data.constructor == Array) {
            const csvData = jsonToCsv(data, item.fields);
            const ret = await outputFileUTF8(csvData, `${item.name}.csv`);
            console.log(` file written ${item.name}.csv`);
        }
    } catch (e) {
        console.log('error in main call ', e);
    }

};

const filterAPIs = (includeTheseApis, item) => {
    return includeTheseApis.includes(item.name);
}

(async() => {
    try {
        // process all csv objects
        csvObjects.filter(
            item => [
                /*
               'legalEmployersLov',
               'gradesLov',
               'organizations',
               'locationsLov',
               'hcmCountriesLov',
               'personTypesLOV',
               'actionsLOV',
               'actionReasonsLOV',
               'hcmBusinessUnitsLOV',
               'currenciesLOV',
               'departmentsLov',
               'territoriesLOV',
               'salaryBasisLov',
               'rolesLOV',
               'benefitPlansLOV',
               'lifeEventsLOV',
               'commonLookupsLOV',
               'assignmentStatusTypesLov',
               'gradeLaddersLov'
             */
            'locationsV2'
            ].includes(item.name)
        ).map( 
            item => fetchItem(item) 
        );
    } catch (e) {
        console.log('error in main call ', e);
    }
})();





