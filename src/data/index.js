// "./data/index.js"
import { faker } from "@faker-js/faker/locale/en";

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};

export const Users = [
	{
		id: 1,
		profilePicture: "/assets/person1.jpg",
		username: "Jason Bourne",
	},
	{
		id: 2,
		profilePicture: "/assets/person2.jpg",
		username: "David Humphy",
	},
	{
		id: 3,
		profilePicture: "/assets/person3.jpg",
		username: "William Rosewell",
	},
	{
		id: 4,
		profilePicture: "/assets/person4.jpg",
		username: "Steven Sneider",
	},
	{
		id: 5,
		profilePicture: "/assets/person5.jpg",
		username: "Chris Tommy",
	},
	{
		id: 6,
		profilePicture: "/assets/person6.jpg",
		username: "Kevin Stuart",
	},
	{
		id: 7,
		profilePicture: "/assets/person7.jpg",
		username: "James Mc.Kinsey",
	},
	{
		id: 8,
		profilePicture: "/assets/person8.jpg",
		username: "Robert Evans",
	},
	{
		id: 9,
		profilePicture: "/assets/person9.jpg",
		username: "Stephen Sinclare",
	},
];

export const Posts = [
	{
		id: 1,
		desc: "Love for all, hate for none.",
		date: "5 mins ago",
		userId: 1,
		like: 32,
		comment: 9,
	},
	{
		id: 2,
		desc: "Good evening ladies and gentlemen",
		photo: "/assets/person8.jpg",
		date: "10 mins ago",
		userId: 2,
		like: 280,
		comment: 74,
	},
	{
		id: 3,
		desc: "We are tonight's entertainment!",
		photo: "/assets/person7.jpg",
		date: "15 mins ago",
		userId: 2,
		like: 14,
		comment: 15,
	},
	{
		id: 4,
		desc: "I only have one question.",
		date: "20 mins ago",
		userId: 1,
		like: 92,
		comment: 4,
	},
	{
		id: 5,
		desc: "Where is Harvey Dent?",
		photo: "/assets/person5.jpg",
		date: "25 mins ago",
		userId: 2,
		like: 35,
		comment: 19,
	},
	{
		id: 6,
		desc: "Do you know where Harvey is?",
		date: "30 mins ago",
		userId: 1,
		like: 790,
		comment: 32,
	},
	{
		id: 7,
		desc: "Do you know who he is?",
		photo: "/assets/person3.jpg",
		date: "35 mins ago",
		userId: 2,
		like: 38,
		comment: 4,
	},
];
