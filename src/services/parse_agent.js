/* eslint-disable prettier/prettier */
const fs = require("fs");
const path = require("path")

const dfPath = path.resolve(__dirname, "../../speech-assets/dialogflow");

const agentDetails = {
    "description": "Helps find places to eat out in Melbourne.",
    "language": "en",
    "shortDescription": "",
    "examples": "",
    "linkToDocs": "",
    "activeAssistantAgents": [
      "smalltalk-domain-on"
    ],
    "disableInteractionLogs": false,
    "disableStackdriverLogs": true,
    "googleAssistant": {
      "googleAssistantCompatible": false,
      "project": "reactpageagent-sjgrax",
      "welcomeIntentSignInRequired": false,
      "startIntents": [],
      "systemIntents": [],
      "endIntentIds": [],
      "oAuthLinking": {
        "required": false,
        "providerId": "",
        "authorizationUrl": "",
        "tokenUrl": "",
        "scopes": "",
        "privacyPolicyUrl": "",
        "grantType": "AUTH_CODE_GRANT"
      },
      "voiceType": "MALE_1",
      "capabilities": [],
      "env": "",
      "protocolVersion": "V2",
      "autoPreviewEnabled": false,
      "isDeviceAgent": false
    },
    "defaultTimezone": "Australia/Sydney",
    "webhook": {
      "url": "https://9dmqks2yzk.execute-api.us-east-1.amazonaws.com/dev/googleAction",
      "username": "",
      "headers": {},
      "available": true,
      "useForDomains": false,
      "cloudFunctionsEnabled": false,
      "cloudFunctionsInitialized": false
    },
    "isPrivate": true,
    "customClassifierMode": "use.after",
    "mlMinConfidence": 0.3,
    "supportedLanguages": [],
    "onePlatformApiVersion": "v2",
    "analyzeQueryTextSentiment": false,
    "enabledKnowledgeBaseNames": [],
    "knowledgeServiceConfidenceAdjustment": -0.4,
    "dialogBuilderMode": false,
    "baseActionPackagesUrl": ""
  }

  fs.writeFileSync(`${dfPath}/production/agent.json`, JSON.stringify(agentDetails, null, 2))
  fs.writeFileSync(`${dfPath}/staging/agent.json`, JSON.stringify(agentDetails, null, 2))