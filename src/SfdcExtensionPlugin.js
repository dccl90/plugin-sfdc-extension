import React from 'react';
import { loadScript } from './helpers/load-scripts';
import { FlexPlugin } from '@twilio/flex-plugin';


const PLUGIN_NAME = 'SfdcExtensionPlugin';

export default class SfdcExtensionPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */

  async init(flex, manager) {
    const url = window.location.ancestorOrigins[0];

    await loadScript(url);
    
    function checkResult(result) {
      if (result.success) { 
        console.log("### Result:", result.success);
      } else {
        console.log("### Result:", result.success);
      }
    }

    manager.voiceClient.on("incoming", (call) => {
        call.on("accept", (call) => {
          window.sforce.console.setCustomConsoleComponentPopoutable(false, checkResult);
        });

        call.on("disconnect", (call) => {
          window.sforce.console.setCustomConsoleComponentPopoutable(true, checkResult);
        })
    })
  }
}