import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faTwitter, faDiscord, faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faDiscord, faGithub, faTelegram)
/* import specific icons */
const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(BackToTop)
	.mount('#app');


// Check what is the active theme and change theme when user clicks on the theme button in header.
if (document.querySelector('body').classList.contains('app-theme')) {
	document.querySelector('body').classList.add('bg-hypersign-main-theme');
}
