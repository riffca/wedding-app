import './an-brand.scss';
import postData from '../../service/postData';
import token from '../../service/token';
import BrandPrice from './brand-price.vue';

export default {
	components: [BrandPrice],
    template: `
		<div id="an-brand" @selectstart.prevent @mousedown.prevent>
		    <div class="brand-wrapper">
		    <span class="logout-btn" v-if="auth" @click="logout()">Out</span>
		    <an-modal class="auth-btn" name="Auth" v-if="!auth">
				<div v-form-wrapper>
					<form @submit.prevent="authCheck()">
						<div>
							<label for="auth-password">Введите пароль</label>
							<input type="password" 
									id="auth-password"
									v-model="password" 
									required autofocus>
						</div>
						<button type="submit">Готово</button>
					</form>
				</div>
		    </an-modal>
		    	<h1>
			    	Фотограф
			    	<span v-link="{name: 'root'}" class="brand-name">
			    		Aннa Плюснина
			    	</span>
			    	<an-modal class="price-btn" name="Цены">
							<brand-price></brand-price>
					    	<an-svg-icon v-if="false" class="camera-svg" path="images/camera.svg"></an-svg-icon>
			    	</an-modal>
		    	</h1>    		
		    </div>
		    <div class="link-wrapper">
			    <a v-link="{name: 'wedding'}">Свадьбы</a>
			    <a v-link="{name: 'loveStory'}">Love story</a>
			    <a v-link="{name: 'customers'}" v-if="auth">Клиенты</a>
			    <a v-link="{name: 'contacts'}">Контакты</a>
		    </div>
		</div>

	`,
    props: ['links'],
    data() {
        return {
            auth: token.getToken(),
            password: ''
        };
    },
    methods: {
        logout() {
            token.removeToken();
            this.auth = false;
        },
        authCheck() {
            postData
                .post('/api/auth/check', { password: this.password })
                .then(data => {
                    if (data.success === true) {

                        this.auth = token.setToken(data.token);
                        alert(data.message);
                        this.$route.router.go({ name: 'customers' });

                    } else {
                        this.logout();
                        alert(data.message);
                        this.$route.router.go({ name: 'root' });
                    }
                });
        }
    }
};
