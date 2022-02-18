const configs = require('./config.json');

function authConfigs() {
    return configs;
}

const csvConfigs = [
    {
        "name": 'gradesLov',
        "api": '/hcmRestApi/resources/11.13.18.05/gradesLov',
        "fields": [
            'GradeId', 
            'EffectiveStartDate', 
            'EffectiveEndDate',
            'GradeCode',
            'Name',
            'ActiveStatus',
            'SetId',
            'SetCode',
            'SetName'
        ]
    },
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
    {
        "name": 'locationsLov',
        "api": '/hcmRestApi/resources/11.13.18.05/locationsLov',
        "fields": [
            "LocationId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "LocationCode",
            "LocationName",
            "ActiveStatus",
            "CountryCode",
            "CountryName",
            "Region1",
            "Region2",
            "TownOrCity",
            "PostalCode",
            "SetId",
            "SetCode",
            "SetName",
            "SingleLineAddress"
        ]
    },
    {
        "name": 'hcmCountriesLov',
        "api": '/hcmRestApi/resources/11.13.18.05/hcmCountriesLov',
        "fields": [
            "CountryName",
            "TerritoryCode",
            "Description",
            "AlternateTerritoryCode",
            "PhoneCountryCodeId",
            "PhoneCountryCode",
            "CurrencyCode",
            "NlsTerritory",
            "ObsoleteFlag"
        ]
    },
    {
        "name": 'personTypesLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/personTypesLOV',
        "fields": [
            "PersonTypeId",
            "ActiveFlag",
            "DefaultFlag",
            "UserPersonType",
            "SystemPersonType"
        ]
    },
    {
        "name": 'actionsLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/actionsLOV',
        "fields": [
            "ActionId",
            "ActionCode",
            "ActionName",
            "Description",
            "StartDate",
            "EndDate",
            "ActionTypeId",
            "ActionTypeCode",
            "TerminationType"            
        ]
    },
    {
        "name": 'actionReasonsLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/actionReasonsLOV',
        "fields": [
            "ActionReasonId",
            "ActionReasonCode",
            "ActionReason",
            "StartDate",
            "EndDate",
            "ActionId"            
        ]
    },
    {
        "name": 'legalEmployersLov',
        "api": '/hcmRestApi/resources/11.13.18.05/legalEmployersLov',
        "fields": [
            "OrganizationId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "Name",
            "LegislationCode",
            "PayrollStatutoryUnitId"        
        ]
    },
    {
        "name": 'hcmBusinessUnitsLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/hcmBusinessUnitsLOV',
        "fields": [
            "BusinessUnitId",
            "Name",
            "Status"
        ]
    },
    {
        "name": 'currenciesLOV',
        "api": '/fscmRestApi/resources/11.13.18.05/currenciesLOV',
        "fields": [
            "CurrencyCode",
            "Name",
            "Description",
            "EnabledFlag",
            "StartDateActive",
            "EndDateActive",
            "ActiveDate",
            "CurrencyFormat",
            "CurrencyFormatWithSymbol",
            "CurrencyFormatWithCode",
            "IssuingTerritoryCode",
            "Symbol",
            "Precision",
            "ExtendedPrecision",
            "CurrencyFlag"        
        ]
    },
    {
        "name": 'commonLookupsLOV',
        "api": '/fscmRestApi/resources/11.13.18.05/commonLookupsLOV',
        "fields": [
            "LookupType",
            "LookupCode",
            "Meaning",
            "Description",
            "Tag",
            "LegislationCode"
        ]
    },
    {
        "name": 'departmentsLov',
        "api": '/hcmRestApi/resources/11.13.18.05/departmentsLov',
        "fields": [
            "OrganizationId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "Name",
            "Title",
            "Status",
            "LocationId",
            "LocationCode",
            "LocationName",
            "SetId",
            "SetCode",
            "SetName"
        ]
    },
    {
        "name": 'territoriesLOV',
        "api": '/fscmRestApi/resources/11.13.18.05/territoriesLOV',
        "fields": [
            "TerritoryCode",
            "TerritoryShortName",
            "Description",
            "EnabledFlag",
            "ObsoleteFlag"
        ]
    },
    {
        "name": 'salaryBasisLov',
        "api": '/hcmRestApi/resources/11.13.18.05/salaryBasisLov',
        "fields": [
            "SalaryBasisName",
            "SalaryBasisId",
            "FrequencyCode",
            "FrequencyName",
            "Code",
            "Status",
            "SalaryBasisType",
            "ComponentUsage",
            "AnnualizationFactor",
            "SalaryAmountScale",
            "GradeRateId",
            "InputCurrencyCode",
            "ElementTypeId",
            "LegislativeDataGroupId",
            "UseAtRelationshipLevel",
            "UseAtTermsLevel",
            "UseAtAssignmentLevel"
        ]
    },
    {
        "name": 'rolesLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/rolesLOV',
        "fields": [
            "RoleId",
            "RoleName",
            "RoleCode",
            "Description",
            "ActiveFlag",
            "AbstractRole",
            "DataRole",
            "JobRole",
            "DutyRole",
            "DelegationAllowed",
            "ExternalRole",
            "ObjectVersionNumber"
        ]
    },
    {
        "name": 'benefitPlansLOV',
        "api": '/hcmRestApi/resources/11.13.18.05/benefitPlansLOV',
        "fields": [
            "PlanId",
            "Name",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "ShortCode",
            "ShortName",
            "WebAddress",
            "ObjectVersionNumber",
            "CreatedBy",
            "CreationDate",
            "LastUpdateDate",
            "LastUpdatedBy"
        ]
    },
    {
        "name": "lifeEventsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/lifeEventsLOV",
        "fields": [
            "LifeEventReasonId",
            "GlobalFlag",
            "SelectableSelfServiceCode",
            "EventTypeCode",
            "LifeEventName",
            "LegalEntityId"
        ]
    },
    {
        "name": "assignmentStatusTypesLov",
        "api": "/hcmRestApi/resources/11.13.18.05/assignmentStatusTypesLov",
        "fields": [
            "AssignmentStatusTypeId",
            "UserStatus",
            "AssignmentStatusCode",
            "HRStatus",
            "PayStatus",
            "StartDate",
            "EndDate"
        ]
    },
    {
        "name": "gradeLaddersLov",
        "api": "/hcmRestApi/resources/11.13.18.05/gradeLaddersLov",
        "fields": [
            "GradeLadderId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "Name",
            "ActiveStatus",
            "GradeSetId",
            "GradeTypeCode",
            "GradeType",
            "SetId",
            "SetCode",
            "SetName"
        ]
    },
    {
        "name": "locationsV2",
        "api": "/hcmRestApi/resources/11.13.18.05/locationsV2",
        "fields": [
            "LocationId",
            "LocationCode",
            "LocationName",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "ActionReasonCode",
            "ActionReason",
            "ActiveStatus",
            "ActiveStatusMeaning",
            "SetId",
            "SetCode",
            "SetName",
            "Description",
            "InventoryOrganizationId",
            "InventoryOrganizationName",
            "OfficialLanguageCode",
            "OfficialLanguageMeaning",
            "EmailAddress",
            "GeoHierarchyNodeCode",
            "GeoHierarchyNodeName",
            "MainPhoneCountryCode",
            "MainPhoneAreaCode",
            "MainPhoneNumber",
            "MainPhoneExtension",
            "FaxCountryCode",
            "FaxAreaCode",
            "FaxNumber",
            "FaxExtension",
            "OtherPhoneCountryCode",
            "OtherPhoneAreaCode",
            "OtherPhoneNumber",
            "OtherPhoneExtension",
            "ShipToSiteFlag",
            "ShipToLocationId",
            "ShipToLocationCode",
            "ShipToLocationName",
            "OfficeSiteFlag",
            "BillToSiteFlag",
            "ReceivingSiteFlag",
            "DesignatedReceiverId",
            "DesignatedReceiverNumber",
            "DesignatedReceiverName",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate",
            "GradeLadderId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "Name",
            "ActiveStatus",
            "GradeSetId",
            "GradeTypeCode",
            "GradeType",
            "SetId",
            "SetCode",
            "SetName"
        ]
    },
    {
        "name": "valueSets",
        "api": "/fscmRestApi/resources/11.13.18.05/valueSets",
        "fields": [
            "ValueSetId",
            "ModuleId",
            "ValueSetCode",
            "Description",
            "ValidationType",
            "ValueDataType",
            "ValueSubtype",
            "ProtectedFlag",
            "MaximumLength",
            "Precision",
            "Scale",
            "UppercaseOnlyFlag",
            "ZeroFillFlag",
            "SecurityEnabledFlag",
            "DataSecurityObjectName",
            "MinimumValue",
            "MinimumValueNumber",
            "MinimumValueDate",
            "MinimumValueTimestamp",
            "MaximumValue",
            "MaximumValueNumber",
            "MaximumValueDate",
            "MaximumValueTimestamp",
            "IndependentValueSetId",
            "IndependentValueSetCode",
            "CreationDate",
            "CreatedBy",
            "LastUpdateDate",
            "LastUpdatedBy"
        ]
    },
    {
        "name": "atlasCompany",
        "api": "/fscmRestApi/resources/11.13.18.05/valueSets/UN_CHR_ATLAS_COMPANY/child/values",
        "fields": [
            "ValueId",
            "IndependentValue",
            "IndependentValueNumber",
            "IndependentValueDate",
            "IndependentValueTimestamp",
            "Value",
            "ValueNumber",
            "ValueDate",
            "ValueTimestamp",
            "TranslatedValue",
            "Description",
            "EnabledFlag",
            "StartDateActive",
            "EndDateActive",
            "SortOrder",
            "SummaryFlag",
            "DetailPostingAllowed",
            "DetailBudgetingAllowed",
            "AccountType",
            "ControlAccount",
            "ReconciliationFlag",
            "FinancialCategory",
            "ExternalDataSource",
            "CreationDate",
            "CreatedBy",
            "LastUpdateDate",
            "LastUpdatedBy"
        ]
    }
    

    


];



exports.authConfigs = authConfigs;
exports.csvConfigs = csvConfigs;