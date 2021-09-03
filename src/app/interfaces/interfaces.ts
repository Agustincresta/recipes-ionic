export interface RootObject {
  results: Ingrediente[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface Ingrediente {
  id: number;
  name: string;
  image: string;
}

export interface Recipes {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface resultRandom {
  recipes: randomRecipe[];
}

export interface randomRecipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  aggregateLikes: number;
  spoonacularScore: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId?: any;
  spoonacularSourceUrl: string;
}

interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Ingredient[];
  length?: Length;
}

interface Length {
  number: number;
  unit: string;
}

interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalString: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  metaInformation: string[];
  measures: Measures;
}

interface Measures {
  us: Us;
  metric: Us;
}

interface Us {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface RecipesIngredient {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: MissedIngredient[];
  usedIngredients: UsedIngredient[];
  unusedIngredients: any[];
  likes: number;
}

export interface UsedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalString: string;
  originalName: string;
  metaInformation: string[];
  meta: string[];
  image: string;
}

interface MissedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalString: string;
  originalName: string;
  metaInformation: string[][];
  meta: string[][];
  image: string;
  extendedName?: string;
}