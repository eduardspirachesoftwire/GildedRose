import { Item, GildedRose } from '../app/gilded-rose';
import * as fs from "fs";
import {expect} from "chai";

// Add a master test here

let _seed = 100;
let _randomItems = 800;
let _minimum = -50;
let _maximum = 101;

let itemNames: string[] = ["+5 Dexterity Vest",
    "Aged Brie",
    "Elixir of the Mongoose",
    "Sulfuras, Hand of Ragnaros",
    "Backstage passes to a TAFKAL80ETC concert",
    "Conjured Mana Cake"];



describe('Golden Master', function () {

    it('should work as intended', function() {
        let itemList: Array<Item> = []
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 35) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(36);
    });

});
