import Card from "./Card";

class PokerHand {
    constructor(public cards: Card[]) {
    }
    public getOutcome(): string {
        if (this.isFlush()) {
            return 'Флэш';
        } else if (this.isThreeOfAKind()) {
            return 'Тройка';
        } else if (this.isTwoPairs()) {
            return 'Две пары';
        } else if (this.isOnePair()) {
            return 'Одна пара';
        } else {
            return 'Ничего';
        }
    }

    private isOnePair() {
        const rankCount: { [rank: string]: number } = {};
        for (const card of this.cards) {
            if (rankCount[card.rank]) {
                rankCount[card.rank]++;
            } else {
                rankCount[card.rank] = 1;
            }
        }

        for (const rank in rankCount) {
            if (rankCount[rank] === 2) {
                return true;
            }
        }
        return false;
    }
    private isTwoPairs(){
        const rankCount: { [rank: string]: number } = {};
        let pairCount = 0;

        for (const card of this.cards) {
            if (rankCount[card.rank]) {
                rankCount[card.rank]++;
                if (rankCount[card.rank] === 2) {
                    pairCount++;
                }
            } else {
                rankCount[card.rank] = 1;
            }
        }

        return pairCount === 2;
    }
    private isThreeOfAKind() {
        const rankCount: { [rank: string]: number } = {};
        for (const card of this.cards) {
            if (rankCount[card.rank]) {
                rankCount[card.rank]++;
                if (rankCount[card.rank] === 3) {
                    return true;
                }
            } else {
                rankCount[card.rank] = 1;
            }
        }
        return false;
    }

    private isFlush(){
        for (const card of this.cards) {
            if (card.suit !== this.cards[0].suit) {
                return false;
            }
        }
        return true;
    }
}
export default PokerHand;