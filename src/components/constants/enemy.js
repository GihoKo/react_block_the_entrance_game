export class Chimpanzee {
    constructor(enemyId, positionX, positionY) {
        this.enemyId = enemyId;
        this.name = "chimpanzee";
        this.speed = 40;
        this.health = 40;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    move() {}
    damaged(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.remove();
        }
    }
    remove() {}
}

export class Orangutan {
    constructor(enemyId, positionX, positionY) {
        this.enemyId = enemyId;
        this.name = "orangutan";
        this.speed = 20;
        this.health = 80;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    move() {}
    damaged(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.remove();
        }
    }
    remove() {}
}

export class Gorilla {
    constructor(enemyId, positionX, positionY) {
        this.enemyId = enemyId;
        this.name = "gorilla";
        this.speed = 20;
        this.health = 160;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    move() {}
    damaged(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.remove();
        }
    }
    remove() {}
}
