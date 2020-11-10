 <template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-title font-bold pb-2">Complete seu perfil</div>
                <div class="sub-title text-muted font-light pb-6">Vamos personalizar sua área de trabalho para uma melhor experiência</div>
                <form>
                    <div class="mb-6">
                        <span class="custom-placeholder">Seu Cargo</span>
                        <v-select
                            :options="jobTitles"
                            name="job_title"
                            v-model="job_title"
                            v-validate="'required'"/>
                        <span class="text-danger text-sm">{{ errors.first('job_title') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Setor da Empresa</span>
                        <v-select
                            :options="companies"
                            name="company"
                            v-model="company"
                            v-validate="'required'"/>
                        <span class="text-danger text-sm">{{ errors.first('company') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Quantidade de pessoas que usarão a Máquina de Leads</span>
                        <v-select
                            :options="numberPeoples"
                            name="number_people"
                            v-model="number_people"
                            v-validate="'required'"/>
                        <span class="text-danger text-sm">{{ errors.first('number_people') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="custom-placeholder">Telefone</span>
                        <vs-input
                            type="text"
                            v-validate="{ required: true, regex: /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/ }"
                            name="telephone"
                            :danger="errors.has('telephone')"
                            placeholder="ex. (21) 99999-9999"
                            val-icon-danger="clear"
                            v-model.lazy="telephone"
                            @keyup="telephoneMask"
                            class="w-full" />
                        <span class="text-danger text-sm">{{ errors.first('telephone') }}</span>
                    </div>

                    <div class="mb-6">
                        <span class="text-danger">{{error}}</span>
                    </div>

                    <div class="flex flex-wrap justify-between my-5">
                        <vs-button color="white" class="custom-filled-button btn-block" type="filed" @click="submitForm">Enviar e Acessar Conta</vs-button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import VMasker from 'vanilla-masker'
import vSelect from 'vue-select'
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    job_title: {
      required: 'O campo "Seu Cargo" é obrigatório'
    },
    company: {
      required: 'O campo "Setor da Empresa" é obrigatório'
    },
    number_people: {
      required: 'O campo "Quantidade de pessoas que usarão a Máquina de Leads" é obrigatório',
    },
    telephone: {
      required: 'O campo "Telefone" é obrigatório',
      regex: 'O campo "Telefone" precisa ser válido. Ex: (99) 9999-9999 ou (99) 99999-9999',
    },
  }
};

Validator.localize('en', dict);

export default{
    data() {
        return {
            job_title: "",
            company: "",
            number_people: "",
            telephone: "",
            error: "",
        }
    },
    computed: {
        jobTitles() { return this.$store.state.initialSelectData.jobTitle },
        companies() { return this.$store.state.initialSelectData.company },
        numberPeoples() { return this.$store.state.initialSelectData.numberPeople },
        getRegisterFlag() { return this.$store.state.registerFlag},
        activeUserId() { return this.$store.state.AppActiveUser.uid},
    },
    components: {
        VMasker,
        'v-select': vSelect,
    },
    methods: {
        telephoneMask(event) {
            var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
            var c = event.target;
            var v = c.value.replace(/\D/g, '');
            var m = c.value.length > 14 ? 1 : 0;
            VMasker(c).unMask();
            VMasker(c).maskPattern(telMask[m]);
            c.value = VMasker.toPattern(v, telMask[m]);
            this.telephone = c.value
        },
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.$http.post('/api/register_profile', {
                        id: this.activeUserId,
                        job_title: this.job_title.label,
                        company: this.company.label,
                        telephone: this.telephone,
                        number_people: this.number_people.label,
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('SET_REGISTER',false)
                        } else {
                            this.error = response.data.error
                        }
                    })
                    .catch(error => {
                        this.error = error
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .modal-title {
        font-size: 1.25rem;
        color: #3e3e3e;
    }
    .sub-title {
        font-size: .9rem;
    }
    .custom-placeholder {
        font-size: .8rem;
        position: relative;
        top: -5px;
    }
</style>
