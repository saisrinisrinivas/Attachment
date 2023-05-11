const ticketresponse_status= 
    [
        {
        id: '10104',
        key: 'SAP-6'

        },
        {
        id: '10104',
        key: 'SAP-6'
        },
        {
            description : "400 Bad request"
        },
        {
            description: "401 Unauthorized"
        },
        {
            description: "403 Captcha blocked"
        },
        {
            description: "404 Not Found"
        },
        {
            description: "500 Internal Server error"
        },
        {
            description: "503 Service unavailable"
        },
        {
            description: "504 Gateway Timeout"
        },
        {
            description: "504 Gateway timeout"
        },
    ]; 


const swaggerDocumentation = {

    openapi : "3.0.0",

    info : {

        title: "API documentation",
        version: "0.0.1",

    },

    tags: [

        {

            name: "ITSM tool",
            description:"API endpoints",

        },
    ],

    paths: {
        "/Ticket/API/Create_Ticket" : {
            post: {
                tags : ["ITSM tool"],
                description : "Sending tickets to JIRA",
                requestBody: {
                    content: {
                        "application/json" :{
                            schema : {
                                type: "array",
                                items: {
                                  properties: 
                                 {
                                   MANDT : {

                                    type: "integer",
                                    description: "MANDT id",
                                    example : "007",

                                    },
                                    RFC : {

                                        type: "integer",
                                        description: "RFC ",
                                        example : "",
    
                                        },
                                    REQ_NO : {

                                        type: "integer",
                                        description: "This is request number",
                                        example : "0000000021",
        
                                        },
                                    ALERT_SEND_DATE : {

                                    type: "string",
                                    description: "Alert send date",
                                    example : "2023-03-10",
            
                                            },
                                    ALERT_SEND_TIME : {
                                        type: "string",
                                        description: "Alert send time",
                                        example : "12:25:15",

                                        },
                                    EVENT_ID : {
                                        type: "string",
                                        description: "Event ID created",
                                        example : "SAP007",
    
                                            },
                                    EVENT_DESCRIPTION : {
                                        type: "string",
                                        description: "Description of the event",
                                        example : "To higlight PO creation and approval done by the same user",
        
                                            },
                                    PROGRAM_NAME : {
                                        type: "string",
                                        description: "",
                                        example : "ZBUS001",
                
                                        },
                                    PROGRAM_NAME : {
                                            type: "string",
                                            description: "Severity of the ticket",
                                            example : "HIGH",
                    
                                        },
                                    RISK_DESCRIPTION : {
                                        type: "string",
                                        description: "Description about the risk",
                                        example : "Asset accessed irregularly by user",
                    
                                            },
                                    EVENT_CLASS : {
                                        type: "string",
                                        description: "Event class",
                                        example : "SECURITY",
                        
                                    },

                                    CATEGORIES: {
                                        type: "string",
                                        description: "",
                                        example:"SOD VIOLATIONS",

                                    },
                                    RISK_OWNER: {
                                        type: "string",
                                        description: "Owner associated with the risk",
                                        example:"ETD_ALERT",

                                    },
                                    ALERT_CLOSED_DATE: {
                                        type: "string",
                                        description: "Date on which the alert has been closed",
                                        example:"2023-03-11",

                                    },
                                    ALERT_STATUS: {
                                        type: "string",
                                        description: "Status of the alert",
                                        example:"SUCCESS",

                                    },
                                    STATUS: {
                                        type: "string",
                                        description: "Status of the alert",
                                        example:"OPEN",

                                    },
                                    INCIDENT_NO: {
                                        type: "integer",
                                        description: "Incident number",
                                        example:"",

                                    },


                                },
                            },
                            },
                        },
                    
                    },


                },
                responses:{

                    200 : 
                    {
                        description : "Success",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[0],
                                    },
       
                                },
                            },
                        },
                    },
                    201 : 
                    {
                        description : "Created",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[1],
                                    },
       
                                },
                            },
                        },
                    },
                    400 : 
                    {
                        description : "Bad request",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[2],
                                    },
       
                                },
                            },
                        },
                        
                    },
                    401 : 
                    {
                        description : "Unauthorized",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[3],
                                    },
       
                                },
                            },
                        },
                       
                        
                    },
                    403 : 
                    {
                        description : "Forbidden",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[4],
                                    },
       
                                },
                            },
                        },
                    },
                    404 : 
                    {
                        description : "Not Found",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[5],
                                    },
       
                                },
                            },
                        },
                        
                    },
                    
                    500 : 
                    {
                        description : "Internal server error",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[6],
                                    },
       
                                },
                            },
                        },
                        
                    },
                    503 : 
                    {
                        description : "Service Unavailable",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[7],
                                    },
       
                                },
                            },
                        },
                        
                    },
                    504 : 
                    {
                        description : "Gateway timeout",
                        content: 
                        {
                            "application/json" : 
                            {
                                schema : 
                                {
                                    type: "array",
                                    items: {
                                    example : ticketresponse_status[8],
                                    },
       
                                },
                            },
                        },
                        
                    },
                },
            },
        },
        
    },

};

module.exports = swaggerDocumentation;