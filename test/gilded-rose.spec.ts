import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Aged Brie: should increase quality as sellin decreases', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 35) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(36);
    });

    it('Aged Brie: should increase quality twice as fast when sellin is below 0', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 35) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(37);
    });

    it('Aged brie: should not increase quality over 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 3, 50) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(50);
    });

    it('Sulfuras: should not decrease in quality', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 3, 80) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(80);
    });

    it('Sulfuras: should not decrease sellin', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 3, 80) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(3);
    });

    it('Backstage Pass: should decrease sellin', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(2);
    });

    it('Backstage Pass: should increase quality by 1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
    });

    it('Backstage Pass: should increase quality by 2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(12);
    });

    it('Backstage Pass: should increase quality by 3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(13);
    });

    it('Backstage Pass: should drop quality to 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
    });

    it('Random Item: should decrease quality when sellin decreases', function() {
        const gildedRose = new GildedRose([ new Item('stew', 5, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(9);
    });

    it('Random Item: should decrease quality faster when sellin is below 0', function() {
        const gildedRose = new GildedRose([ new Item('stew', 0, 10) ]);
        let items: Item[];
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(8);
    });

    it('Random Item: should decrease quality up until 0', function() {
        const gildedRose = new GildedRose([ new Item('stew', 0, 1) ]);
        let items: Item[];
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
    });

    it('Random Item: should decrease sellin', function() {
        const gildedRose = new GildedRose([ new Item('stew', -49, 1) ]);
        let items: Item[];
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();

        expect(items[0].sellIn).to.equal(-51);
    });

});
