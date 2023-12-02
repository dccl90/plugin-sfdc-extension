# SFDC Extension for Twilio Flex

This plugin loads the Salesforce Classic Console toolkit JavaScript library for use within Flex.

## Functionality
This plugin will remove the popout option from the Open CTI adapter when a call is active.

![Dec-02-2023 23-50-52](https://github.com/dccl90/plugin-sfdc-extension/assets/25923929/aa3d69d5-916f-48bb-95a2-6d5cb069464d)



## Setup Twilio CLI and Flex Plugin Extension

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

