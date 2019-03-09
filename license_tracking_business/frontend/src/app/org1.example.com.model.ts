import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org1.example.com.model{
   export enum Gender {
      Male,
      Female,
      Other,
   }
   export enum Licensetypes {
      Rto,
      permit,
      Construction,
      Shop,
      pet,
      Gun,
   }
   export enum LicenseOrganizationtype {
      Rto,
      permit,
      Construction,
      Shop,
      pet,
      Gun,
   }
   export enum caseCondition {
      Low,
      Medium,
      Serious,
   }
   export enum SuspensionOrRevocation {
      Suspension,
      Revocation,
   }
   export class TypeOfCase {
      Description: string;
      fine: number;
   }
   export enum Currency {
      Dollar,
      Rupee,
      Cent,
   }
   export enum Performance {
      Worst,
      Average,
      Excellent,
   }
   export enum Result {
      pass,
      fail,
   }
   export class License extends Asset {
      LicenseId: string;
      name: string;
      MobileNumber: number;
      BloodGroup: string;
      gender: Gender;
      DateofBirth: Date;
      Nationality: string;
      State: string;
      city: string;
      street: string;
      doorno: number;
      Zipcode: number;
      Type: Licensetypes;
      ExpiryDate: Date;
      IsApplicationAccepted: boolean;
      IsLicenseUpdated: boolean;
      IsLicenseRenewed: boolean;
      DocType: string;
      DocId: string;
      ApplicationFeePaid: number;
      Used: Currency;
      test1_perf: Performance;
      test1_score: number;
      test1_res: Result;
      test2_perf: Performance;
      test2_score: number;
      test2_res: Result;
      test3_perf: Performance;
      test3_score: number;
      test3_res: Result;
      LicenseIssuedTimeStamp: Date;
      LicenseUpdatedTime: Date;
      timeOfFilingTheCase: Date;
      caseType: TypeOfCase;
      condition: caseCondition;
      punishmentType: SuspensionOrRevocation;
      NoOfDaysSuspended: number;
      TimeOfSuspensionAndRevocation: Date;
      LH: LicenseHolder;
   }
   export class LicenseOrganization extends Participant {
      LicenseOrgID: string;
      Type: LicenseOrganizationtype;
      Nationality: string;
      Location: string;
      username: string;
      password: string;
   }
   export class LicenseHolder extends Participant {
      LicenseHolderId: string;
      LicenseHolderName: string;
      username: string;
      password: string;
   }
   export class RuleViolationDept extends Participant {
      DeptId: string;
      DeptName: string;
      username: string;
      password: string;
   }
   export abstract class trackLicense extends Transaction {
      LicenseId: string;
   }
   export class applyForLicense extends Transaction {
      LicenseId: string;
      ExpiryDate: Date;
      name: string;
      MobileNumber: number;
      BloodGroup: string;
      gender: Gender;
      DateofBirth: Date;
      Nationality: string;
      State: string;
      city: string;
      street: string;
      doorno: number;
      Zipcode: number;
      Type: Licensetypes;
      DocType: string;
      DocId: string;
      ApplicationFeePaid: number;
      Used: Currency;
      LH: LicenseHolder;
   }
   export class applicationAcceptance extends trackLicense {
      org: LicenseOrganization;
      IsApplicationAccepted: boolean;
   }
   export class postWrittenTestDetail extends trackLicense {
      org: LicenseOrganization;
      test1_perf: Performance;
      test1_score: number;
      test1_res: Result;
   }
   export class postSimulatorTestDetail extends trackLicense {
      org: LicenseOrganization;
      test2_perf: Performance;
      test2_score: number;
      test2_res: Result;
   }
   export class postOnRoadTestDetail extends trackLicense {
      org: LicenseOrganization;
      test3_perf: Performance;
      test3_score: number;
      test3_res: Result;
   }
   export class supplyLicense extends trackLicense {
      org: LicenseOrganization;
      LicenseIssuedTimeStamp: Date;
   }
   export class applyForUpdateLicense extends trackLicense {
      LH: LicenseHolder;
      name: string;
      MobileNumber: number;
      State: string;
      city: string;
      street: string;
      doorno: number;
      Zipcode: number;
   }
   export class isLicenseUpdated extends trackLicense {
      org: LicenseOrganization;
      IsLicenseUpdated: boolean;
      LicenseUpdatedTime: Date;
   }
   export class applyRenewLicense extends trackLicense {
      LH: LicenseHolder;
   }
   export class isLicenseRenewed extends trackLicense {
      org: LicenseOrganization;
      IsLicenseRenewed: boolean;
   }
   export class fileACase extends trackLicense {
      caseFiler: RuleViolationDept;
      timeOfFilingTheCase: Date;
      caseType: TypeOfCase;
      condition: caseCondition;
   }
   export class postSuspensionOrRevocation extends trackLicense {
      executor: RuleViolationDept;
      condition: caseCondition;
      punishmentType: SuspensionOrRevocation;
      NoOfDaysSuspended: number;
      TimeOfSuspensionAndRevocation: Date;
   }
   export class FileACase extends Event {
      caseFiler: RuleViolationDept;
      timeOfFilingTheCase: Date;
      caseType: TypeOfCase;
      condition: caseCondition;
   }
   export class PostSuspensionOrRevocation extends Event {
      executor: RuleViolationDept;
      condition: caseCondition;
      punishmentType: SuspensionOrRevocation;
      NoOfDaysSuspended: number;
      TimeOfSuspensionAndRevocation: Date;
   }
// }
