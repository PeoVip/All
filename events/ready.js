const { ActivityType } = require('discord.js');
const colors = require('../UI/colors/colors');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
  
        const activities = [
            { name: 'Sếch Cung Xuân📌', type: ActivityType.Watching },
            { name: 'Nghịch Ti Ép Ti🔥', type: ActivityType.Playing },
            { name: 'Penhfgold_👑', type: ActivityType.Streaming },
            { name: 'Oep King - VIP Xì Líp💀', type: ActivityType.Listening },
        ];

     
        const statuses = ['online', 'idle', 'dnd'];

     
        let currentActivityIndex = 0;
        let currentStatusIndex = 0;

 
        function setActivityAndStatus() {
        
            const activity = activities[currentActivityIndex];
            const status = statuses[currentStatusIndex];

          
            client.user.setPresence({
                activities: [activity],
                status: status,
            });

            
            currentActivityIndex = (currentActivityIndex + 1) % activities.length;
            currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        }

        
        setTimeout(() => {
            setActivityAndStatus();
            console.log('\n' + '─'.repeat(40));
            console.log(`${colors.magenta}${colors.bright}🔗  ACTIVITY STATUS${colors.reset}`);
            console.log('─'.repeat(40));
            console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Bot Activity Set Successful ✅');
        }, 2000);

        setInterval(() => {
            setActivityAndStatus();
        }, 6000);
    },
};
