export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (let item of this.items) {
            if (item.name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            item.sellIn--;

            if (item.quality >= 50 || item.quality <= 0) {
                continue;
            }

            if (item.name === "Aged Brie") {
                if (item.sellIn < 0) {
                    item.quality++;
                }
                item.quality++;
            } else if (item.name.includes("Conjured")) {
                if (item.sellIn < 0) {
                    item.quality -= 2;
                }
                item.quality -= 2;
            } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
                if (item.sellIn < 0) {
                    item.quality = 0;
                } else if (item.sellIn <= 5) {
                    item.quality += 3;
                } else if (item.sellIn < 10) {
                    item.quality += 2;
                } else {
                    item.quality++
                }
            } else {
                if (item.sellIn < 0) {
                    item.quality--;
                }
                item.quality--;
            }

            if (item.quality > 50) {
                item.quality = 50;
            } else if (item.quality < 0) {
                item.quality = 0;
            }
        }
        return this.items;
    }
}
