

/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
 * Transaction to add a license into blockchain 
 * @param {org1.example.com.model.applyForLicense} tx - Input from user
 * @transaction
 */
async function applyForLicense(tx){
    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseHolder');

    var NS = 'org1.example.com.model';

    var License = getFactory().newResource(NS,'License',tx.LicenseId);
    
    License.name = tx.name;
    License.gender = tx.gender;
    License.DateofBirth = tx.DateofBirth;
    License.Type = tx.Type;
    License.BloodGroup = tx.BloodGroup;
    License.MobileNumber = tx.MobileNumber;
    License.Nationality = tx.Nationality;
    License.ExpiryDate = tx.ExpiryDate;
    License.State = tx.State;
    License.city = tx.city;
    License.street = tx.street;
    License.doorno = tx.doorno;
    License.Zipcode = tx.Zipcode;
    License.LH = tx.LH;
    License.DocType = tx.DocType;
    License.DocId = tx.DocId;
    License.ApplicationFeePaid = tx.ApplicationFeePaid;
    License.Used = tx.Used;


    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');
    await assetRegistry.add(License);
    await participantRegistry.update(tx.LH);
   

}



/**
 * Transaction to post whether license applier application is accepted or not
 * @param {org1.example.com.model.applicationAcceptance} tx - Input from User
 * @transaction
 */
async function applicationAcceptance(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');


    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists){
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {
           License.IsApplicationAccepted = tx.IsApplicationAccepted;
        }
        else
        {
            throw new Error('You are not allowed to update others license other than your dept type');
        }

    }
    else
    {
        throw new Error('The License you specified does not exist!');
    }
}



/**
 * Transaction to post the written test details of a license
 * @param {org1.example.com.model.postWrittenTestDetail} tx - Input from User
 * @transaction
 */
async function postWrittenTestDetail(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists){
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {
            License.test1_perf = tx.test1_perf;
            License.test1_score = tx.test1_score;
            License.test1_res = tx.test1_res;
            await participantRegistry.update(tx.org);
            await assetRegistry.update(License);
        }
        else
        {
            throw new Error('You are not allowed to update others license other than your dept type');
        }

    }
    else
    {
        throw new Error('The License you specified does not exist!');
    }
}



/**
 * Transaction to post the simulator test details of a license
 * @param {org1.example.com.model.postSimulatorTestDetail} tx - Input from User
 * @transaction
 */
async function postSimulatorTestDetail(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists){
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {

            License.test2_perf = tx.test2_perf;
            License.test2_score = tx.test2_score;
            License.test2_res = tx.test2_res;

            await participantRegistry.update(tx.org);
            await assetRegistry.update(License);
        }
        else
        {
            throw new Error('You are not allowed to update others license other than your dept type');
        }

    }
    else
    {
        throw new Error('The License you specified does not exist!');
    }
}



/**
 * Transaction to post onroad test detail of a license
 * @param {org1.example.com.model.postOnRoadTestDetail} tx - Input from User
 * @transaction
 */
async function postOnRoadTestDetail(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists){
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {

            License.test3_perf = tx.test3_perf;
            License.test3_score = tx.test3_score;
            License.test3_res = tx.test3_res;

            await participantRegistry.update(tx.org);
            await assetRegistry.update(License);
        }
        else
        {
            throw new Error('You are not allowed to update others license other than your dept type');
        }

    }
    else
    {
        throw new Error('The License you specified does not exist!');
    }
}



/**
 * Transaction to issue the license document completion - All process in license application is completed
 * @param {org1.example.com.model.supplyLicense} tx - Input from User
 * @transaction
 */
async function supplyLicense(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {
         License.LicenseIssuedTimeStamp = tx.LicenseIssuedTimeStamp;          
        }
        else{
            throw new Error('You are not allowed to update others license other than your dept type');
        }

    }
    else{
        throw new Error('The License you specified does not exist!');
    }
}//


/**
 * Transaction to update a license and store it into ledger
 * @param {org1.example.com.model.applyForUpdateLicense} tx - Input from User
 * @transaction
 */
async function applyForUpdateLicense(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseHolder');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        

            License.name = tx.name;
            License.MobileNumber = tx.MobileNumber;
            License.State = tx.State;
            License.city = tx.city;
            License.street = tx.street;
            License.doorno = tx.doorno;
            License.Zipcode = tx.Zipcode;
            await participantRegistry.update(tx.LH);
            await assetRegistry.update(License);
       

    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}


/**
 * Transaction to renew a license and store it into world state
 * @param {org1.example.com.model.isLicenseUpdated} tx - Input from User
 * @transaction
 */
async function isLicenseUpdated(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {
            License.IsLicenseUpdated = tx.IsLicenseUpdated;
            License.LicenseUpdatedTime = tx.LicenseUpdatedTime;
           
            await participantRegistry.update(tx.org);
            await assetRegistry.update(License);
        }
        else{
            throw new Error('You are not allowed to renew others license other than your dept type');
        }

    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}

/**
 * Transaction to renew a license and store it into world state
 * @param {org1.example.com.model.applyRenewLicense} tx - Input from User
 * @transaction
 */
async function applyRenewLicense(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseHolder');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
       
           await assetRegistry.update(License);
        
    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}


/**
 * Transaction to renew a license and store it into world state
 * @param {org1.example.com.model.isLicenseRenewed} tx - Input from User
 * @transaction
 */
async function isLicenseRenewed(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.LicenseOrganization');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        if(tx.org.Type === License.Type)
        {
            License.IsLicenseRenewed = tx.IsLicenseRenewed;//Boolean
           
            await participantRegistry.update(tx.org);
            await assetRegistry.update(License);
        }
        else{
            throw new Error('You are not allowed to renew others license other than your dept type');
        }

    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}

/**
 * Transaction to file a case on a license
 * @param {org1.example.com.model.fileACase} tx - Input from User
 * @transaction
 */
async function fileACase(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.RuleViolationDept');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);

    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        License.timeOfFilingTheCase = tx.timeOfFilingTheCase;
        License.caseType = tx.caseType;
        License.condition = tx.condition;

        // Create and emit a FileACase event
        var event = getFactory().newEvent('org1.example.com.model', 'FileACase');
        event.caseFiler = tx.caseFiler;
        event.timeOfFilingTheCase = tx.timeOfFilingTheCase;
        event.caseType = tx.caseType;
        event.condition = tx.condition;
        emit(event);

        await participantRegistry.update(tx.caseFiler);
        await assetRegistry.update(License);

    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}

/**
 * Transaction to suspend or revocate a license
 * @param {org1.example.com.model.postSuspensionOrRevocation} tx - Input from User
 * @transaction
 */
async function postSuspensionOrRevocation(tx){

    const participantRegistry = await getParticipantRegistry('org1.example.com.model.RuleViolationDept');

    const assetRegistry = await getAssetRegistry('org1.example.com.model.License');

    const exists = await assetRegistry.exists(tx.LicenseId);
    if (exists) {
        const License = await assetRegistry.get(tx.LicenseId);
        License.TimeOfSuspensionAndRevocation= tx.TimeOfSuspensionAndRevocation;
        License.condition = tx.condition;
        License.punishmentType = tx.punishmentType;

        // Create and emit a SuspensionOrRevocation event
        var event = getFactory().newEvent('org1.example.com.model', 'PostSuspensionOrRevocation');
        event.executor = tx.executor;
        event.condition = tx.condition;
        event.punishmentType = tx.punishmentType;
        event.TimeOfSuspensionAndRevocation = tx.TimeOfSuspensionAndRevocation;


        if(tx.punishmentType === 'Suspension')
        {
            License.NoOfDaysSuspended = tx.NoOfDaysSuspended;
            event.NoOfDaysSuspended = tx.NoOfDaysSuspended;
        }

        emit(event);
        await participantRegistry.update(tx.executor);
        await assetRegistry.update(License);

    }
    else{
        throw new Error('The License you specified does not exist!');
    }

}










