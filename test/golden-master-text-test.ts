import {Item, GildedRose} from '../app/gilded-rose';
import * as fs from "fs";
import {expect} from "chai";

describe('Golden Master', function () {

    it('should work as intended', function () {
        let itemList: Array<Item> = [new Item('Aged Brie', 1, 35),
            new Item('Aged Brie', 9, 15),
            new Item('Sulfuras, Hand of Ragnaros', 10, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 40),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 35),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 7),
            new Item('Stew', 1, 3),
            new Item('Honey', 0, 8),
            new Item('Car', 15, 9)];
        const gildedRose = new GildedRose(itemList);
        let items: Item[];
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(38);
        expect(items[1].quality).to.equal(17);
        expect(items[2].quality).to.equal(80);
        expect(items[3].quality).to.equal(0);
        expect(items[4].quality).to.equal(39);
        expect(items[5].quality).to.equal(9);
        expect(items[6].quality).to.equal(0);
        expect(items[7].quality).to.equal(4);
        expect(items[8].quality).to.equal(7);
    });

});
