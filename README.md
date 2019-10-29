# EU Pro Spar

## Discord Bot
> Matchmaking Discord Bot

### Player Commands
> All Commands are case **Insensitive**

Command | Description | Aliases | Restrictions | Channels
--- | --- | --- | --- | ---
**`.queue1v1`** | Start 1v1 Queue | `.q1v1` `.q1` `.queue1` | *None* | `#standard-1v1`
**`.queue2v2`** | Start 2v2 Queue | `.q2v2` `.q2` `.queue2` | *None* | `#standard-2v2`
**`.leaderboard1v1`** | Fetch 1v1 Leaderboard | `.leaderboard1` `.lead1v1` `.lead1` | *None* | *Any*
**`.leaderboard2v2`** | Fetch 2v2 Leaderboard | `.leaderboard2` `.lead2v2` `.lead2` | *None* | *Any*
**`.queueRS1v1`** | Start Rank S 1v1 Queue | `.qRS1v1` `.qrs1` `.queueRS1` | *Invited players **Only*** | `#rank-s-1v1`
**`.queueRS2v2`** | Start Rank S 2v2 Queue | `.qRS2v2` `.qrs2` `.queueRS2` | *Invited players **Only*** | `#rank-s-2v2`
**`.leaderboardRS1v1`** | Fetch Rank S 1v1 Leaderboard | `.leaderboardRS1` `.leadRS1v1` `.leadRS1` | *None* | *Any*
**`.leaderboardRS2v2`** | Fetch Rank S 2v2 Leaderboard | `.leaderboardRS2` `.leadRS2v2` `.leadRS2` | *None* | *Any*
**`.statistics [player(mention)]`** | Specific Player Stats - *If no player is mentioned, returns stats of the player who wrote the command* | `.stats [player(mention)]` | *None* | *Any*
**`.leavequeue`** | Leave Current Queue | `.leaveq` `.dq` | *Players in Queue* | *Channel corresponding to the ongoing queue*
**`.report [score_team_A] [score_team_B]`** | Report Match | `.r [score_team_A] [score_team_B]` | *Players who played the match... duh* | *Channel corresponding to the ongoing match*
**`.confirm`** | Confirm Match - *Confirm Match result if other team/player reported the match* | | *Other Team/Player* | *Channel corresponding to the ongoing match*
**`.deny`** | Deny Match - *Deny Match result if other team/player wrongly reported the match* | | *Other Team/Player* | *Channel corresponding to the ongoing match*
**`.match [match_id]`** | Fetch Specific Match Stats - *Players/Teams, Match State, Score...* | `.m [match_id]` | *Other Team/Player* | *Any*

### Channels

Channel | Description | Restrictions
--- | --- | ---
**`#standard-1v1`** | 1v1 Queue/Matches | *None*
**`#standard-2v2`** | 2v2 Queue/Matches | *None*
**`#rank-s-1v1`** | Rank S 1v1 Queue/Matches | *Invited players **Only***
**`#rank-s-1v1`** | Rank S 1v1 Queue/Matches | *Invited players **Only***

### Roles

Role | Description
--- | ---
**`Competitive`** | Standard Role
**`Rank S 1v1`** | Players with this role can see the channel `#rank-s-1v1` and can queue Rank S 1v1
**`Rank S 2v2`** | Players with this role can see the channel `#rank-s-2v2` and can queue Rank S 2v2

### Admin Commands
> All Commands are case **Insensitive**

Command | Description | Aliases | Channels
--- | --- | --- | --- |
**`.forcereport [score_team_A] [score_team_B]`** | Report Match - *Change/Force Match result if no team reported the match or there's a conflic* | `.freport [score_team_A] [score_team_B]` | *Channel corresponding to the ongoing match*
**`.forceconfirm [match_id]`** | Force Confirm Match - *Confirm Match result if only 1 team reported the match* | `.fconfirm [match_id]` | *Channel corresponding to the ongoing match*
**`.promoteRS1v1 [player]`** | Promote targetted Player to Rank S 1v1 | `.promoteRS1 [player]` `.pRS1 [player]` | *Any*
**`.promoteRS2v2 [player]`** | Promote targetted Player to Rank S 2v2 | `.promoteRS2 [player]` `.pRS2 [player]` | *Any*
**`.demoteRS1v1 [player]`** | Demote targetted Player from Rank S 1v1 | `.demoteRS1 [player]` `.dRS1 [player]` | *Any*
**`.demoteRS2v2 [player]`** | Demote targetted Player from Rank S 2v2 | `.demoteRS2 [player]` `.dRS2 [player]` | *Any*

## Website

Soon™