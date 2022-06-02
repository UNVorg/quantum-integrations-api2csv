const configs = require('./config.json');

function authConfigs() {
    return configs;
}

const csvEntityConfigs = [
    {
        "name": "allVolunteerPersons",
        "api": "/hcmRestApi/resources/11.13.18.05/workers?q=workRelationships.assignments.UserPersonTypeId=300000002590071",
        "fields": [
            "PersonId",
            "PersonNumber",
            "DateOfBirth",
            "DateOfDeath",
            "CountryOfBirth",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate"
        ]
    },
    {
        "name": "addresses",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "AddressId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "AddressLine1",
            "AddressLine2",
            "TownOrCity",
            "Country" ,
            "PostalCode",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate",
            "PersonAddrUsageId",
            "AddressType",
            "PrimaryFlag"
        ]
    },
    {
        "name": "emails",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "EmailAddressId",
            "EmailType",
            "EmailAddress",
            "FromDate",
            "ToDate",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate",
            "PrimaryFlag"            
        ]
    }, 
    {
        "name": "legislativeInfo",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "PersonLegislativeId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "LegislationCode",
            "Gender",
            "MaritalStatus",
            "MaritalStatusChangeDate",
            "HighestEducationLevel",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate"
        ]
    },
    {
        "name": "names",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "PersonNameId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "LegislationCode",
            "LastName",
            "FirstName",
            "Title",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate"            
        ]
    },
    {
        "name": "workRelationships",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "PeriodOfServiceId",
            "LegislationCode",
            "LegalEntityId",
            "LegalEmployerName",
            "WorkerType",
            "PrimaryFlag",
            "StartDate",
            "WorkerNumber",
            "TerminationDate",
            "NotificationDate",
            "LastWorkingDate",
            "RevokeUserAccess",
            "RecommendedForRehire",
            "RecommendationReason",
            "RecommendationAuthorizedByPersonId",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate"            
        ]
    },
    {
        "name": "phones",
        "api": "/",
        "fields": [
            "PersonId",
            "PersonNumber",
            "PhoneId",
            "PhoneType",
            "LegislationCode",
            "CountryCodeNumber",
            "AreaCode",
            "PhoneNumber",
            "Extension",
            "FromDate",
            "ToDate",
            "CreatedBy",
            "CreationDate",
            "LastUpdatedBy",
            "LastUpdateDate"
        ]
    }
]

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
    },
    {
        "name": "legislativeDataGroupsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/legislativeDataGroupsLOV",
        "fields": [
            "LegislativeDataGroupId",
            "Name",
            "LegislationCode",
            "DefaultCurrencyCode",
            "CostAllocationIdFlexNumber"
        ]
    }
    ,
    {
        "name": "gradeStepsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/gradeStepsLOV",
        "fields": [
            "GradeStepId",
            "Name",
            "Sequence",
            "GradeId",
            "EffectiveStartDate",
            "EffectiveEndDate"
        ]
    }
    ,
    {
        "name": "eligibilityProfilesLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/eligibilityProfilesLOV",
        "fields": [
            "AsmtToUseCd",
            "BnftCagrPrtnCd",
            "EligyPrflId",
            "Description",
            "ProfileType",
            "StatCd",
            "Name"
        ]
    },
    {
        "name": "organizationTreeNodesLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/organizationTreeNodesLOV",
        "fields": [
            "OrganizationId",
            "OrganizationName",
            "EffectiveStartDate",
            "EffectiveEndDate"
        ]
    }
    ,
    {
        "name": "organizationTreeNodesLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/organizationTreeNodesLOV",
        "fields": [
            "OrganizationId",
            "OrganizationName",
            "EffectiveStartDate",
            "EffectiveEndDate"
        ]
    }
    ,
    {
        "name": "departmentTreeNodesLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/departmentTreeNodesLOV",
        "fields": [
            "OrganizationId",
            "DepartmentName",
            "EffectiveStartDate",
            "EffectiveEndDate"
        ]
    },
    {
        "name": "payrollElementDefinitionsLOV",
        "api":"/hcmRestApi/resources/11.13.18.05/payrollElementDefinitionsLOV?orderBy=ElementTypeId",
        "fields": [
            "ElementTypeId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "ElementName",
            "ReportingName",
            "UseAtRelationshipLevel",
            "UseAtAssignmentLevel",
            "ProcessingType",
            "LegislativeDataGroupId",
            "LegislationCode",
            "InputCurrencyCode",
            "OutputCurrencyCode",
            "PrimaryClassificationName",
            "LegislativeDataGroupName",
            "PrimaryClassificationId",
            "SecondaryClassificationId",
            "SecondaryClassificationName",
            "PersonId"
        ]

    },
    {
        "name": "payrollDefinitionsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/payrollDefinitionsLOV",
        "fields": [
            "PayrollId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "PayrollName",
            "ReportingName",
            "LegislativeDataGroupId",
            "LegislativeDataGroupName",
            "ConsolidationSetId",
            "ConsolidationSetName",
            "PeriodType"
        ]
    },
    {
        "name": "payrollTimeDefinitionsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/payrollTimeDefinitionsLOV?orderBy=TimeDefinitionId",
        "fields": [
            "TimeDefinitionId",
            "DefinitionType",
            "DefinitionName",
            "LegislativeDataGroupId",
            "Name"
        ]
    },
    {
        "name": "payrollTimePeriodsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/payrollTimePeriodsLOV?orderBy=TimePeriodId",
        "fields": [
            "TimePeriodId",
            "StartDate",
            "EndDate",
            "PeriodCategory",
            "PeriodName",
            "PeriodNumber",
            "PeriodType",
            "RegularProcessDate",
            "RegularEarnDate",
            "DefaultPaydate",
            "PayslipViewDate",
            "PayrollName",
            "PayrollId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "LegislativeDataGroupId",
            "LegislativeDataGroupName"
        ]
    },
    {
        "name": "payrollInputValuesLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/payrollInputValuesLOV?orderBy=InputValueId",
        "fields": [
            "InputValueId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "InputValueName",
            "DisplaySequence",
            "UOM",
            "ReservedInputValue",
            "ElementName",
            "ElementTypeId",
            "ElementEffectiveStartDate",
            "ElementEffectiveEndDate",
            "LegislativeDataGroupName",
            "LegislationCode",
            "LegislativeDataGroupId"
        ]
    },
    {
        "name": "payrollStatutoryUnitsLOV",
        "api": "/hcmRestApi/resources/11.13.18.05/payrollStatutoryUnitsLOV",
        "fields": [
            "OrganizationId",
            "EffectiveStartDate",
            "EffectiveEndDate",
            "PayrollStatutoryUnitName"
        ]
    }

];



exports.authConfigs = authConfigs;
exports.csvConfigs = csvConfigs;
exports.csvEntityConfigs = csvEntityConfigs;