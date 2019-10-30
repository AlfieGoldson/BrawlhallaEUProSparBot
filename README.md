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
**`.queueRX1v1`** | Start Rank X 1v1 Queue | `.qRX1v1` `.qrs1` `.queueRX1` | *Invited players **Only*** | `#rank-x-1v1`
**`.queueRX2v2`** | Start Rank X 2v2 Queue | `.qRX2v2` `.qrs2` `.queueRX2` | *Invited players **Only*** | `#rank-x-2v2`
**`.leaderboardRX1v1`** | Fetch Rank X 1v1 Leaderboard | `.leaderboardRX1` `.leadRX1v1` `.leadRX1` | *None* | *Any*
**`.leaderboardRX2v2`** | Fetch Rank X 2v2 Leaderboard | `.leaderboardRX2` `.leadRX2v2` `.leadRX2` | *None* | *Any*
**`.statistics [player(mention)]`** | Specific Player Stats - *If no player is mentioned, returns stats of the player who wrote the command* | `.stats [player(mention)]` | *None* | *Any*
**`.leavequeue`** | Leave Current Queue | `.leaveq` `.dq` `.lq` | *Players in Queue* | *Channel corresponding to the ongoing queue*
**`.report [score_team_A] [score_team_B]`** | Report Match | `.r [score_team_A] [score_team_B]` | *Players who played the match... duh* | *Channel corresponding to the ongoing match*
**`.confirm`** | Confirm Match - *Confirm Match result if other team/player reported the match* | | *Other Team/Player* | *Channel corresponding to the ongoing match*
**`.deny`** | Deny Match - *Deny Match result if other team/player wrongly reported the match* | | *Other Team/Player* | *Channel corresponding to the ongoing match*
**`.match [match_id]`** | Fetch Specific Match Stats (Players/Teams, Match State, Score...) - *If no match_id provided, will return the player's current match, or last match if none* | `.m [match_id]` | *Other Team/Player* | *Any*

### Channels

Channel | Description | Restrictions
--- | --- | ---
**`#standard-1v1`** | 1v1 Queue/Matches | *None*
**`#standard-2v2`** | 2v2 Queue/Matches | *None*
**`#rank-x-1v1`** | Rank X 1v1 Queue/Matches | *Invited players **Only***
**`#rank-x-1v1`** | Rank X 1v1 Queue/Matches | *Invited players **Only***

### Roles

Role | Description
--- | ---
**`Competitive`** | Standard Role
**`Rank X 1v1`** | Players with this role can see the channel `#rank-x-1v1` and can queue Rank X 1v1
**`Rank X 2v2`** | Players with this role can see the channel `#rank-x-2v2` and can queue Rank X 2v2

### Admin Commands
> All Commands are case **Insensitive**

Command | Description | Aliases | Channels
--- | --- | --- | --- |
**`.forcereport [score_team_A] [score_team_B]`** | Report Match - *Change/Force Match result if no team reported the match or there's a conflict* | `.freport [score_team_A] [score_team_B]` | *Channel corresponding to the ongoing match*
**`.forceconfirm [match_id]`** | Force Confirm Match - *Confirm Match result if 1 team/player reported the match & the other didn't confirm* | `.fconfirm [match_id]` | *Channel corresponding to the ongoing match*
**`.promoteRX1v1 [player]`** | Promote targetted Player to Rank X 1v1 | `.promoteRX1 [player]` `.pRX1 [player]` | *Any*
**`.promoteRX2v2 [player]`** | Promote targetted Player to Rank X 2v2 | `.promoteRX2 [player]` `.pRX2 [player]` | *Any*
**`.demoteRX1v1 [player]`** | Demote targetted Player from Rank X 1v1 | `.demoteRX1 [player]` `.dRX1 [player]` | *Any*
**`.demoteRX2v2 [player]`** | Demote targetted Player from Rank X 2v2 | `.demoteRX2 [player]` `.dRX2 [player]` | *Any*

## Website

Soon™