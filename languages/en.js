const enLang = {
    error: 'An error occurred while processing your command.',
    commandDisabled: 'This command is currently disabled.',
    //channelinfo.js
    channelInfo: "Channel Information",
    channelName: "Channel Name",
    channelID: "Channel ID",
    channelType: "Type",
    channelCreatedAt: "Created At",
    channelTopic: "Topic",
    channelNSFW: "NSFW",
    channelPosition: "Position",
    channelCategory: "Category",
    channelNone: "None",
    channelYes: "Yes",
    channelNo: "No",
    channelMentionValid: "Please mention a valid channel.",
    channelInfoDescription: 'Show detailed information about a channel',
    channelOptionDescription: 'The channel to get information about',
    channelMentionValid: 'Please mention a valid channel.',
    //invite.js
    inviteTitle: "Link mời Bot 🤖",
    inviteDescription: "Click [_Đây_]({inviteURL}) để mời bot vào Server Discord của bạn ⭐",
    inviteImageURL: "https://cdn.discordapp.com/attachments/1246408947708072027/1256597293323256000/invite.png?ex=668158ed&is=6680076d&hm=030c83f567ffdaf0bebb95e50baaec8bb8a8394fa1b7717cc43c3622447f58e3&",
    //ping.js
    pingDescription: "Ping!",
    pingTitle: "Bot có lag đâu mà check Ping! 📢",
    botLatency: "Độ trễ của Bot",
    apiLatency: "Độ trễ API",
  // Server info command
  serverInfoDescription: "Show detailed information about the server.",
  serverInfoTitle: "Server Info",
  serverInfoFields: {
      serverName: "Tên Server",
      serverOwner: "Chủ Server",
      serverOwnerId: "Owner ID",
      serverId: "Server ID",
      members: "Members",
      membersNonBots: "Non-Bot Members",
      bots: "Bot Members",
      serverBoosts: "Boosts",
      categories: "Categories",
      totalChannels: "Total Channels",
      textChannels: "Text Channels",
      voiceChannels: "Voice Channels",
      stageChannels: "Stage Channels",
      emojis: "Emojis",
      normalEmojis: "Normal Emojis",
      animatedEmojis: "Animated Emojis",
      stickers: "Stickers",
      roles: "Roles",
      serverCreatedOn: "Server Created On"
  },
  serverInfoError: "An error occurred while fetching server information.",
  supportServerLink: "https://discord.gg/mPkaJaYwcN",

  // For subcommands
  serverIconTitle: "Server Icon",
  serverBannerTitle: "Server Banner",
  serverNoBanner: "This server does not have a banner set.",
    // support.js
    supportDescription: "Support server of this Bot",
    supportTitle: "Support Server",
    supportServerLink: "https://discord.gg/mPkaJaYwcN",
    githubLink: "https://www.instagram.com/penhfgold_/",
    replitLink: "Penhfgold_",
    youtubeLink: "https://www.tiktok.com/@dodocpeo",
    supportIconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&',
    supportImageURL: 'https://media.discordapp.net/attachments/1330465076536414229/1348906508527865946/Picsart_25-03-11_13-32-43-331.jpg?ex=67d12a95&is=67cfd915&hm=05d5091f66b012d1abe1464f37d159dc5369a2768440d8e21c866e13ac7c9b57&=&format=webp&width=1872&height=669',
    supportDescriptionTitle: "Cần hỗ trợ vui lòng DM or Ping penhfgold_",
    followUsOn: "Follow tôi tại",
    discord: "Discord",
    github: "Instagram",
    replit: "Discord",
    youtube: "TikTok",
    // userinfo.js
    userinfoDescription: "Show detailed information about a user",
    userinfoTargetDescription: "The user to get information about",
    userinfoTitle: "👑 Thông tin người dùng",
    userinfoUsername: "Username",
    userinfoUserID: "User ID",
    userinfoJoinedDiscord: "Ngày tham gia Discord",
    userinfoJoinedServer: "Ngày tham gia Server Discord",
    userinfoRoles: "Roles",
    userinfoHighestRole: "Role cao nhất",
    userinfoIsBot: "BOT ?",
    userinfoYes: "Yes",
    userinfoNo: "No",
    userinfoNone: "None",
    userinfoAvatarDescription: "Display the user's avatar",
    userinfoAvatarTitle: "Avatar",
    userinfoBannerDescription: "Display the user's banner",
    userinfoBannerTitle: "Banner",
    userinfoNoBanner: "This user does not have a banner set.",
    // loop.js
    loopDescription: "Toggle looping for the current song or entire queue",
    loopModeDescription: 'Loop mode: "queue" or "song"',
    loopError: 'An error occurred while trying to toggle loop mode.',
    loopNoVoiceChannel: '**You need to be in a voice channel to control music playback!**',
    loopNoPermissions: 'I need the permissions to join and speak in your voice channel!',
    loopNoQueueTitle: "Oops!",
    loopNoQueue: '**There is no queue in this guild.**',
    loopTitle: "Loop",
    loopQueueEnabled: '**Looping mode enabled for the entire queue.**',
    loopSongEnabled: '**Looping mode enabled for the current song.**',
    loopDisabled: '**Looping mode disabled.**',
    loopFooterText: 'Distube Player',
    // nowplaying.js
    nowPlayingDescription: 'Show the currently playing song',
    nowPlayingNoVoiceChannel: '**You need to be in a voice channel to see what\'s playing!**',
    nowPlayingNoPermissions: 'I need the permissions to join and speak in your voice channel!',
    nowPlayingNoSongTitle: "Oops!",
    nowPlayingNoSong: 'There is no song currently playing.',
    nowPlayingTitle: "Now Playing..",
    nowPlayingDescriptionText: 'Here the information about current playing song.',
    nowPlayingFooterText: 'Distube Player',
    nowPlayingDuration: 'Duration',
    nowPlayingRequestedBy: 'Requested by',
    nowPlayingNoQueueTitle: "Oops!",
    nowPlayingNoQueue: '**There is no playing queue in this guild.**',
    nowPlayingError: 'An error occurred while fetching the current song.',
    // pause.js
    pauseDescription: 'Pause the current song',
    pauseNoVoiceChannel: '**You need to be in a voice channel to pause music!**',
    pauseNoPermissions: 'I need the permissions to join and speak in your voice channel!',
    pauseInProgress: '**Pausing the current song...**',
    pauseTitle: "Song Paused",
    pauseFooterText: 'Distube Player',
    pauseSuccess: '**The current song has been paused.**',
    pauseNoQueueTitle: "Oops!",
    pauseNoQueue: '**No song playing in the guild.**',
    pauseNotPausedTitle: "Oops!",
    pauseNotPaused: '**The music player is not paused.**',
    pauseAlreadyPausedTitle: "Oops!",
    pauseAlreadyPaused: '**The music player is already paused.**',
    pauseErrorTitle: "Oops!",
    pauseError: 'An error occurred while trying to pause the song.',
    // play.js
    playDescription: 'Play a song or playlist in your voice channel',
    playInputDescription: 'The link or name of the song or playlist',
    playNoInput: 'You need to provide the link or name of the song or playlist!',
    playNoVoiceChannel: 'You need to be in a voice channel to play music!',
    playNoPermissions: 'I need the permissions to join and speak in your voice channel!',
    playInProgress: '💎Searching and Playing: ',
    playError: 'An error occurred while trying to play the song or playlist.',
    // queue.js
    queueDescription: 'Show the current music queue',
    queueNoVoiceChannel: '**You need to be in a voice channel to view the queue!**',
    queueNoSongsTitle: 'Oops!',
    queueNoSongsMessage: 'No songs in the queue.',
    queueTitle: 'Current Queue!',
    queueSongs: 'Songs:',
    queueDuration: 'Duration:',
    // resume.js
    resumeDescription: 'Resume the paused song',
    resumeNoVoiceChannel: '**You need to be in a voice channel to resume music!**',
    resumeNoPermissions: 'I need the permissions to join and speak in your voice channel!',
    resumeInProgress: '**Resuming the paused song...**',
    resumeSuccessTitle: 'Song Resumed',
    resumeSuccessMessage: '**The paused song has been resumed.**',
    resumeNoQueueTitle: 'Oops!',
    resumeNoQueueMessage: '**No song playing in the guild.**',
    resumeNotPausedTitle: 'Oops!',
    resumeNotPausedMessage: '**The music player is not paused.**',
    resumeAlreadyResumedTitle: 'Oops!',
    resumeAlreadyResumedMessage: '**The music player is already resumed.**',
    resumeErrorMessage: 'An error occurred while trying to resume the song.',
    // seek.js
    seekDescription: 'Seek to a specific timestamp in the currently playing song',
    seekTimestampDescription: 'Timestamp to seek to (in seconds or in mm:ss format)',
    seekAlertTitle: 'Alert!',
    seekAlertMessage: '- This command can only be used through slash command!\n- Please use `/seek` to control song.',
    seekNoVoiceChannel: '**You need to be in a voice channel to seek!**',
    seekNoPermissions: '**I need the permissions to join and speak in your voice channel!**',
    seekInvalidFormat: '**Invalid timestamp format. Please use seconds (e.g., 120) or mm:ss (e.g., 2:00).**',
    seekInProgress: '**Seeking to the specified timestamp...**',
    seekSuccessTitle: 'Successfully Seeked!',
    seekSuccessMessage: '**Seeked to %timestamp%**',
    seekNoQueueTitle: 'Oops!',
    seekNoQueueMessage: '**There is no playing queue in this guild.**',
    seekErrorMessage: 'An error occurred while trying to seek.',
    // skip.js
    skipDescription: 'Skip the current song in the queue',
    skipNoVoiceChannel: '**You need to be in a voice channel to skip music!**',
    skipNoPermissions: '**I need the permissions to join and speak in your voice channel!**',
    skipInProgress: '**Skipping the current song...**',
    skipNoSongsTitle: 'Oops!',
    skipNoSongsMessage: '**No more songs in the queue.**',
    skipSuccessTitle: 'Song Skipped',
    skipTitleField: 'Title',
    skipDurationField: 'Duration',
    skipNoQueueTitle: 'Oops!',
    skipNoQueueMessage: '**There is no playing queue in this guild.**',
    skipNoUpNextTitle: 'Oops!',
    skipNoUpNextMessage: '**There are no songs in queue!**',
    skipErrorMessage: 'An error occurred while trying to skip the song.',
    // stop.js
    stopDescription: 'Stop the current queue and leave the voice channel',
    stopNoVoiceChannel: '**You need to be in a voice channel to stop music!**',
    stopNoPermissions: '**I need the permissions to join and speak in your voice channel!**',
    stopInProgress: '**Stopping the queue!**',
    stopSuccessTitle: 'Stopped!',
    stopSuccessMessage: '**The queue has been stopped**',
    stopNoQueueTitle: 'Oops!',
    stopNoQueueMessage: '**There is no playing queue in this guild.**',
    stopAlreadyStoppedTitle: 'Oops!',
    stopAlreadyStoppedMessage: '**The queue is already stopped.**',
    stopErrorMessage: 'An error occurred while trying to stop the queue.',
    // volume.js
    volumeDescription: 'Set the volume for the music player',
    volumeLevelDescription: 'Volume level between 1 and 100',
    volumeNoVoiceChannel: '**You need to be in a voice channel to set the volume!**',
    volumeNoPermissions: '**I need the permissions to join and speak in your voice channel!**',
    volumeNoSongTitle: 'Oops!',
    volumeNoSongMessage: '**There is no song currently playing.**',
    volumeSuccessTitle: 'Volume Set',
    volumeSuccessMessage: 'The volume has been set to **{volumeLevel}%**.',
    volumeErrorMessage: 'An error occurred while setting the volume.',
    volumeAlertTitle: "Alert!",
    volumeAlertMessage: '- This command can only be used through slash command!\n- Please use `/volume` to control volume.',
    // beautiful.js
    beautifulDescription: 'Apply a beautiful effect to a user\'s profile picture.',
    beautifulUserDescription: 'User whose profile picture to beautify',
    beautifulNoUser: 'You must specify a user to beautify their profile picture!',
    beautifulTitle: 'Beautiful Effect',
    beautifulDescriptionText: 'Here\'s a beautiful version of {user}\'s profile picture!',
    beautifulFooter: 'Beauty is in the eye of the beholder! ✨',
    beautifulReplyText: 'Here\'s how {user} looks with a touch of beauty!',
    beautifulError: 'There was an error while executing this command!',
    beautifulNoMention: 'You must mention a user to beautify their profile picture!',
    // choose.js
    chooseDescription: 'Randomly chooses one item from the provided options',
    chooseOptionsDescription: 'Options separated by commas',
    chooseTitle: 'Random Choice Generator',
    chooseOptionsText: '**Options:**',
    chooseChosenText: '**Chosen Option:**',
    // darkness.js
    darknessDescription: 'Apply a darkness effect to a user\'s profile picture.',
    darknessUserDescription: 'User whose profile picture to darken',
    darknessNoUser: 'You must specify a user to darken their profile picture!',
    darknessTitle: 'Darkness Effect',
    darknessDescriptionText: 'Here\'s a darkened version of',
    darknessFooter: 'Embrace the darkness! 🌑',
    darknessResponseText: 'Here\'s how',
    darknessError: 'There was an error while executing this command!',
    // delete.js
    deleteDescription: 'Apply a delete effect to a user\'s profile picture.',
    deleteUserDescription: 'User whose profile picture to beautify',
    deleteNoUser: 'You must specify a user to beautify their profile picture!',
    deleteTitle: 'Delete Effect',
    deleteResponseText: 'Here\'s how',
    deleteError: 'There was an error while executing this command!',
    // fact.js
    factDescription: 'Get a random fact',
    factTitle: 'Random Fact',
    factError: 'An error occurred while fetching the fact.',
    // flip.js
    flipDescription: 'Flip a coin',
    flipTitle: 'Coin Flip',
    flipHeads: 'Heads',
    flipTails: 'Tails',
    flipResult: 'You flipped',
    flipError: 'An error occurred while executing the command.',
    // friendship.js
    friendshipDescription: 'Rates the friendship between you and another user',
    friendshipUserDescription: 'The user to rate friendship with',
    friendshipTitle: 'Xếp hạng tình bạn',
    friendshipWith: 'và',
    friendshipRating: 'xếp hạng tình bạn là',
    friendshipFooter: '⚠️ Đánh giá chỉ mang tính chất tham khảo, không thay thế được tình bạn! 💀',
    friendshipMentionError: 'Please tag two users to rate their friendship.',
    // gay.js
    gayDescription: 'Apply a gay effect to a user\'s profile picture.',
    gayUserDescription: 'User whose profile picture to apply the effect to',
    gayTitle: 'Gay Effect',
    gayDescriptionText: 'Here\'s a gay version of',
    gayFooter: 'Pride is a celebration! 🏳️‍🌈',
    gayResponseText: 'Here\'s how',
    gayUserError: 'You must specify a user to apply the effect to their profile picture!',
    errorMessage: 'There was an error while executing this command!',
    // greyscale.js
    greyscaleDescription: 'Apply a greyscale effect to a user\'s profile picture.',
    greyscaleUserDescription: 'User whose profile picture to apply greyscale effect',
    greyscaleTitle: 'Greyscale Effect',
    greyscaleDescriptionText: 'Here\'s a greyscale version of',
    greyscaleFooter: 'The world in shades of grey! 🌫️',
    greyscaleResponseText: 'Here\'s how',
    greyscaleUserError: 'You must specify a user to apply the greyscale effect!',
    errorMessage: 'There was an error while executing this command!',
    // invert.js
    invertDescription: 'Apply an invert effect to a user\'s profile picture.',
    invertUserDescription: 'User whose profile picture to apply invert effect',
    invertTitle: 'Invert Effect',
    invertDescriptionText: 'Here\'s an inverted version of',
    invertFooter: 'Seeing things in reverse! 🔄',
    invertResponseText: 'Here\'s how',
    invertUserError: 'You must specify a user to apply the invert effect!',
    errorMessage: 'There was an error while executing this command!',
    // joke.js
    jokeCommandDescription: '1 cú joke ngẫu nhiên, bám chặt coi chừng té ngửa ⛔',
    jokeEmbedTitle: '1 cú joke ngẫu nhiên, bám chặt coi chừng té ngửa ⛔',
    jokeError: 'An error occurred while executing the command.',
    // meme.js
    memeCommandDescription: 'Get a random meme from Reddit',
    memeError: 'An error occurred while fetching the meme.',
    // quote.js
    quoteCommandDescription: 'Get a random quote',
    quoteFallbackText: "To be, or not to be, that is the question.",
    quoteFallbackAuthor: "William Shakespeare",
    quoteTitle: 'Random Quote',
    quoteFallbackTitle: 'Random Quote (Fallback)',
    //random num.js
    randomnumCommandDescription: 'Generates a random number within a specified range',
    randomnumError: 'Please provide valid numbers for min and max values.',
    randomnumTitle: 'Random Number Generator',
    randomnumDescription: 'Generated a random number between **{min}** and **{max}**: **{randomNumber}**',
    // rate.js
    rateCommandDescription: 'Rates something randomly from 0 to 10',
    rateTitle: 'Rating Generator',
    rateDescription: '**{thingToRate}** is rated **{rating}/10**',
    rateOptionDescription : 'Add a thing to rate',
    // rockPaperScissors.js
    rockPaperScissorsCommandDescription: 'Plays a game of rock, paper, scissors',
    rockPaperScissorsChoiceDescription: 'Your choice: rock, paper, or scissors',
    rockPaperScissorsTitle: 'Rock, Paper, Scissors',
    rockPaperScissorsInvalidChoice: 'Invalid choice! Please choose rock, paper, or scissors.',
    rockPaperScissorsTie: 'It\'s a tie!',
    rockPaperScissorsWin: 'You win!',
    rockPaperScissorsLose: 'You lose!',
    rockPaperScissorsResult: '**Your choice:** {userChoice}\n**Bot\'s choice:** {botChoice}\n**Result:** {result}',
    // roll.js
    rollCommandDescription: 'Roll a dice',
    rollEmbedTitle: 'Dice Roll',
    rollEmbedDescription: 'You rolled a {rollResult}',
    rollErrorMessage: 'An error occurred while executing the command.',
    // ship.js
    shipCommandDescription: 'Calculate the ship percentage between two users.',
    shipUser1Description: 'First user to ship',
    shipUser2Description: 'Second user to ship',
    shipEmbedTitle: 'Ship Rate',
    shipPercentageFieldName: 'Ship Percentage',
    shipMessageFieldName: 'Message',
    shipLowMessage: 'Maybe this ship is not meant to sail... :broken_heart:',
    shipMediumMessage: 'There\'s some potential here... :orange_heart:',
    shipHighMessage: 'Looking good! There\'s definitely a spark! :yellow_heart:',
    shipVeryHighMessage: 'It\'s a match made in heaven! :green_heart:',
    shipFooterText: 'This ship rate is just for fun 😃',
    shipReplyContent: 'The ship percentage between {user1} and {user2} is {shipPercentage}%',
    shipErrorMessage: 'There was an error while executing this command!',
    shipMentionErrorMessage: 'Please tag two users to ship.',
    //wordassoc.js
    wordAssociationDescription: 'Play a game of Word Association!',
    alertTitle: 'Alert!',
    commandUsageMessage: '- This command can only be used through slash command!\n- Please use `/wordAssociation` to start.',
    serverOnlyMessage: 'This command can only be used in a server.',
    fetchBotMemberError: 'Failed to fetch bot member information.',
    missingPermissionsMessage: 'The bot is missing the following permissions: ',
    adjustPermissions: 'Please adjust the permissions and try again.',
    viewChannelsPermission: 'View Channels',
    sendMessagesPermission: 'Send Messages',
    manageChannelsPermission: 'Manage Channels',
    unknownPermission: 'Unknown Permission',
    existingGameMessage: 'You already have a Word Association game in progress in',
    finishCurrentGame: 'Please finish your current game before starting a new one.',
    channelCreationError: 'Failed to create a temporary channel for the game.',
    gameStartMessage: 'has started a game of Word Association! Send your guesses in this channel.',
    hintMessage: 'Hint',
    wordIsMessage: 'The word is:',
    keepSecret: 'keep it secret 🙈🔒',
    dmSendError: 'Failed to send DM to the game host. The game is cancelled.',
    gameStartedMessage: 'Game started in',
    goodLuck: 'Good luck!',
    noCommandsMessage: 'You cannot send commands in the game channel.',
    goodChoiceMessage: 'Great choice',
    wordUpdatedMessage: 'The new word has been updated.',
    newWordMessage: 'The new word is:',
    notRelatedMessage: 'is not related to the word.',
    noResponseMessage: 'No one responded to your Word Association game. The game has ended.',
    gameEndMessage: 'The game has ended. Thank you for playing!',
    // addrole.js
    addRoleCommandDescription: 'Adds a role to a member',
    addRoleTargetDescription: 'The member to add a role to',
    addRoleRoleDescription: 'The role to add',
    addRoleNoPermission: 'You do not have permission to use this command.',
    addRoleAlreadyHasRole: '${target.tag} already has the role ${role.name}.',
    addRoleSuccess: 'Added the role ${role.name} to ${target.tag}.',
    addRoleOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/addrole` to add a role to a member.',
    addRoleAlert: 'Alert!',
    // addrole.js
    addRoleCommandDescription: 'Adds a role to a member',
    addRoleTargetDescription: 'The member to add a role to',
    addRoleRoleDescription: 'The role to add',
    addRoleNoPermission: 'You do not have permission to use this command.',
    addRoleAlreadyHasRole: '${target.tag} already has the role ${role.name}.',
    addRoleSuccess: 'Added the role ${role.name} to ${target.tag}.',
    addRoleOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/addrole` to add a role to a member.',
    addRoleAlert: 'Alert!',
    // ban.js
    banCommandDescription: 'Bans a member from the server',
    banTargetDescription: 'The member to ban',
    banNoPermission: 'You do not have permission to use this command.',
    banCannotBan: 'I cannot ban ${target.tag}!',
    banSuccess: '${target.tag} has been banned.',
    banOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/ban` to ban to a member.',
    banAlert: 'Alert!',
    // dm.js
    dmCommandDescription: "Send a DM to a user.",
    dmTargetDescription: "Tôi thay mặt người dùng gửi đến bạn.",
    dmReasonDescription: "The reason for the DM.",
    dmReceivedTitle: "👋 Có thằng lồn này nhờ tao gửi đến mày những dòng tin nhắn!",
    dmReceivedDescription: "Hello! You've received a message from ${sender} in ${interaction.guild.name}. Reason: ${reason}",
    dmSentConfirmation: "Successfully sent a DM to ${targetUser}.",
    dmFailedMessage: "Failed to send a DM to ${targetUser}. They may have DMs disabled.",
    // kick.js
    kickCommandDescription: 'Kicks a member from the server',
    kickTargetDescription: 'The member to kick',
    kickNoPermission: 'You do not have permission to use this command.',
    kickCannotKick: 'I cannot kick ${target.tag}!',
    kickSuccess: '${target.tag} has been kicked.',
    kickOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/kick` to kick a member.',
    kickAlert: 'Alert!',
    // lockchannel.js
    lockChannelCommandDescription: 'Locks the channel',
    lockChannelNoPermission: 'You do not have permission to use this command.',
    lockChannelSuccess: 'The channel has been locked.',
    // mute.js
    muteCommandDescription: 'Mutes a member in the server',
    muteTargetDescription: 'The member to mute',
    muteDurationDescription: 'Duration of the mute in minutes',
    muteNoPermission: 'You do not have permission to use this command.',
    muteCannotMute: 'I cannot mute ${target.tag}!',
    muteSuccess: '${target.tag} has been muted for ${duration} minutes.',
    muteOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/mute` to mute a member.',
    muteAlert: 'Alert!',
    // purge.js
    purgeCommandDescription: 'Clears a specified number of messages from the channel',
    purgeAmountDescription: 'Number of messages to clear',
    purgeNoPermission: 'You do not have permission to use this command.',
    purgeInvalidAmount: 'Please enter a number between 1 and 100.',
    purgeSuccess: 'Cleared ${messages.size} messages.',
    purgeFailed: 'Failed to purge messages. Please try again.',
    purgeNoDeletePermission: 'I do not have permission to delete messages.',
    purgeMessagesOld: 'Cannot delete messages older than 14 days.',
    purgeUnknownMessageRef: 'Invalid Form Body: Unknown message reference.',
    // removerole.js
    removeroleCommandDescription: 'Removes a role from a member',
    removeroleTargetDescription: 'The member to remove a role from',
    removeroleRoleDescription: 'The role to remove',
    removeroleNoPermission: 'You do not have permission to use this command.',
    removeroleRoleNotFound: '${target.tag} does not have the role ${role.name}.',
    removeroleSuccess: 'Removed the role ${role.name} from ${target.tag}.',
    removeroleOnlySlashCommand: '- This command can only be used through slash command!\n- Please use `/removerole` to remove a role from a member.',
    // removeslowmode.js
    removeSlowModeDescription: 'Removes the slowmode from the channel',
    removeSlowModeNoPermission: 'You do not have permission to use this command.',
    removeSlowModeSuccess: 'Removed slowmode from the channel.',
    // setnickname.js
    setnicknameCommandDescription: 'Set a new nickname for a member',
    setnicknameNoPermission: 'You do not have permission to use this command.',
    setnicknameSuccess: 'Nickname of {target} has been set to {nickname}.',
    setnicknameNoNickname: 'Please provide a nickname.',
    setnicknameMemberNotFound: 'Member not found.',
    setnicknameCannotChange: 'I cannot change the nickname of {target}.',
    setnicknameFailed: 'Failed to set the nickname. Please try again later.',
    setnicknamePrefixError: '- This command can only be used through slash command!\n- Please use `/setnickname` to change nickname of a member.',
    // setslowmode.js
    setslowmodeCommandDescription: 'Sets the slowmode for the channel',
    setslowmodeNoPermission: 'You do not have permission to use this command.',
    setslowmodeInvalidDuration: 'Please enter a duration between 0 and 21600 seconds.',
    setslowmodeSuccess: 'Set slowmode to {duration} seconds.',
    setslowmodePrefixError: '- This command can only be used through slash command!\n- Please use `/setslowmode` to set slow mode.',
    // timeout.js
    timeoutCommandDescription: 'Times out a member in the server',
    timeoutNoPermission: 'You do not have permission to use this command.',
    timeoutCannotTimeout: 'I cannot timeout {targetTag}!',
    timeoutSuccess: '{targetTag} has been timed out for {duration} minutes.',
    timeoutPrefixError: '- This command can only be used through slash command!\n- Please use `/timeout` to timeout a user.',
    // unlockchannel.js
    unlockChannelDescription: 'Unlocks the channel',
    unlockChannelNoPermission: 'You do not have permission to use this command.',
    unlockChannelSuccess: 'The channel has been unlocked.',
    // unmute.js
    unmuteDescription: 'Unmutes a member in the server',
    unmuteNoPermission: 'You do not have permission to use this command.',
    unmuteNotMuted: '{target} is not muted!',
    unmuteSuccess: '{target} has been unmuted.',
    unmutealertTitle: 'Alert!',
    unmutealertDescription: '- This command can only be used through slash command!\n- Please use `/unmute` to unmute a member.',
    // warn.js
    warnDescription: 'Warns a member in the server',
    warnNoPermissions: '**You do not have permission to use this command.**',
    warnSuccess: '**{sender} has warned {target} for: {reason}**',
    warnDMTitle: 'You have been warned!',
    warnDMDescription: 'You have received a warning from {sender} in {guildName} for: {reason}',
    // createembed.js
    createembedDescription: 'Create and send an embed to a specified channel',
    createembedChannel: 'The channel to send the embed to',
    createembedColor: 'The color of the embed (hex code)',
    createembedTitle: 'The title of the embed',
    createembedURL: 'The URL of the embed',
    createembedAuthorName: 'The name of the author',
    createembedAuthorIcon: 'The icon URL of the author',
    createembedAuthorURL: 'The URL of the author',
    createembedDescriptionField: 'The description of the embed',
    createembedThumbnail: 'The thumbnail URL of the embed',
    createembedFields: 'The fields of the embed in JSON format (max 25 fields)',
    createembedImage: 'The image URL of the embed',
    createembedTimestamp: 'Whether to include a timestamp',
    createembedFooterText: 'The text of the footer',
    createembedFooterIcon: 'The icon URL of the footer',
    createembedSuccess: 'Embed sent successfully!',
    createembedFailed: 'Failed to send embed.',
    createembedParseError: 'Error parsing fields. Please provide valid JSON.',
    createembedFieldsLimit: 'You can only provide up to 25 fields.',
    createembedAlertTitle: 'Alert!',
    createembedAlertDescription: '- This command can only be used through slash command!\n- Please use `/createembed` to create an embed message.',
    // define.js
    defineDescription: 'Get the definition of a word',
    defineNoWordProvided: 'Please provide a word to define.',
    defineNoDefinitionFound: 'No definition found for "{{word}}".',
    defineError: 'Cannot find definition. Please try another word.',
    // dictionary.js
    dictionaryDescription: 'Look up the definition of a word',
    dictionaryNoWordProvided: 'No word provided. Please provide a word to look up.',
    dictionaryError: 'Failed to fetch dictionary definition. Please try again with another word.',
    // giveaway.js
    giveawayDescription: 'Manage giveaways',
    giveawayNoPermissions: 'You do not have permission to use this command.',
    giveawayStarted: 'Giveaway started!',
    // poll.js
    pollDescription: 'Create a poll with options',
    pollCreated: 'Poll created successfully!',
    pollError: 'There was an error creating the poll.',
    pollCommandOnly: '- This command can only be used through slash command!\n- Please use `/poll` to create a Poll.',
    // generateqr.js
    generateQRDescription: 'Generates a QR code for the provided text',
    generateQRFailed: 'Failed to generate QR code. Please try again.',
    // remind.js
    remindDescription: 'Set a reminder with a task',
    remindInvalidInput: 'Please provide a valid number of minutes and a task.',
    remindSuccess: 'I\'ll remind you about "{task}" in {minutes} minutes.',
    remindFollowUp: '{user}, this is your reminder: "{task}"',
    // showemojis.js
    showemojisDescription: 'Displays available emojis with buttons',
    noCustomEmojisFound: 'No custom emojis found.',
    selectedEmojiTitle: 'Selected Emoji',
    selectedEmojiDescription: '[Click here to copy the emoji link]({url})',
    errorProcessingRequest: 'An error occurred while processing your request.',
    errorExecutingCommand: 'An error occurred while executing the command.',
    // status.js
    statusDescription: 'Checks the status of a member in the server',
    statusTitle: '{username}\'s Status',
    statusLabel: '**Status:** {status}',
    activitiesLabel: '**Activities:**\n{activities}',
    noActivities: 'None',
    errorFetchingStatus: 'Failed to fetch the status of the user.',
    // timer.js
    timerDescription: 'Set a simple timer',
    timerSetMessage: 'Timer set for {minutes} minutes.',
    invalidMinutes: 'Please provide a valid number of minutes.',
    timerUpMessage: '{user}, your timer for {minutes} minutes is up!',
    // translate.js
    translateDescription: 'Translates text to a specified language',
    originalTextLabel: 'Original Text:',
    translatedTextLabel: 'Translated Text ({language}):',
    translationError: 'Failed to translate text. Please try again.',
    // mhelp.js
    mhelpDescription: 'List available music commands',
    noCommandsFound: 'No music commands found.',
    lavalinkCommandsTitle: 'Lavalink Commands',
    lavalinkPlayerFooter: 'Let the Beat Drop!',
    // mnp.js
    nowPlayingTitle: 'Now Playing..',
    nowPlayingDescription: '- **Here is the information about the currently playing song.**\n\n **{trackTitle}**',
    durationLabel: 'Duration',
    authorLabel: 'Author',
    footerText: 'Let the Beat Drop!',
    noMusicPlaying: 'No music is currently being played in this guild.',
    // mpause.js
    mpauseDescription: 'Pause the current song',
    noMusicPlaying: 'No music is currently being played in this guild.',
    songPausedTitle: 'Song Paused',
    songPausedDescription: '**The current song has been paused.**',
    footerText: 'Let the Beat Drop!',
    // mplay.js
    mplayDescription: 'Play a song from YouTube or Spotify',
    joinVoiceChannelError: 'You need to join a voice channel first!',
    connectPermissionError: 'I cannot connect to your voice channel, make sure I have the proper permissions!',
    speakPermissionError: 'I cannot speak in this voice channel, make sure I have the proper permissions!',
    searchError: 'There was an error while searching:',
    noResultsTitle: 'No Results Found',
    trackEnqueuedTitle: 'Track Enqueued',
    addingTrack: 'Adding',
    playlistEnqueuedTitle: 'Playlist Enqueued',
    addingPlaylist: 'Adding playlist',
    withTracks: 'with',
    tracks: 'tracks',
    searchResultTitle: 'Search Result',
    footerText: 'Let the Beat Drop!',
    unexpectedError: 'An unexpected error occurred.',
    // mqueue.js
    mqueueDescription: 'Display the current music queue',
    noMusicPlayingError: 'No music is currently being played in this guild.',
    queueEmptyError: 'The queue is currently empty.',
    queueTitle: 'Queue',
    footerText: 'Let the Beat Drop!',
    queueError: 'An error occurred while displaying the queue.',
    // mremove.js
    mremoveDescription: 'Remove a song from the queue by its index',
    noMusicPlayingError: 'No music is currently being played in this guild.',
    invalidTrackNumberError: 'Please provide a valid track number.',
    removedSongTitle: 'Removed Song',
    removedSongText: 'Removed Song:',
    footerText: 'Let the Beat Drop!',
    // mresume.js
    mresumeDescription: 'Resume the paused song',
    noMusicPlayingError: 'No music is currently being played in this guild.',
    songResumedTitle: 'Song Resumed',
    songResumedText: '**The paused song has been resumed.**',
    footerText: 'Let the Beat Drop!',
    // mshuffle.js
    mshuffleDescription: 'Shuffle the music queue',
    noMusicPlayingError: '**No music is currently being played in this guild.**',
    emptyQueueError: '**The queue is empty.**',
    queueUpdateTitle: 'Queue update',
    queueShuffledText: '**Randomized the queue songs order.**',
    footerText: 'Let the Beat Drop!',
    // mskip.js
    mskipDescription: 'Skip the current song',
    noMusicPlayingError: 'No music is currently being played in this guild.',
    playingNextSongText: '**Playing next song.**',
    noMoreTracksText: '**No more tracks in queue.**',
    songSkippedTitle: 'Song Skipped',
    noSongsTitle: 'No songs',
    footerText: 'Let the Beat Drop!',
    // mstop.js
    mstopDescription: 'Stop the music and clear the queue',
    noMusicPlayingError: 'No music is currently playing!',
    stoppedTitle: 'Stopped!',
    queueStoppedText: '**The queue has been stopped**',
    footerText: 'Let the Beat Drop!',
    // mvolume.js
    mvolumeDescription: 'Adjust the volume of the music',
    noMusicPlayingError: 'No music is currently being played in this guild.',
    volumeControlTitle: 'Volume Control',
    currentVolumeText: '**Current volume:**',
    invalidNumberError: '**Please provide a valid number.**',
    volumeSetText: '**Volume set to**',
    footerText: 'Let the Beat Drop!',
    // christmas.js
    christmasDescription: 'Displays the number of days until Christmas.',
    christmasTitle: '🎄 Christmas Countdown',
    christmasCountdown: 'days until Christmas',
    // diwali.js
    diwaliDescription: 'Displays the number of days until Diwali.',
    diwaliTitle: '🪔 Diwali Countdown',
    diwaliCountdown: 'days until Diwali',
    // dussehra.js
    dussehraDescription: 'Displays the number of days until Dussehra.',
    dussehraTitle: '🏹 Dussehra Countdown',
    dussehraCountdown: 'days until Dussehra',
    // holi.js
    holiDescription: 'Displays the number of days until Holi.',
    holiTitle: '🎉 Holi Countdown',
    holiCountdown: 'days until Holi',
    // ramadan.js
    ramadanDescription: 'Displays the number of days until Ramadan.',
    ramadanTitle: '🌙 Ramadan Countdown',
    ramadanCountdown: 'days until Ramadan',
    // rpc.js
    rpcDescription: 'Play a game of Rock, Paper, Scissors with the bot.',
    rpcTitle: 'Rock, Paper, Scissors',
    rpcBotChoice: 'I chose',
    // assassinate.js
    assassinateDescription: 'Generate a random kill scenario for a specified user.',
    assassinateUsage: 'assassinate <mention user>',
    assassinateNoUserError: 'Please mention a user to assassinate!',
    assassinateTitle: '🔫 Assassination',
    // howgay.js
    howgayDescription: 'Calculates your gay rate.',
    howgayTitle: '🏳️‍🌈 Gay Rate',
    howgayDescriptionText: 'You are',
    // say.js
    sayDescription: 'Deletes your message and says something.',
    sayNoTextError: 'You need to provide some text to say!',
    sayDeleteError: 'There was an error deleting your message.',
    // binary.js
    binaryDescription: 'Encode or decode text to/from binary.',
    binaryArgsError: 'Please provide whether you want to encode or decode, and the text.',
    binaryInvalidOperationError: 'Invalid operation. Please use `encode` or `decode`.',
    binaryTitle: 'Binary Encode/Decode',
    binaryOperation: 'Operation',
    binaryText: 'Text',
    binaryResult: 'Result',
    // button.js
    buttonDescription: 'Create a clickable button.',
    buttonArgsError: 'Please provide the button text and the link URL.',
    buttonTextLengthError: 'Your button text cannot be longer than 50 characters.',
    buttonInvalidUrlError: 'Please provide a valid URL.',
    buttonTitlePrefix: '🔗',
    buttonDescriptionText: 'Click the button to open the link!',
    // emoji.js
    emojiDescription: 'Emojify your text!',
    emojiArgsError: 'Please provide some text to emojify!',
    emojiTextLengthError: 'Your emojify text cannot be longer than 4096 characters.',
    emojiTitle: '🙂 Emojify',
    // password.js
    passwordDescription: 'Generate a random password and send it via DM.',
    passwordSentMessage: "Password sent to your DM.",
    passwordTitle: '🔑 Your Generated Password',
    passwordFieldLabel: "🔑 Password",
    passwordLengthLabel: "👣 Length",
    passwordDMError: "I couldn't send you a DM. Please make sure your DMs are open.",
    // worldclock.js
    worldClockDescription: 'Displays current time in various timezones.',
    worldClockTitle: '⏰ World Clock',
    istFieldName: ':flag_in: India (IST)',
    gmtFieldName: ':flag_eu: London (GMT)',
    estFieldName: ':flag_us: New York (EST)',
    pstFieldName: ':flag_us: Los Angeles (PST)',
    cstFieldName: ':flag_us: Mexico City (CST)',
    aestFieldName: ':flag_au: Sydney (AEST)',
    kstFieldName: ':flag_kr: Seoul (KST)',
    worldClockErrorMessage: 'There was an error while retrieving the world clock data.',
  };
  
  module.exports = enLang;
  
