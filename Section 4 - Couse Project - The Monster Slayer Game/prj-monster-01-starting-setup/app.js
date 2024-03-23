// Define this outside Vue app b/c we will not use it inside the HTML
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: (this.monsterHealth < 0 ? 0 : this.monsterHealth) + '%' };
        },
        playerBarStyles() {
            return { width: (this.playerHealth < 0 ? 0 : this.playerHealth) + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }   
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }   

        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            const minAttackValue = 5,
                maxAttackValue = 12,
                attackValue = getRandomValue(minAttackValue, maxAttackValue);

            this.currentRound++;

            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);

            this.attackPlayer(); // attack player after monster is
        },
        attackPlayer() {
            const minAttackValue = 8,
                maxAttackValue = 15,
                attackValue = getRandomValue(minAttackValue, maxAttackValue);

            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            const minAttackValue = 10,
                maxAttackValue = 25,
                attackValue = getRandomValue(minAttackValue, maxAttackValue);

            this.currentRound++;
            
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);

            this.attackPlayer(); // attack player after monster is
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);

            this.currentRound++;

            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            this.addLogMessage('player', 'heal', healValue);

            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        getLogMessageActionByClasses(logMessage) {
            return {
                'log--player': logMessage.actionBy === 'player',
                'log--monster': logMessage.actionBy === 'monster'
            };
        },
        getLogMessageActionByText(logMessage) {
            return logMessage.actionBy === 'player' ? 'Player' : 'Monster';
        },
        getLogMessageActionTypeText(logMessage) {
            return logMessage.actionType === 'heal' ? ' heals themselves for ' : ' attacks and deals ';
        },
        getLogMessageActionValueClasses(logMessage) {
            return logMessage.actionType === 'heal' ? 'log--heal' : 'log--damage';
        }
    }
});

app.mount('#game');