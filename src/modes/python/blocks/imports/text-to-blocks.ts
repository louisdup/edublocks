import { TextToBlocksDefinitionModel } from "@/data/models/text-to-blocks-definition-model";

/**
 * Text to blocks definitions for the imports category.
 */
const importsDefinitions: Array<TextToBlocksDefinitionModel> = [
	{
		name: "import_time",
		code: "import time"
	},
	{
		name: "import_math",
		code: "import math"
	},
	{
		name: "random",
		code: "import random"
	},
	{
		name: "import_pygal",
		code: "import pygal"
	},
	{
		name: "import_turtle",
		code: "from turtle import *"
	},
	{
		name: "import_processing",
		code: "from processing import *"
	},
];

export default importsDefinitions;