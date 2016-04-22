import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";
export let RECIPES:Recipe[] = [
    new Recipe(
        'Special Rice Plate',
        'Rice , Roti and Vegitable',
        'http://uppercrustindia.com/dynamic/uploads/image/UC_57/Metro%20Centrc/Bombay%20Buzz/DSCN3142.jpg', [
            new Ingredient('Rice1', 1),
            new Ingredient('Rice2', 2)
        ]),
    new Recipe(
        'Motichur ka ladoo',
        'Dekh ke dil khus ho jaye..',
        'http://www.totalbhakti.com/images/1288680617_Motichoor%20Ladoo.png', [
            new Ingredient('Dosa1', 3),
            new Ingredient('Dosa2', 4)
        ]),
    new Recipe(
        'Bihar ka Litti',
        'Enjoy Litti with Chokha',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Litti.jpg/400px-Litti.jpg', [
            new Ingredient('Samosa1', 5),
            new Ingredient('Samosa2', 6)
        ])
];