const { Plugin } = require("powercord/entities");

module.exports = class Token extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "token",
      description: "get toucan",
      usage: "{c}",
      executor: () => {
        // get the user token
        try {
          const token = localStorage.getItem("token")?.replace(/\"/g, "")
          
          if (!token) {
            return {
              send: false,
              result: "oh no toucan founded!!!1 https://cdn.discordapp.com/attachments/902548302212501534/902681443749208104/jWEKw.png",
            }
          }
          
          return {
            send: false,
            result: "```"+token+"```"
          };
        } catch (e) {
          return {
            send: false,
            result: `Error: ${e}`
          };
        }
      },
    });
  }
  
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("token");
  }
}
