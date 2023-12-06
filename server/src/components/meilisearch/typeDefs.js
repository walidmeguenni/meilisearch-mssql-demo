import gql from "graphql-tag";

export const meilisearchTypeDefs = gql`
  type MeiliSearch {
    id: ID
    SequenceNumber: String
    Type: String
    Priority: String
    HandlingResource: String
    Zone: String
    AgencyName: [String]
    DispatchGroup: String
    IncidentNumber: String
    PrimaryResponse: String
    CreationDate: String
    ClassificationName: String
    DispatcherDisplayName: String
    DispatcherLogonName: String
    CreationTime: [String]
    StatusTime: String
    IncidentCreationTime: String
    ResponseLocation: String
    RespAlarmLevel: Int
    PrimaryResource: String
    MilestoneName: String
    OriginName: String
    PersonCount: String
    Status: String
    ImportDateTime: String
    ResponseTypeCategory: String
    Dispatch: String
    Disposition: String
    Completion: String
    IsPrimaryUnit: String
    ResourceName: String
    ResourceDescription: String
    StationName: String
    XCoordinate: Float
    YCoordinate: Float
    AssignOdometerOut: [String]
    CallerName: String
    PhoneNumber: String
    PhoneNumberExt: String
    FreeFormatAddress: String
    ESN: String
    Near: String
    Age: String
    IsPhoneOwner: String
    Gender: String
    SIN: String
    TimeStamp1: String
    Info: String
    AgentName: String
    AgentDisplayName: String
    Workstation: String
    CommentTypeOID: String
  }
`;
