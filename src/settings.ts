import Settings from './Settings.svelte';

console.log('settings');

const settingsDiv = document.getElementById('settings-root');
var settings = new Settings({
	target: settingsDiv
});

// export default settings;