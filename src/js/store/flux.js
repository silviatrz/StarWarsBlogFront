const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			id: "",
			character: null,
			favorites: ["(Empty)"]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data =>
						setStore({
							planets: data.results
						})
					)
					.catch(err => console.error(err));
			},
			loadCharacters: () => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data =>
						setStore({
							characters: data.results
						})
					)
					.catch(err => console.error(err));
			},
			loadSingleItem: url => {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({
							character: data.result
						});
					})
					.catch(err => console.error(err));
			},
			resetItem: () => {
				setStore({
					character: null
				});
				localStorage.removeItem("url");
			},

			addFavorite: name => {
				const store = getStore();
				if (store.favorites[0] == "(Empty)") {
					let favs = [name];
					setStore({
						favorites: favs
					});
				} else {
					let favs = !store.favorites.includes(name) ? [...store.favorites, name] : [...store.favorites];
					setStore({
						favorites: favs
					});
				}
			},
			deleteFavorite: i => {
				const store = getStore();
				let favs = [...store.favorites];
				let faves = [];
				for (let f in favs) {
					if (f != i) {
						faves.push(favs[f]);
					}
				}
				if (faves.length == 0) {
					faves.push("(Empty)");
				}
				setStore({
					favorites: faves
				});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({
					demo: demo
				});
			}
		}
	};
};

export default getState;
