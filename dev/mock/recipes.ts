import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";
export let RECIPES: Recipe[] = [
	new Recipe(
		'Rice Plate',
		'Very Delicious Rice Plate',
		'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
			new Ingredient('Rice1', 1),
			new Ingredient('Rice2', 2)
		]),
	new Recipe(
		'Dosa',
		'Very Delicious Dosa',
		'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
			new Ingredient('Dosa1', 3),
			new Ingredient('Dosa2', 4)
		]),
	new Recipe(
		'Samosa',
		'Very Delicious Samosa',
		'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
			new Ingredient('Samosa1', 5),
			new Ingredient('Samosa2', 6)
		])
];