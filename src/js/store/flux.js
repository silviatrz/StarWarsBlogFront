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
			item: null,
			favorites: [{ label: "(Empty)", url: "" }]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data =>
						setStore({
							characters: data.results
						})
					)
					.catch(err => console.error(err));
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/starships/")
					.then(res => res.json())
					.then(data =>
						setStore({
							vehicles: data.results
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
							item: data.result
						});
					})
					.catch(err => console.error(err));
			},
			resetItem: () => {
				setStore({
					item: null
				});
				localStorage.removeItem("url");
			},

			addFavorite: (name, url) => {
				const store = getStore();
				if (store.favorites[0]["label"] == "(Empty)") {
					let favs = [{ label: name, url: url }];
					setStore({
						favorites: favs
					});
				} else {
					let favs = !store.favorites.includes({ label: name, url: url })
						? [...store.favorites, { label: name, url: url }]
						: [...store.favorites];
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
					faves.push({ label: "(Empty)", url: "" });
				}
				setStore({
					favorites: faves
				});
			}
		}
	};
};

export default getState;
