export default [
	{
		name: "Brotherhood",
		amount: 20,
		detail: {
			events: ["1/2", "1/3"],
		},
	},
	{
		name: "Ritual",
		amount: 10,
		detail: {
			events: ["court of honor", "some other shit"],
		},
	},
	{
		name: "Checkpoint",
		amount: 30,
		detail: {
			events: ["checkpoint1", "checkpoint2"],
		},
	},
	{
		name: "Rush",
		amount: 40,
		detail: {
			events: ["1/2", "1/3"],
		},
	},
	{
		name: "Requirement",
		amount: 50,
		detail: {
			requirements: {
				count: 5,
				brotherhood: 1,
				dei: 1,
				professional: 2,
				cs: 1,
			},
		},
	},
    {
		name: "Reduction",
		amount: 50
	},
];
