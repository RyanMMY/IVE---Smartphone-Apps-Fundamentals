<template>
    <Page class="page">
        <StackLayout class="home-page1">
            <Image src="https://microbit.org/assets/posts/2017-03-07-guess-the-number.png" />
            <Button class="btn btn-outline" text="Start" @tap="onButtonTap" />
        </StackLayout>
    </Page>
</template>

<script>
    import Game from "./GameScreen";
    export default {
        methods: {
            onButtonTap() {
                this.$navigateTo(Game);
            }
        },

        data() {
            return {};
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>