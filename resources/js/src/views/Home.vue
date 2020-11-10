<template>
	<div :class=" windowWidth > 600 ? 'vx-row pt-16 px-10 pb-0' : 'vx-row pt-2 px-5 pb-0'">
        <div class="vx-col md:w-full lg:w-1/4 mb-base">
            <vx-card slot="no-body" class="main-card">
                <span class="main-title font-light">Organize seus leads e negócios no</span>
                <img src="@assets/images/pages/logo.png" alt="logo" class="mt-2 mb-6" style="height: 1.5rem;">
                <div class="vx-row px-4 items-center main-list font-bold pb-6">
                    <i class='vs-icon feather icon-sun main-color'></i>&nbsp;Receba seus leads
                    <p class="pl-6 pt-3 text-light sub-text">Lorem ipsum dolor sit amet.consectetur adipiscing elt donec nec finibus justo maecenas eros diam.</p>
                </div>
                <div class="vx-row px-4 items-center main-list font-bold pb-6">
                    <i class='vs-icon feather icon-flag main-color'></i>&nbsp;Registre suas atividades
                    <p class="pl-6 pt-3 text-light sub-text">Lorem ipsum dolor sit amet.consectetur adipiscing elt donec nec finibus justo maecenas eros diam.</p>
                </div>
                <div class="vx-row px-4 items-center main-list font-bold pb-6">
                    <i class='vs-icon feather icon-briefcase main-color'></i>&nbsp;Comece um negócios
                    <p class="pl-6 pt-3 text-light sub-text">Lorem ipsum dolor sit amet.consectetur adipiscing elt donec nec finibus justo maecenas eros diam.</p>
                </div>
                <div class="vx-row p-5">
                    <vs-button color="white" class="float-right custom-filled-button btn-block" type="filed">Comecar Agora</vs-button>
                </div>
            </vx-card>
        </div>
        <div class="vx-col md:w-full lg:w-3/4 mb-base">
            <img src="@assets/images/pages/main-back.png" alt="content-img" class="responsive card-img-top">
        </div>
        <complete-profile v-if="getRegisterFlag"/>
    </div>
</template>

<script>

import CompleteProfile  from "./modals/CompleteProfile"

export default{
    components: {
        CompleteProfile
    },
    computed: {
        getRegisterFlag() { return this.$store.state.registerFlag},
        windowWidth(){ return this.$store.state.windowWidth }
    },
}
</script>

<style lang="scss">
    .main-card {
        border-radius: 3px;
        .main-list {
            font-size: 0.8rem;
        }
        .main-title {
            font-size: 1.5rem;
        }
        .sub-text {
            font-size: 10px;
            font-weight: 100;
            line-height: 1.7;
        }
    }
</style>
