const haydayitems = [
    {
        name: 'Apple Jam',
        details: [
            {
                level: '35',
                maxprice: '2190',
                harvest: 'None\n',
                usedFor: '- Apple Porridge\n- Hand Pies',
                machine: 'Jam Maker',
                ingredients: '3x Apple',
                timeNeeded: '6 Hours',
                boat1: '4 x 2 = 8',
                boat2: '4 x 2 = 8',
                boat3: '4  x 3 = 12',
            }
        ]
    },
    {
        name: 'Apple',
        details: [
            {
                level: '15',
                maxprice: '396',
                harvest: 'None\n',
                usedFor: '- Apple Ginger Tea\n- Apple Jam\n- Apple Juice\n- Apple Pie\n- Apple Porridge\n- Caramel Apple\n- Green Smoothie\n- Honey Apple Cake',
                machine: 'Tree',
                harvest: '- 1st Harvest  -->  2x Apple\n- 2nd Harvest  -->  3x Apple\n- 3rd Harvest  --> 4x Apple\n-  1 Revive  -->  4x Apple',
                ingredients: 'None\n',
                timeNeeded: '16 Hours',
                boat1: '3 x 9 = 27',
                boat2: '4 x 9 = 36',
                boat3: '4 x 14 = 56',
            }
        ]
    },
    {
        name: 'Affogato',
        details: [
            {
                level: '78',
                maxprice: '4350',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Ice Cream Maker',
                ingredients: '- 1x   Espresso\n- 1x   Vanilla Ice Cream',
                timeNeeded: '20 Minutes',
                boat1: '3 x 1 = 3',
                boat2: '4 x 1 = 3',
                boat3: '4  x 1 = 4',
            }
        ]
    },
    {
        name: 'Apple Ginger Tea',
        details: [
            {
                level: '88',
                maxprice: '1690',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Tea Stand',
                ingredients: '- 2x Apples \n- 1x Ginger\n- 1x Tea Leaf',
                timeNeeded: '30 Minutes',
                boat1: 'Level 88 Required',
                boat2: 'Level 88 Required',
                boat3: '4  x 4 = 16',
            }
        ]
    },
    {
        name: 'Apple Juice',
        details: [
            {
                level: '28',
                maxprice: '1290',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Juice Press',
                ingredients: '-  2X Apples',
                timeNeeded: '2 Hours',
                boat1: '3 x 3 = 9',
                boat2: '4 x 3 = 12',
                boat3: '4  x 4 = 16',
            }
        ]
    },
    {
        name: 'Apple Pie',
        details: [
            {
                level: '28',
                maxprice: '2700',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Pie Oven',
                ingredients: '-  3x Apples\n- 2x Wheat\n- 1x Syrup\n- 1x Egg',
                timeNeeded: '2 Hours 30 Minutes',
                boat1: '3 x 1 = 3',
                boat2: '4 x 1 = 4',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Apple Porridge',
        details: [
            {
                level: '119',
                maxprice: '5220',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Porridge Bar',
                ingredients: '-  1x Apple\n- 2x Apple Jam\n- 4x Wheat',
                timeNeeded: '20 Minutes',
                boat1: 'Level 119 Required',
                boat2: 'Level 119 Required',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Asparagus',
        details: [
            {
                level: '49',
                maxprice: '432',
                harvest: '- 2x Asparagus per plot',
                usedFor: '- Asparagus Quiche\n- Asparagus Soup\n- Breakfast Bowl\n- Breakfast Waffles\n- Grilled Asparagus\n- Spring Omelet',
                machine: 'Field Plot',
                ingredients: 'None\n',
                timeNeeded: '6 Hours',
                boat1: '3 x 1 = 3',
                boat2: '4 x 2 = 8',
                boat3: '4 x 3 = 12',
            }
        ]
    },
    {
        name: 'Asparagus Quiche',
        details: [
            {
                level: '49',
                maxprice: '3020',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Pie Oven',
                ingredients: '-  2x Asparagus\n- 2x Eggs\n- 4x Wheat\n- 1x Cheese',
                timeNeeded: '2 Hours',
                boat1: '3 x 1 = 3',
                boat2: '4 x 1 = 4',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Asparagus Soup',
        details: [
            {
                level: '51',
                maxprice: '2550',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Soup Kitchen',
                ingredients: '- 3x Asparagus\n- 2x Cream',
                timeNeeded: '1 Hour',
                boat1: '3 x  1= 3',
                boat2: '4 x 2 = 8',
                boat3: '4  x 3 = 12',
            }
        ]
    },
    {
        name: 'Bacon amd Eggs',
        details: [
            {
                level: '11',
                maxprice: '2010',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'BBQ Grill',
                ingredients: '-  2x Bacon\n- 4x Eggs',
                timeNeeded: '1 Hour',
                boat1: '3 x 2 = 6',
                boat2: '4 x 2 = 8',
                boat3: '4  x 3 = 12',
            }
        ]
    },
    {
        name: 'Bacon Donut',
        details: [
            {
                level: '88',
                maxprice: '3880',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Donut Maker',
                ingredients: '-  3x Bacon\n- 1x Plain Donut\n- 1x Syrup',
                timeNeeded: '30 Minutes',
                boat1: '3 x  = ',
                boat2: '4 x  = ',
                boat3: '4  x  = ',
            }
        ]
    },
    {
        name: 'Bacon fries',
        details: [
            {
                level: '87',
                maxprice: '3020',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Deep Fryer',
                ingredients: '- 1x Chili Pepper\n- 2x Bacon\n- 4x Potato\n- 1x Garlic',
                timeNeeded: '25 Minutes',
                boat1: 'Level 87 Required',
                boat2: 'Level 87 Required',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Bacon Pie',
        details: [
            {
                level: '18',
                maxprice: '2190',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Pie Oven',
                ingredients: '- 3x Apple\n- 2x Wheat\n- 1x Syrup\n- 1x Egg',
                timeNeeded: '2 Hours 30 Minutes',
                boat1: '3 x 1 = 3',
                boat2: '4 x 2 = 8',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Bacon Toast',
        details: [
            {
                level: '65',
                maxprice: '6480',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Sandwich Bar',
                ingredients: '- 2x Bacon\n- 2x Bread\n- 3x Lettuce\n- 1x Mayonnaise',
                timeNeeded: '1 Hour 40 Minutes',
                boat1: 'Level 65 Required',
                boat2: '4 x 1 = 4',
                boat3: '4  x 1 = 4',
            }
        ]
    },
    {
        name: 'Baked Potato',
        details: [
            {
                level: '35',
                maxprice: '2980',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'BBQ Grill',
                ingredients: '- 1x Cheese\n- 2x Potato\n- 1x Chili Pepper\n- 1x Cream',
                timeNeeded: '35 Minutes',
                boat1: '3 x 1 = 3',
                boat2: '4 x  1 = 4',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Banana Bread',
        details: [
            {
                level: '91',
                maxprice: '4240',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Bakery',
                ingredients: '- 3x Banana\n- 1x Egg\n- 2x Grapes\n- 3x Wheat',
                timeNeeded: '30 Minutes',
                boat1: 'Level 91 Required',
                boat2: '4 x 1 = 4',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Banana pancakes',
        details: [
            {
                level: '94',
                maxprice: '3520',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'BBQ Grill',
                ingredients: '- 2x Banana\n- 2x Blackberry\n- 1x Cream\n- 3x Wheat',
                timeNeeded: '1 Hour',
                boat1: 'Level 94 Required',
                boat2: '4 x 1 = 4',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Banana Split',
        details: [
            {
                level: '96',
                maxprice: '4030',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Ice Cream Maker',
                ingredients: '- 1x Banana\n- 3x Cherry\n- 1x Cream',
                timeNeeded: '3 Hours 30 Minutes',
                boat1: 'Level 96 Required',
                boat2: 'Level 96 Required',
                boat3: '4  x 2 = 8',
            }
        ]
    },
    {
        name: 'Beeswax',
        details: [
            {
                level: '48',
                maxprice: '2340',
                harvest: 'None\n',
                usedFor: '- Colorful Candles\n- Floral Candle\n- Lemon Candle\n- Raspberry Candle\n- Strawberry Candle',
                machine: 'Honey Extractor',
                ingredients: '- 3x HoneyComb',
                timeNeeded: '45 Minutes',
                boat1: 'NO Boat Order will ask for Beeswax',
                boat2: 'NO Boat Order will ask for Beeswax',
                boat3: 'NO Boat Order will ask for Beeswax',
            }
        ]
    },
    {
        name: 'Beetroot Salad',
        details: [
            {
                level: '76',
                maxprice: '2340',
                harvest: 'None\n',
                usedFor: 'End Product',
                machine: 'Salad Bar',
                ingredients: '- 3x Beetroot\n- 1x Goat Cheese',
                timeNeeded: '45 Minutes',
                boat1: 'Level 76 Required',
                boat2: 'Level 76 Required',
                boat3: '4  x 2 = 8',
            }
        ]
    }
]
module.exports = haydayitems;