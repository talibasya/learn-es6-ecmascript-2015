const store = createStore(todoApp);
console.log(store.getState());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
