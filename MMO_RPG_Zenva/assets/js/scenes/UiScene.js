class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui');
    }

    init(){
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.SetupUiElements();
        this.SetupEvents();
    }

    SetupUiElements(){
        this.scoreText = this.add.text(35, 8,'Coins: 0', {fontSize: '16px', fill: '#fff'});
        this.coinicon = this.add.image(15, 15,'items', 3);
    }

    SetupEvents(){
        this.gameScene.events.on('updateScore', (score) => {
            this.scoreText.setText(`Coins: ${score}`);
        });
    }

}